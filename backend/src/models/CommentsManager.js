const AbstractManager = require("./AbstractManager");

class CommentsManager extends AbstractManager {
  constructor() {
    super({ table: "comments" });
  }

  insert(comments) {
    return this.connection.query(
      `insert into ${this.table} (id, date, content, users_id, suggests_id, comments_id) values (?,?,?,?,?,?)`,
      [
        comments.id,
        comments.date,
        comments.content,
        comments.users_id,
        comments.suggests_id,
        comments.comments_id,
      ]
    );
  }

  update(comments) {
    return this.connection.query(
      `update ${this.table} set date = ?, content = ?, users_id = ?, suggests_id = ?  where id = ?`,
      [
        comments.date.slice(0, 19),
        comments.content,
        comments.users_id,
        comments.suggests_id,
        comments.id,
      ]
    );
  }
}

module.exports = CommentsManager;
