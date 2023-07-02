require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sessionParser = require('./middlewares/sessionMiddle');
const apiAuthRouter = require('./routes/apiUserRouter');
const matchRouter = require('./routes/matchRouter/matchRouter');

// const PetApiRouter = require('./routes/apiPetRouter');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors({ credentials: true, origin: true }));

app.use(sessionParser);

// app.use('/api/pets', PetApiRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/match', matchRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
