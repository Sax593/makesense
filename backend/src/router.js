const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const suggestsControllers = require("./controllers/suggestsControllers");

router.get("/suggests", suggestsControllers.browse);
router.get("/suggests/:id", suggestsControllers.read);
router.post("/suggests", suggestsControllers.add);
router.put("/suggests/:id", suggestsControllers.edit);
router.delete("/suggests/:id", suggestsControllers.destroy);

module.exports = router;
