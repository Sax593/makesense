const AbstractManager = require("./AbstractManager");

class SuggestsManager extends AbstractManager {
  constructor() {
    super({ table: "suggests" });
  }

  insert(suggests) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [suggests.title]
    );
  }

  update(suggests) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [suggests.title, suggests.id]
    );
  }
}

module.exports = SuggestsManager;
