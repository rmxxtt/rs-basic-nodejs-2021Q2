const { DB } = require('../../database/database');
const TASK = require('./task.model');

const getAll = async () => DB.tasks;

const create = async (req) => {
  const board = new TASK({...req.body,boardId: req.params.boardId});
  DB.tasks.push(board);
  return board;
};

const get = async (req) => DB.tasks.filter(task => task.id === req.params.taskId)[0];

const update = async (req) => {
  const task = DB.tasks.find(task_ => task_.id === req.params.taskId);
  if (task) {
    task.title = req.body.title;
    task.order = req.body.order;
    task.description = req.body.description;
    task.userId = req.body.userId;
    task.boardId = req.body.boardId;
    task.columnId = req.body.columnId;
    return task;
  }

  return false;
};

const delete_ = async (req) => {
  const index = DB.tasks.findIndex(task_ => task_.id === req.params.taskId);
  if (index === -1) {
    return false;
  }
  DB.tasks.splice(index, 1);
  return true;
};

module.exports = { getAll, create, get, update, delete_ };
