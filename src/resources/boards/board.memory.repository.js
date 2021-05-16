const { DB } = require('../../database/database');
const BOARD = require('./board.model');

const getAll = async () => DB.boards;

const create = async (req) => {
  const board = new BOARD(req.body);
  DB.boards.push(board);
  return board;
};

const get = async (req) => DB.boards.find(board => board.id === req.params.id);

module.exports = { getAll, create, get };
