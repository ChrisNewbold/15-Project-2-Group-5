const router = require("express").Router();
const { Article } = require("../models");

const { _NODE_ENV, _PROD_PATH } = require("../config/config");

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
  res.render("login", {
    title: "OnlyBlogs - Login",
  });
});

router.get("/blogger-join", (req, res) => {
  res.render("blogger-join", {
    layout: "main",
    title: "Join OnlyBlogs",
  });
});
router.get("/reader-join", (req, res) => {
  res.render("reader-join", {
    layout: "main",
    title: "Join OnlyBlogs",
  });
});

router.get("/terms", (req, res) => {
  res.render("terms-and-conditions", {
    layout: "main",
    title: "OnlyBlogs - Terms and Conditions",
  });
});

router.get("/privacy", (req, res) => {
  res.render("privacy", {
    layout: "main",
    title: "OnlyBlogs - Privacy Policy",
  });
});

router.get("/dashboard", async (req, res) => {
  // if user isn't logged in, send to homepage
  if (!req.session.userAuthenticated) {
    res.redirect("/");
  } else {
    let articleData;
    let serializedArticleData;

    // If a blogger logged in, return just their articles, if a reader, return all articles.
    if (req.session.userTypeBlogger) {
      articleData = await Article.findAll({
        where: { blogger_id: req.session.userId },
      });
    }
    if (req.session.userTypeReader) {
      articleData = await Article.findAll();
    }

    // serialize article data, and limit returned chars in preview to 200
    if (articleData) {
      // eslint-disable-next-line array-callback-return
      serializedArticleData = articleData.map((article) =>
        article.get({ plain: true })
      );
      serializedArticleData.forEach((article) => {
        // eslint-disable-next-line no-param-reassign
        article.preview = article.preview.substr(0, 200);
        // eslint-disable-next-line no-param-reassign
        article.preview += "...";
      });
    }
    // eslint-disable-next-line no-console
    res.render("dashboard", {
      layout: "main",
      data: {
        userFirstName: req.session.userFirstName,
        userTypeReader: req.session.userTypeReader,
        userTypeBlogger: req.session.userTypeBlogger,
        userAuthenticated: req.session.userAuthenticated,
        articleData: serializedArticleData,
        prodPath: _PROD_PATH,
        devPath: _NODE_ENV === "development",
      },
      title: "OnlyBlogs",
    });
  }
});

// homepage
router.get("/", async (req, res) => {
  // return all articles, TODO: prob limit amount returned
  const articleData = await Article.findAll();

  // serialize the article data and limit text strings to 200 chars
  let serializedArticleData;
  if (articleData) {
    // eslint-disable-next-line array-callback-return
    serializedArticleData = articleData.map((article) =>
      article.get({ plain: true })
    );
    serializedArticleData.forEach((article) => {
      // eslint-disable-next-line no-param-reassign
      article.preview = article.preview.substr(0, 200);
      // eslint-disable-next-line no-param-reassign
      article.preview += "...";
    });
  }

  res.render("homepage", {
    data: {
      userTypeReader: req.session.userTypeReader,
      userTypeBlogger: req.session.userTypeBlogger,
      userAuthenticated: req.session.userAuthenticated,
      prodPath: _PROD_PATH,
      devPath: _NODE_ENV === "development",
      articleData: serializedArticleData,
    },
  });
});

// catch any routes we haven't set up.
router.use("/", (req, res) => {
  res.send("403: Forbidden");
});

module.exports = router;
