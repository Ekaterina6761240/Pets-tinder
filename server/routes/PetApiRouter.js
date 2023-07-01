import express from 'express';
import { Pet } from '../db/models';

const Petrouter = express.Router();

Petrouter.post('/', async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.json(newPet);
  } catch (e) {
    console.log(e);
  }
});

Petrouter.put('/:id', async (req, res) => {
  try {
    const petId = req.params.id;
    const updatedPet = await Pet.findOneAndUpdate({ _id: petId }, req.body, { new: true });

    if (updatedPet) {
      res.json(updatedPet);
    } else {
      res.status(404).json({ message: 'Питомец не найден' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Что-то пошло не так' });
  }
});

export default Petrouter;
