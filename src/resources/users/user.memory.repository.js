const { DB } = require('../../database/database');
const USER = require('./user.model');

const getAll = async () => DB.users;

const create = async (req) => {
  const user = new USER(req.body);
  DB.users.push(user);
  return USER.toResponse(user);
};

const get = async (req) => DB.users.find(user => user.id === req.params.id);

const update = async (req) => {
  const user = await get(req);
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

  const userTasks = DB.tasks.filter(task => task.userId === req.params.id);
  // eslint-disable-next-line no-param-reassign,no-return-assign
  userTasks.forEach(element => element.userId = null);

  return true;
};

module.exports = { getAll, create, get, update, delete_ };
