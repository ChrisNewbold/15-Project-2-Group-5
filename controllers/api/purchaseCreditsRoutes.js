const router = require("express").Router();

router.get("/splashTest3", (req, res) => {
  res.render("reader-outOfCredit", { layout: "splash" });
});

module.exports = router;
