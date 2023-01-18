require("dotenv").config();
const bcrypt = require("bcrypt");
const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  async insert(users) {
    const hashedPassword = await bcrypt.hash(process.env.PASSWORD, 10);
    return this.connection.query(
      `insert into ${this.table} (id, name, firstname, password, email, avatar, role, localisation, thread_id) values (?,?,?,?,?,?,?,?,?)`,
      [
        users.id,
        users.name,
        users.firstname,
        hashedPassword,
        users.email,
        users.avatar,
        users.role,
        users.localisation,
        users.thread_id,
      ]
    );
  }

  async update(users) {
    const hashedPassword = await bcrypt.hash(users.PASSWORD, 10);
    return this.connection.query(
      `update ${this.table} set name = ?, firstname = ?, password = ? , email = ?, avatar = ?, role = ?, localisation = ?, thread_id = ? where id = ?`,
      [
        users.name,
        users.firstname,
        hashedPassword,
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
