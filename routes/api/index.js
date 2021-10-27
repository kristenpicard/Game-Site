const router = require("express").Router();
const highscoresRoutes = require("./highscores.js");

router.use("/highscores", highscoresRoutes);

module.exports = router;