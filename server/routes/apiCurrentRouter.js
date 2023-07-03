const apiCurrentRouter = require('express').Router();
const { Pet } = require('../db/models');

apiCurrentRouter.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const current = await Pet.findByPk(id);

    res.json(current);
  } catch {
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

module.exports = apiCurrentRouter;
