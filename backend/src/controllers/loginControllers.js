const models = require("../models");

const login = (req, res) => {
  const logincontent = req.body;
  models.users
    .findByMail(logincontent)
    .then(([result]) => {
      res.location(`/suggests/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  login,
};
