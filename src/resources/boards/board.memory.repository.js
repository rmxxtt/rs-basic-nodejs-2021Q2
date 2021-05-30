const { DB } = require('../../database/database');
const BOARD = require('./board.model');

/**
 *
 * @returns {Promise<[]>}
 */
const getAll = async () => DB.boards;

/**
 *
 * @param req
 * @returns {Promise<Board>}
 */
const create = async (req) => {
  const board = new BOARD(req.body);
  DB.boards.push(board);
  return board;
};

/**
 *
 * @param req
 * @returns {Promise<*>}
 */
const get = async (req) => DB.boards.find(board => board.id === req.params.id);

/**
 *
 * @param req
 * @returns {Promise<boolean|*>}
 */
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

/**
 *
 * @param req
 * @returns {Promise<boolean>}
 * @private
 */
const delete_ = async (req) => {
  const index = DB.boards.findIndex(board => board.id === req.params.id);

  if(index === -1){
    return false;
  }

  for (let i = DB.tasks.length - 1; i >= 0; i -= 1) {
    if (DB.tasks[i].boardId === req.params.id){
     DB.tasks.splice(i, 1);
    }
  }

  DB.boards.splice(index, 1);
  return true;
};

module.exports = { getAll, create, get, update, delete_ };
