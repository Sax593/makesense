const AbstractManager = require("./AbstractManager");

class SuggestsManager extends AbstractManager {
  constructor() {
    super({ table: "suggests" });
  }

  insert(suggests) {
    return this.connection.query(
      `insert into ${this.table} (title, description, date, consequences, priority, final_decision) values (?,?,?,?,?,?)`,
      [
        suggests.title,
        suggests.description,
        suggests.date,
        suggests.consequences,
        suggests.priority,
        suggests.final_decision,
      ]
    );
  }

  update(suggests) {
    return this.connection.query(
      `update ${this.table} set title = ?, description = ?, date=?, consequencies = ? , priority = ?, final_discution=? where id = ?`,
      [
        suggests.title,
        suggests.description,
        suggests.date,
        suggests.consequences,
        suggests.priority,
        suggests.final_decision,
        suggests.id,
      ]
    );
  }
}

module.exports = SuggestsManager;
