const swipePageRouter = require('express').Router();

const { Op } = require('sequelize');
const { Pet, Like } = require('../../db/models');

// swipePageRouter.post('/', async (req, res) => {
//   try {
//     const { id, idMyPet } = req.body;
//     // const idMyPet = req.body.id;
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

swipePageRouter.post('/', async (req, res) => {
  try {
    const { pet } = req.body;
    // const petLike = await Like.findAll({ where: { who_liked_pet_id: pet.id } });

    const findPet = await Pet.findAll({
      where: {
        sex: {
          [Op.not]: pet?.sex,

          // type: pet?.type,
          // include: [{ model: Like, where: { [Op.or]: !petLike } }],
        },
        id: { [Op.not]: pet?.id },
        type: pet?.type,
      },
    });
    console.log(findPet);
    // res.json(petLike);
  } catch (error) {
    console.log(error);
  }

  // const findPet = await Pet.findAll({
  //   where: {
  //     id: !pet?.id,
  //     name: !pet?.sex,
  //     type: pet?.type,
  //     include: [{ model: Like, where: { who_liked_pet_id: pet?.id } }],
  //   },
  // });
  // res.json(findPet);
});

//
// const petLike = await Like.findAll({ where: { who_liked_pet_id: pet.id } });
// console.log(pet, '11111pet');
module.exports = swipePageRouter;
