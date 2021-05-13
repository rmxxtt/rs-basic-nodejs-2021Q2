const { DB } = require('../../database/database');
const USER = require('./user.model');

const getAll = async () => DB.users;

const create = async (req) => {
  const user = new USER(req.body);
  DB.users.push(user);
  return USER.toResponse(user);
};

const get = async (req) => DB.users.filter(user => user.id === req.params.id);

module.exports = { getAll, create, get };
