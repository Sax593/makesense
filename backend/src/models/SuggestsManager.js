const AbstractManager = require("./AbstractManager");

class SuggestsManager extends AbstractManager {
  constructor() {
    super({ table: "suggests" });
  }

  insert(suggests) {
    return this.connection.query(
      `insert into ${this.table} (title, description, date, consequences, priority, finale_decision) values (?,?,?,?,?,?)`,
      [
        suggests.title,
        suggests.description,
        suggests.date,
        suggests.consequences,
        suggests.priority,
        suggests.finale_decision,
      ]
    );
  }

  update(suggests) {
    return this.connection.query(
      `update ${this.table} set title = ?, description = ?, date=?, consequences = ? , priority = ?, finale_decision=? where id = ?`,
      [
        suggests.title,
        suggests.description,
        suggests.date,
        suggests.consequences,
        suggests.priority,
        suggests.finale_decision,
        suggests.id,
      ]
    );
  }
}

module.exports = SuggestsManager;
