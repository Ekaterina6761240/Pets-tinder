const matchRouter = require('express').Router();
const { Op } = require('sequelize');
const { Pet, Like } = require('../../db/models');
// import express from 'express';
// import { Pet, Like } from '../../db/models';

// const matchRouter = express.Router();

// const {Pet} = require('../../db/models');

// matchRouter.get('/', async (req, res) => {
//   try {
//     const pets = await Pet.findAll({ raw: true });

//     res.json(pets);

//     console.log('!!!!!!!', pets);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// пост запрос на то кого мы лайкаем

// matchRouter.post('/liked/:id', async (req, res) => {
//   try {
//     const { id } = req.body;
//     const idMyPet = req.params.id;
//     const liked = await Like.findAll({
//       where: {
//         who_liked_pet_id: id,
//         was_liked_pet_id: idMyPet,
//       },
//     });
//     if (!liked) {
//       await Like.create({
//         who_liked_pet_id: idMyPet,
//         was_liked_pet_id: id,
//         isLiked: false,
//       });
//     } else {
//       await Like.update(
//         {
//           isLiked: true,
//         },
//         {
//           where: {
//             who_liked_pet_id: id,
//             was_liked_pet_id: idMyPet,
//           },
//         },
//       );
//     }

//     // res.json(liked)
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//   }
// });

matchRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const likes = await Like.findAll({
      where: {
        [Op.or]: [{ who_liked_pet_id: id }, { was_liked_pet_id: id }],
        isLiked: true,
      },
      attributes: ['who_liked_pet_id', 'was_liked_pet_id'],
    });

    const petIds = likes.reduce((result, like) => {
      if (like.who_liked_pet_id === id) {
        result.push(like.was_liked_pet_id);
      } else {
        result.push(like.who_liked_pet_id);
      }
      return result;
    }, []);

    const patsMatch = petIds.filter((petId) => petId !== Number(id));

    const pets = await Pet.findAll({
      where: {
        id: patsMatch,
      },
    });

    res.json(pets);
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// const metchPetId = petIds.filter((petId) => petId !== id);

// console.log('!!!!!!!!!', metchPetId);
//     const match = await Pet.findAll({
//       include: {
//         model: Like,
//       {where:{
//         who_liked_pet_id:id,
//         isLiked:true
//       }||{was_liked_pet_id: id,
//         isLiked: true,}}}
//     })

//     res.json(match);

//     console.log('!!!!!!!', newMatch); // получим список всех питомцев с взаимными лайками
//     // console.log('!!!!!!!', match);
//   } catch (error) {
//     console.log(error);
//   }
// });
module.exports = matchRouter;

// const who_liked_pet_id = await Like.findAll({
//   attributes: ['who_liked_pet_id'],
//   where: {

//   }

// })
// const newMatch = await Pet.findAll({
//   include: [
//     {
//       model: Like,
//       // as: 'Likes',
//       include: [
//         { model: Pet, attributes: [] },
//         // { model: Pet, as: 'Liked', attributes: [] },
//       ],
//       where: {(who_liked_pet_id===id)
//         // [Op.and]: [{ '$Liker.id$': { [Op.eq]: id } }, { '$Liked.id$': { [Op.eq]: id } }],
//       },
//     },
//   ],
// });
