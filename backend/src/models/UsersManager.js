const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.connection.query(
      `insert into ${this.table} (id, name, firstname, password, email, avatar, role, localisation, thread_id) values (?,?,?,?,?,?,?,?,?)`,
      [
        users.id,
        users.name,
        users.firstname,
        users.password,
        users.email,
        users.avatar,
        users.role,
        users.localisation,
        users.thread_id,
      ]
    );
  }

  update(users) {
    return this.connection.query(
      `update ${this.table} set name = ?, firstname = ?, password = ? , email = ?, avatar = ?, role = ?, localisation = ?, thread_id = ? where id = ?`,
      [
        users.name,
        users.firstname,
        users.password,
        users.email,
        users.avatar,
        users.role,
        users.localisation,
        users.thread_id,
        users.id,
      ]
    );
  }
}

module.exports = UsersManager;
