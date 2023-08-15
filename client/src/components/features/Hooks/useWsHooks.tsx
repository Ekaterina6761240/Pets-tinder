import React, { useEffect } from 'react';
import type { WsFormType, WsRecivedMessagesType } from '../../Types/wsTypes';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import emitter from '../../services/emmitService';
import { setMessage, setUsersOnline, setWs } from '../redux/slices/wsSlice';

export default function useWsHook(userId: string): (e: WsFormType) => void {
  const user = useAppSelector((state) => state.user.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user === 'success') {
      const socket = new WebSocket('ws://localhost:3001');

      socket.onopen = () => {
        dispatch(setWs(true));

        emitter.on('chatMessage', (message: string) => {
          socket.send(
            JSON.stringify({
              type: 'CHAT_MESSAGE',
              payload: {
                message,
                userId,
              },
            }),
          );
        });

        socket.onmessage = (event: MessageEvent<string>) => {
          const wsData = JSON.parse(event.data) as WsRecivedMessagesType;

          switch (wsData.type) {
            case 'USERS_ONLINE':
              dispatch(setUsersOnline(wsData.payload));
              break;
            case 'CHAT_MESSAGE':
              dispatch(setMessage(wsData.payload));
              break;
            default:
              break;
          }
        };
      };

      socket.onclose = () => {
        dispatch(setWs(false));
      };

      socket.onerror = () => {
        dispatch(setWs(false));
      };

      return () => {
        socket.close();
        dispatch(setWs(false));
      };
    }

    return () => {
      dispatch(setWs(false));
      emitter.removeAllListeners();
    };
  }, [user, dispatch, userId]);

  const submitChatHandler = (e: WsFormType): void => {
    e.preventDefault();
    const message = e.currentTarget.message.value;
    e.currentTarget.reset();
    emitter.emit('chatMessage', message, userId);
  };

  return submitChatHandler;
}
