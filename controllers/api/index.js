const router = require("express").Router();
const articlesRoutes = require("./articlesRoutes");

router.use("/articleCheck", articlesRoutes);

module.exports = router;
