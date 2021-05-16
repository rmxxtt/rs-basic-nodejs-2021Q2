const { DB } = require('../../database/database');
// const BOARD = require('./board.model');

const getAll = async () => DB.boards;

module.exports = { getAll };
