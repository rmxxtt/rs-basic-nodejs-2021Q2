const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const create = req => usersRepo.create(req);
const get = req => usersRepo.get(req);

module.exports = { getAll, create, get };
