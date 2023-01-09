const AbstractManager = require("./AbstractManager");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  async insert(users) {
    const hashedPassword = await bcrypt.hash(users.password, 10);
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
    const hashedPassword = await bcrypt.hash(users.password, 10);
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
