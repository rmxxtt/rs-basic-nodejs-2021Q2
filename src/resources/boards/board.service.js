const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const create = (req) => boardsRepo.create(req);
const get = req => boardsRepo.get(req);
const update = req => boardsRepo.update(req);
const delete_ = req => boardsRepo.delete_(req);

module.exports = { getAll, create, get, update, delete_ };
