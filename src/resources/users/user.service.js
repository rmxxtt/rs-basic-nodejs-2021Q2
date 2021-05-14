const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const create = req => usersRepo.create(req);
const get = req => usersRepo.get(req);
const update = req => usersRepo.update(req);
const delete_ = req => usersRepo.delete_(req);

module.exports = { getAll, create, get, update, delete_ };
