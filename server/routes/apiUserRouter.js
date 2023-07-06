const apiAuthRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

apiAuthRouter.post('/reg', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ message: 'no user full data' });
      return;
    }
    const searchEmail = await User.findOne({
      where: { email },
    });
    if (searchEmail) {
      res.status(400).json({ message: 'email exists' });
      return;
    }
    const hashPass = await bcrypt.hash(password, 5);
    const newUser = await User.create({
      name,
      email,
      password: hashPass,
    });

    req.session.user = { id: newUser.id, name: newUser.name, email: newUser.email };
    req.session.save();
    // res.cookie('sId', req.session.id, { httpOnly: true });
    console.log(req.session.user);
    // if (!req.session.user) {
    //   res.status(401).json({ message: 'no cookies' });
    // }

    res.json({ id: newUser.id, name: newUser.name, email: newUser.email });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'server error' });
  }
});

apiAuthRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'no user full data' });
    return;
  }
  const currentUser = await User.findOne({
    where: { email },
  });
  if (!currentUser || !(await bcrypt.compare(password, currentUser.password))) {
    res.status(401).json({ message: 'email not exists' });
    return;
  }
  req.session.user = {
    id: currentUser.id,
    name: currentUser.name,
    email: currentUser.email,
  };
  res.json(req.session.user);
});

apiAuthRouter.get('/check', (req, res) => {
  if (!req.session.user) {
    res.status(401).json({ message: 'no cookies' });
    return;
  }
  res.json(req.session.user);
});

apiAuthRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sId');
  res.sendStatus(200);
});

module.exports = apiAuthRouter;
