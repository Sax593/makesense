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
    return (
      this.connection.query(
        `SELECT choices.title, COUNT(choices.title) as count_title FROM choices LEFT JOIN votes ON choices.id=votes.choices_id WHERE choices.suggests_id = ? GROUP BY choices.title;`
      ),
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
