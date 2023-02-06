const AbstractManager = require("./AbstractManager");

class SuggestsManager extends AbstractManager {
  constructor() {
    super({ table: "suggests" });
  }

  insert(suggests) {
    return this.connection.query(
      `insert into ${this.table} (title, description, date, consequences, priority, contribution_date, vote_date, final_date) values (?,?,NOW(),?,?,?,?,?)`,
      [
        suggests.title,
        suggests.description,
        suggests.consequences,
        suggests.priority,
        suggests.contribution_date,
        suggests.vote_date,
        suggests.final_date,
      ]
    );
  }

  update(suggests) {
    return this.connection.query(
      `update ${this.table} set title = ?, description = ?, date=?, consequences = ? , priority = ?, finale_decision=? where id = ?, contribution_date = ?, vote_date = ?, final_date = ?`,
      [
        suggests.title,
        suggests.description,
        suggests.date,
        suggests.consequences,
        suggests.priority,
        suggests.finale_decision,
        suggests.id,
        suggests.contribution_date,
        suggests.vote_date,
        suggests.final_date,
      ]
    );
  }

  findByUsersId(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} where users_id = ?`,
      [id]
    );
  }

  countcomment(id) {
    return this.connection.query(
      `SELECT content, count(suggests_id) as count FROM comments where suggests_id=21 group by content;`,
      [id]
    );
  }
}

module.exports = SuggestsManager;
