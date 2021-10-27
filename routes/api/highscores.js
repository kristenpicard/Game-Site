const router = require("express").Router();
const highscoreController = require("../../controllers/highscoreController.js");

router.route("/").get(highscoreController.findAll);

module.exports = router;