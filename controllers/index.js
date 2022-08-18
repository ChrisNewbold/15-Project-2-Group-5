const router = require("express").Router();

router.use("/", (req, res) => {
  res.send("403: Forbidden");
});

module.exports = router;
