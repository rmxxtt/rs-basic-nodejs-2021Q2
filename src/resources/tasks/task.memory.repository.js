const { DB } = require('../../database/database');
// const TASK = require('./board.model');

const getAll = async () => DB.tasks;

module.exports = { getAll };
