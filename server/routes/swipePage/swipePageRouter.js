const swipePageRouter = require('express').Router();

const { Op } = require('sequelize');
const { Pet, Like } = require('../../db/models');

swipePageRouter.post('/like', async (req, res) => {
  try {
    const { id, idMyPet } = req.body;
    const liked = await Like.create({
      who_liked_pet_id: idMyPet,
      was_liked_pet_id: id,
      isLiked: true,
    });

    res.json(liked);
  } catch (error) {
    console.log(error);
  }
});

swipePageRouter.post('/dislike', async (req, res) => {
  try {
    const { id, idMyPet } = req.body;
    // const idMyPet = req.body.id;
    // console.log({ id, idMyPet }, '1!11!!!!!!!!!!!!!!!!!!!');
    const dislike = await Like.create({
      who_liked_pet_id: idMyPet,
      was_liked_pet_id: id,
      isLiked: false,
    });

    res.json(dislike);
  } catch (error) {
    console.log(error);
  }
});

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
