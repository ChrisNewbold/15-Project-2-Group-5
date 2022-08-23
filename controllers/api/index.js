const router = require("express").Router();
const articleRoutes = require("./articleRoutes");
const bloggerRoutes = require("./bloggerRoutes");
const readerRoutes = require("./readerRoutes");
const purchaseCreditsRoutes = require("./purchaseCreditsRoutes");

router.use("/articleCheck", articleRoutes);
router.use("/blogger", bloggerRoutes);
router.use("/reader", readerRoutes);
router.use("/purchase", purchaseCreditsRoutes);

module.exports = router;
