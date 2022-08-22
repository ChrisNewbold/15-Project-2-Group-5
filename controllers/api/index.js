const router = require("express").Router();
const articleRoutes = require("./articleRoutes");
const bloggerRoutes = require("./bloggerRoutes");
const purchaseCreditsRoutes = require("./purchaseCredits");

router.use("/articleCheck", articleRoutes);
router.use("/blogger", bloggerRoutes);
router.use("/purchase", purchaseCreditsRoutes);

module.exports = router;
