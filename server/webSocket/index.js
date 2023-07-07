const { WebSocketServer } = require('ws');
const sessionParser = require('../middlewares/sessionMiddle');

const map = new Map();

function onSocketError(err) {
  console.error(err);
}

const wss = new WebSocketServer({ clientTracking: false, noServer: true });

const upgradeCb = (request, socket, head) => {
  socket.on('error', onSocketError);

  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
    if (!request.session.user) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    socket.removeListener('error', onSocketError);

    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });
};

const connectionCb = (ws, request) => {
  const { id } = request.session.user;

  map.set(id, [ws, request.session.user]);

  map.forEach(([wsItem]) => {
    wsItem.send(
      JSON.stringify({
        type: 'USERS_ONLINE',
        payload: Array.from(map.values()).map(([, oneUser]) => oneUser),
      }),
    );
  });

  ws.on('error', console.error);

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      console.log('data', data.payload);
      switch (data.type) {
        case 'CHAT_MESSAGE':
          map.forEach(([wsItem, users]) => {
            if (users.id === Number(data.payload.userId) || users.id === Number(id)) {
              console.log('---->', data.payload, 'user', users);
              wsItem.send(
                JSON.stringify({
                  type: 'CHAT_MESSAGE',
                  payload: {
                    user: request.session.user,
                    message: data.payload.message,
                    id: Date.now(),
                  },
                }),
              );
            }
          });
          break;

        default:
          break;
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
  ws.on('close', () => {
    console.log('user disconnected');
    map.delete(id);
  });
};

module.exports = { wss, upgradeCb, connectionCb };
