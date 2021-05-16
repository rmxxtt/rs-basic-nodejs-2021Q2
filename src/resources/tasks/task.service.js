const tasksRepo = require('./task.memory.repository');

const getAll = req => tasksRepo.getAll(req);
const create = req => tasksRepo.create(req);
const get = req => tasksRepo.get(req);
const update = req => tasksRepo.update(req);
const delete_ = req => tasksRepo.delete_(req);

module.exports = { getAll, create, get, update, delete_ };
