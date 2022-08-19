const router = require("express").Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use("/", (req, res) => {
  res.send("403: Forbidden");
});

module.exports = router;
