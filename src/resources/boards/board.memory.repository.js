const { DB } = require('../../database/database');
const BOARD = require('./board.model');

const getAll = async () => DB.boards;

const create = async (req) => {
  const board = new BOARD(req.body);
  DB.boards.push(board);
  return board;
};

const get = async (req) => DB.boards.find(board => board.id === req.params.id);

const update = async (req) => {
  const board = await get(req);
  if (board) {
    board.title = req.body.title;
    board.columns[0].id = req.body.columns[0].id;
    board.columns[0].title = req.body.columns[0].title;
    board.columns[0].order = req.body.columns[0].order;
    return board;
  }

  return false;
};

const delete_ = async (req) => {
  const index = DB.boards.findIndex(board => board.id === req.params.id);
  // console.log('index 7 777', index)
  if(index === -1){
    return false;
  }
  // DB.boards.splice(index, 1);

  // const tasks = DB.tasks.filter(task => task.boardId === req.params.id);
  // tasks.forEach((element) => {element.userId = null});
  for (let i = 0; i < DB.tasks.length; i += 1) {
    // arr[i] += 5;
    if (DB.tasks[i].boardId === req.params.id){
      DB.tasks.splice(i, 1);
    }
  }

  DB.boards.splice(index, 1);
  return true;
  // TODO When somebody DELETEs Board, all its Tasks should be deleted as well.
};

module.exports = { getAll, create, get, update, delete_ };
