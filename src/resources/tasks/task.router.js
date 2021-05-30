const router = require('express').Router({ mergeParams: true });
// const Board = require('./board.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req);
  res.status(200).json(tasks);
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(req);
  res.status(201).json(task);
});

router.route('/:taskId').get(async (req, res) => {
  const tasks = await tasksService.get(req);
  if (tasks) {
    res.status(200).json(tasks);
  } else {
    res.status(404).send('Task not found');
  }
});


router.route('/:taskId').put(async (req, res) => {
  const task = await tasksService.update(req);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

router.route('/:taskId').delete(async (req, res) => {
  const wasUpdate = await tasksService.delete_(req);
  if (wasUpdate) {
    res.status(204).send('The task has been deleted');
  } else {
    res.status(404).send('Task not found');
  }
});

module.exports = router;
