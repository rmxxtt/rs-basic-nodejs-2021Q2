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
    board.columns.id = req.body.columns.id;
    board.columns.title = req.body.columns.title;
    board.columns.order = req.body.columns.order;
    return board;
  }

  return false;
};

module.exports = { getAll, create, get, update };
