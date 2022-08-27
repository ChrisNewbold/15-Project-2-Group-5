const router = require("express").Router();
const { Article } = require("../../../models");

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
    title: "OnlyBlogs",
  });
});
router.get("/reader-join", (req, res) => {
  res.render("reader-join", {
    layout: "main",
    title: "OnlyBlogs",
  });
});

router.get("/terms", (req, res) => {
  res.render("terms-and-conditions", {
    layout: "main",
    title: "OnlyBlogs",
  });
});

router.get("/privacy", (req, res) => {
  res.render("privacy", {
    layout: "main",
    title: "OnlyBlogs",
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
    // eslint-disable-next-line no-console
    res.render("dashboard", {
      layout: "main",
      data: {
        userFirstName: req.session.userFirstName,
        userTypeReader: req.session.userTypeReader,
        userTypeBlogger: req.session.userTypeBlogger,
        userAuthenticated: req.session.userAuthenticated,
        articleData: serializedArticleData,
      },
      title: "OnlyBlogs",
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