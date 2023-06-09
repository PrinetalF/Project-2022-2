const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { username, password, name } = req.body;

  // simple validation
  if (!name || !username || !password) {
    return res.render('register', { message: 'Please try again' });
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  const user = new User({
    name,
    username,
    password: passwordHash
  });

  await user.save();
  res.render('index', { user });
});



