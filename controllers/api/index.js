const router = require("express").Router();
const articleRoutes = require("./articleRoutes");
const bloggerRoutes = require("./bloggerRoutes");

router.use("/articleCheck", articleRoutes);
router.use("/blogger", bloggerRoutes);

module.exports = router;
