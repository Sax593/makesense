const AbstractManager = require("./AbstractManager");

class ChoicesManager extends AbstractManager {
  constructor() {
    super({ table: "choices" });
  }

  insert(choices) {
    return this.connection.query(
      `insert into ${this.table} (id, name, suggests_id) values (?,?,?)`,
      [choices.id, choices.name, choices.suggests_id]
    );
  }

  countVote(id) {
    return this.connection.query(
      `SELECT choices.title, count(votes.choices_id) as count FROM choices inner join votes on votes.choices_id=choices.id where choices.suggests_id = ? group by choices_id`,
      [id]
    );
  }

  update(choices) {
    return this.connection.query(
      `update ${this.table} set id = ?, name = ?, suggests_id=?`,
      [choices.id, choices.name, choices.suggests_id]
    );
  }
}

module.exports = ChoicesManager;
