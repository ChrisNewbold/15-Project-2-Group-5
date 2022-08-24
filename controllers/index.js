const router = require("express").Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/credit", (req, res) => {
  res.render("reader-credit");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/blogger-join", (req, res) => {
  res.render("blogger-join", { layout: "main" });
});
router.get("/reader-join", (req, res) => {
  res.render("reader-join", { layout: "main" });
});
router.get("/", (req, res) => {
  res.render("homepage", { layout: "main" });
});
router.use("/", (req, res) => {
  res.send("403: Forbidden");
});

module.exports = router;
