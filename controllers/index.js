const router = require("express").Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/credit", (req, res) => {
  res.render("reader-credit", {
    data: {
      userTypeReader: req.session.userTypeReader,
      userTypeBlogger: req.session.userTypeBlogger,
      userAuthenticated: req.session.userAuthenticated,
    },
  });
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
router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    layout: "main",
    data: {
      userTypeReader: req.session.userTypeReader,
      userTypeBlogger: req.session.userTypeBlogger,
      userAuthenticated: req.session.userAuthenticated,
    },
  });
});

router.get("/", (req, res) => {
  res.render("homepage", {
    data: {
      userTypeReader: req.session.userTypeReader,
      userTypeBlogger: req.session.userTypeBlogger,
      userAuthenticated: req.session.userAuthenticated,
    },
  });
});

router.use("/", (req, res) => {
  res.send("403: Forbidden");
});

module.exports = router;
