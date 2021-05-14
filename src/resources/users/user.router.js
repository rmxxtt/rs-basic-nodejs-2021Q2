const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.status(200).json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(req);
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req);
  if (user.length) {
    res.json(User.toResponse(user[0]));
  }

  res.status(404).send('User not found');
});

module.exports = router;
