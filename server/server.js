require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sessionParser = require('./middlewares/sessionMiddle');
const apiAuthRouter = require('./routes/apiUserRouter');
const Petrouter = require('./routes/PetApiRouter');
const matchRouter = require('./routes/matchRouter/matchRouter');
const apiCurrentRouter = require('./routes/apiCurrentRouter');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors({ credentials: true, origin: true }));

app.use(sessionParser);

app.use('/api/pets', Petrouter);
app.use('/api/auth', apiAuthRouter);
app.use('/match', matchRouter);
app.use('/current', apiCurrentRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
