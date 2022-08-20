const router = require("express").Router();
const articleRoutes = require("./articleRoutes");

router.use("/articleCheck", articleRoutes);

module.exports = router;
