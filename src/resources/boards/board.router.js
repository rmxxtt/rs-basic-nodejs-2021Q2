const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.status(200).json(boards);
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(req);
  res.status(201).json(board);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req);
  if (board) {
    res.json(board);
  } else {
    res.status(404).send('Board not found');
  }
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update(req);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(400).send('Bad request');
  }
});

router.route('/:id').delete(async (req, res) => {
  const wasUpdate = await boardsService.delete_(req);
  if (wasUpdate) {
    res.status(200).send('The board has been deleted');
  } else {
    res.status(404).send('Board not found');
  }
});

module.exports = router;
