const express = require("express");

const router = express.Router();

const suggestsControllers = require("./controllers/suggestsControllers");

router.get("/suggests", suggestsControllers.browse);
router.get("/suggests/:id", suggestsControllers.read);
router.post("/suggests", suggestsControllers.add);
router.put("/suggests/:id", suggestsControllers.edit);
router.delete("/suggests/:id", suggestsControllers.destroy);

const usersControllers = require("./controllers/usersControllers");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.post("/users", usersControllers.add);
router.put("/users/:id", usersControllers.edit);
router.delete("/users/:id", usersControllers.destroy);

const loginControllers = require("./controllers/loginControllers");

router.post("/api/login", loginControllers.login);

module.exports = router;
