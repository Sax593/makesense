require("dotenv").config();
const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  async insert(users) {
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

  async update(users) {
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

  findByEmail(email) {
    return this.connection.query(`select * from ${this.table} where email=?`, [
      [email],
    ]);
  }
}

module.exports = UsersManager;
