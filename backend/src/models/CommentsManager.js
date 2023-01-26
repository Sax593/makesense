const AbstractManager = require("./AbstractManager");

class CommentsManager extends AbstractManager {
  constructor() {
    super({ table: "comments" });
  }

  insert(comments) {
    return this.connection.query(
      `insert into ${this.table} (date, content, users_id, suggests_id, up_vote, down_vote) values (NOW(),?,?,?,0,0)`,
      [comments.content, comments.users_id, comments.suggests_id]
    );
  }

  findAll() {
    return this.connection.query(
      `
      select 
        comments.*, 
        users.name 
      from  
        ${this.table} 
        left join users on comments.users_id=users.id`
    );
  }

  update(comments) {
    return this.connection.query(
      `update ${this.table} set date = ?, content = ?, users_id = ?, suggests_id = ?, up_vote = ?, down_vote= ? where id = ?`,
      [
        comments.date,
        comments.content,
        comments.users_id,
        comments.suggests_id,
        comments.up_vote,
        comments.down_vote,
        comments.id,
      ]
    );
  }
}

module.exports = CommentsManager;
