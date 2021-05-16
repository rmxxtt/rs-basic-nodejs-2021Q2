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
    this.columns = [new Column(columns[0])];
  }
}

module.exports = Board;
