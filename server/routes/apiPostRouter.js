const apiPostRouter = require('express').Router();
const fs = require('fs').promises;
const sharp = require('sharp');
// const { Post } = require('../db/models');
const upload = require('../middlewares/multerMid');

apiPostRouter.get('/', async (req, res) => {
  try {
    console.log('=======)');
    const posts = await Post.findAll();
    console.log('allll---------------', posts);
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

apiPostRouter.post('/', upload.single('file'), async (req, res) => {
  console.log(',,,,,,,,,======', req.body);

  try {
    // создаем имя файла с расширением webp и привязкой к дате
    // const name = `${Date.now()}.webp`;
    // // создаем буфер с помощью sharp
    // const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    // // создаем файл с помощью fs
    // await fs.writeFile(`./public/img/${name}`, outputBuffer);
    // создаем пост в бд
    const post = await Post.create({
      title: req.body.title,
      img: req.body.img,
      // userId: req.session.user.userId,
    });
    console.log(post);
    // отправляем пост
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

apiPostRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    res.status(400).json({ message: 'Bad request id' });
    return;
  }
  try {
    const post = await Post.findOne({
      id: req.params.id,
    });
    if (!post) {
      res.status(400).json({ message: 'post not found' });
      return;
    }
    fs.unlink(`./public/img/${post.img}`).catch((e) => console.log(e));
    await post.destroy();
    res.json({ message: 'Post deleted' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = apiPostRouter;
