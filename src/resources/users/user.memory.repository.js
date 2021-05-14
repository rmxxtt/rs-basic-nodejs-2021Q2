const { DB } = require('../../database/database');
const USER = require('./user.model');

const getAll = async () => DB.users;

const create = async (req) => {
  const user = new USER(req.body);
  DB.users.push(user);
  return USER.toResponse(user);
};

const get = async (req) => DB.users.filter(user => user.id === req.params.id);

const update = async (req) => {
  const user = (await get(req))[0];
  if (user) {
    user.name = req.body.name;
    user.login = req.body.login;
    user.password = req.body.password;
    return user;
  }

  return false;
};

const delete_ = async (req) => {
  const index = DB.users.findIndex(user => user.id === req.params.id);
  if(!index){
    return false;
  }
  DB.users.splice(index, 1);
  return true;
};

module.exports = { getAll, create, get, update, delete_ };
