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
  if (user) {
    res.json(User.toResponse(user));
  }

  res.status(404).send('User not found');
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.update(req);
  if (user) {
    res.status(200).json(User.toResponse(user));
  }

  res.status(400).send('Bad request');
});

router.route('/:id').delete(async (req, res) => {
  const wasUpdate = await usersService.delete_(req);
  if (wasUpdate) {
    res.status(204).send('The user has been deleted');
  }

  res.status(404).send('User not found');
});

module.exports = router;
