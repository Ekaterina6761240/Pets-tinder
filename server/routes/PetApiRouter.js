const Petrouter = require('express').Router();
const fs = require('fs').promises;
const sharp = require('sharp');
const { Pet } = require('../db/models');
const upload = require('../middlewares/multerMid');

// const Petrouter = express.Router();

Petrouter.get('/', async (req, res) => {
  try {
    const allPets = await Pet.findAll({
      where: {
        user_id: req.session.user.id,
      },
    });
    res.json(allPets);
  } catch (err) {
    res.status(500);
  }
});

Petrouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const allPets = await Pet.findByPk({ id });
    res.json(allPets);
  } catch (err) {
    res.status(500);
  }
});

Petrouter.post('/', upload.single('image'), async (req, res) => {
  console.log(req.file, 'req.file: =========>');
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }
  try {
    const name = `${Date.now()}.webp`;
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    await fs.writeFile(`./public/img/${name}`, outputBuffer);
    const newPet = await Pet.create({
      name: req.body.name,
      type: req.body.type,
      age: req.body.age,
      image: name,
      sex: req.body.sex,
      city: req.body.city,
      info: req.body.info,
      pedigree: req.body.pedigree,
      user_id: req.session.user.id,
    });
    res.json(newPet);
    console.log(newPet, 'newPet: =========>');
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

Petrouter.post('/:id', upload.single('image'), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }
  try {
    console.log('req.body: =========>', req.body);
    const name = `${Date.now()}.webp`;
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    await fs.writeFile(`./public/img/${name}`, outputBuffer);
    const { id } = req.params;
    await Pet.update(
      {
        name: req.body.name,
        type: req.body.type,
        age: req.body.age,
        image: name,
        sex: req.body.sex,
        city: req.body.city,
        info: req.body.info,
        pedigree: req.body.pedigree,
      },
      { where: { id } },
    );
    const updatedPet = await Pet.findByPk(req.params.id);
    // const user = await User.findByPk(req.session.user.id);
    // res.json({
    //   ...updatedPet.toJSON(),
    //   User: user,
    // });
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

// export default Petrouter;
module.exports = Petrouter;
