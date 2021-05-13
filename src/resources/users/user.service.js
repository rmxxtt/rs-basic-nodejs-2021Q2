const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const create = (req) => usersRepo.create(req);

module.exports = { getAll, create };
