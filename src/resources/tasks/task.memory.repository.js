const { DB } = require('../../database/database');
const TASK = require('./task.model');

// return DB.tasks.filter(task => task.boardId === req.params.boardId);
const getAll = async () => DB.tasks;

const create = async (req) => {
  // const board = new TASK(req.body);
  // { ...req.body, boardId: req.params.id }
  const board = new TASK({...req.body,boardId: req.params.id});
  // console.log()
  DB.tasks.push(board);
  return board;
};

// DB.tasks.filter(task => (task.boardId === req.params.boardId && task.id === req.params.taskId));
const get = async (req) => DB.tasks.filter(task => task.id === req.params.taskId)[0];

const update = async (req) => {
  // const task = DB.tasks.find(task_ => (task_.boardId === req.params.boardId && task_.id === req.params.taskId));
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
  // const index = DB.tasks.findIndex(task_ => (task_.boardId === req.params.boardId && task_.id === req.params.taskId));
  const index = DB.tasks.findIndex(task_ => task_.id === req.params.taskId);
  if (index === -1) {
    return false;
  }
  DB.tasks.splice(index, 1);
  return true;
  // TODO When somebody DELETEs Board, all its Tasks should be deleted as well.
};

module.exports = { getAll, create, get, update, delete_ };
