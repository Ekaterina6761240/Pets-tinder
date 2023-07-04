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
    const petLike = await Like.findAll({ where: { who_liked_pet_id: pet.id } });

    const arr = petLike.map((el) => el.was_liked_pet_id);

    const findPet = await Pet.findAll({
      where: {
        sex: {
          [Op.not]: pet?.sex,
        },
        id: { [Op.not]: pet?.id },
        type: pet?.type,
      },
    });

    const filteredPet = findPet.filter((el) => !arr.includes(el.id));
    res.json(filteredPet);
  } catch (error) {
    console.log(error);
  }
});

module.exports = swipePageRouter;
