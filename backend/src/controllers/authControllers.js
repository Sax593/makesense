const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

const signup = (req, res) => {
  const { name, firstname, localisation, email, role, avatar } = req.body;
  let { password } = req.body;
  password = bcrypt.hashSync(password, 10);
  models.user.insert({
    name,
    firstname,
    localisation,
    email,
    password,
    role,
    avatar,
  });
  const user = {
    name,
    firstname,
    localisation,
    email,
    password,
    role,
    avatar,
  };
  const token = jwt.sign(user, process.env.JWT_PASSWORD);
  res.send({ token, user });
};

const login = async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  const [results] = await models.users.findByEmail(email);

  const isPasswordOk = bcrypt.compareSync(password, results[0].password);
  if (isPasswordOk) {
    const [user] = results;
    delete user.password;
    const token = jwt.sign(user);
    res.send({ token, user });
  } else {
    res.status(401).send("You are not register!");
  }
};

module.exports = {
  signup,
  login,
};
