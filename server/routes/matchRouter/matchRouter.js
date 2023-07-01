const matchRouter = require('express').Router();
const { Pet } = require('../../db/models');
// import express from 'express';
// import { Pet, Like } from '../../db/models';

// const matchRouter = express.Router();

// const {Pet} = require('../../db/models');

matchRouter.get('/', async (req, res) => {
  try {
    const pets = await Pet.findAll({ raw: true });

    res.json(pets);

    console.log('!!!!!!!', pets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// matchRouter.get('/', async (req, res) => {
//   try {
//     const { id } = req.body;
//     const newMatch = await Pet.findAll({
//       include: [
//         {
//           model: Like,
//           as: 'Likes',
//           include: [
//             { model: Pet, as: 'Liker' },
//             { model: Pet, as: 'Liked' },
//           ],
//         },
//       ],
//     });
//     const match = newMatch.filter((el) => el.Likes.id === id);
//     res.json(match);
//     console.log(match); // получим список всех питомцев с взаимными лайками
//     console.log('!!!!!!!', match);
//   } catch (error) {
//     console.log(error);
//   }
// });
module.exports = matchRouter;
