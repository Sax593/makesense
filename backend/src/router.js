const express = require("express");

const router = express.Router();

const commentsControllers = require("./controllers/commentsControllers");

router.get("/comments", commentsControllers.browse);
router.get("/comments/:id", commentsControllers.read);
router.post("/comments", commentsControllers.add);
router.put("/comments/:id", commentsControllers.edit);
router.delete("/comments/:id", commentsControllers.destroy);

module.exports = router;
