const AbstractManager = require("./AbstractManager");

class choicesManager extends AbstractManager {
  constructor() {
    super({ table: "choices" });
  }

  insert(choices) {
    return this.connection.query(
      `insert into ${this.table} (id, name, suggests_id) values (?,?,?)`,
      [choices.id, choices.name, choices.suggests_id]
    );
  }

  update(choices) {
    return this.connection.query(
      `update ${this.table} set id = ?, name = ?, suggests_id=?`,
      [choices.id, choices.name, choices.suggests_id]
    );
  }
}

module.exports = choicesManager;
