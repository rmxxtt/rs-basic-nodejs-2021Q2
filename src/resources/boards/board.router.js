const router = require('express').Router();
// const Board = require('./board.model');
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
  }

  res.status(404).send('Board not found');
});

module.exports = router;
