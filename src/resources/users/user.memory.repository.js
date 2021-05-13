const { DB } = require('../../database/database');

const getAll = async () => DB.users;

module.exports = { getAll };
