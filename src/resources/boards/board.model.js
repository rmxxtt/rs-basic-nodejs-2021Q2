const { v4: uuidv4 } = require('uuid');
const Column = require('../column/column.model');

class Board {
  constructor({
                id = uuidv4(),
                title = 'string',
                columns = [new Column()],
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(column => new Column(column));
  }
}

module.exports = Board;
