const router = require("express").Router();
const articleRoutes = require("./articleRoutes");
const bloggerRoutes = require("./bloggerRoutes");
const readerRoutes = require("./readerRoutes");

router.use("/articleCheck", articleRoutes);
router.use("/blogger", bloggerRoutes);
router.use("/reader", readerRoutes);

module.exports = router;
