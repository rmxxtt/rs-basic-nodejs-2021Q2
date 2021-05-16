const router = require('express').Router({ mergeParams: true });
// const Board = require('./board.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.status(200).json(tasks);
});

module.exports = router;
