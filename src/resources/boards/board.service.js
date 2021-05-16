const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const create = (req) => boardsRepo.create(req);

module.exports = { getAll, create };
