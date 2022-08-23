const router = require("express").Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/join", (req, res) => {
  res.render("blogger-join", { layout: "main" });
});

router.use("/", (req, res) => {
  res.send("403: Forbidden");
});

module.exports = router;
