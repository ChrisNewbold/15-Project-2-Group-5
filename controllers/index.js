const router = require("express").Router();
const { Article } = require("../models");
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
  res.render("blogger-join", {
    layout: "main",
    title: "Only Blogs",
  });
});
router.get("/reader-join", (req, res) => {
  res.render("reader-join", {
    layout: "main",
    title: "Only Blogs",
  });
});
router.get("/dashboard", async (req, res) => {
  if (!req.session.userAuthenticated) {
    res.redirect("/");
  } else {
    let articleData;
    if (req.session.userTypeBlogger) {
      articleData = await Article.findAll({
        where: { blogger_id: req.session.userId },
      });
    }
    if (req.session.userTypeReader) {
      articleData = await Article.findAll();
    }

    const serializedArticleData = articleData.map((article) =>
      article.get({ plain: true })
    );
    console.log("serializedArticleData", serializedArticleData);
    res.render("dashboard", {
      layout: "main",
      data: {
        userFirstName: req.session.userFirstName,
        userTypeReader: req.session.userTypeReader,
        userTypeBlogger: req.session.userTypeBlogger,
        userAuthenticated: req.session.userAuthenticated,
        articleData: serializedArticleData,
      },
      title: "Only Blogs",
    });
  }
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
