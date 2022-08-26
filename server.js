/* eslint-disable no-console */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");
const hbs = require("express-handlebars").create({});
const { _SESSION_SECRET, _NODE_ENV } = require("./config/config");
const sequalize = require("./config/connection");
const controllers = require("./controllers");

const { Article, Reader, Blogger } = require("./models");

const app = express();

const myStore = new SequelizeStore({
  db: sequalize,
});

app.use(cors());

app.use(
  session({
    secret: _SESSION_SECRET,
    store: myStore,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 300000 },
  })
);

myStore.sync();

/*
if (app.get("env") === "production") {
  app.set("trust proxy", 1);
  session.cookie.secure = true;
}
*/

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static(`${__dirname}/public/assets`));

const PORT = process.env.PORT || 3001;

// route to get plugin.js from public folder
app.get("/plugins/plugin.js", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.sendFile(path.join(__dirname, "public/assets/js/plugin.js"));
});

// sent when cookie is not on the users PC
app.get("/splashTest1", (req, res) => {
  res.sendFile(`${__dirname}/splashTest.html`);
});

// sent when user just registered via splash 1
app.get("/splashTest2", async (req, res) => {
  const thisArticle = await Article.findOne({ where: { id: 1 } });
  res.render("reader-registered", {
    devPath: _NODE_ENV === "development",
    layout: "splash",
    justreg: true,
    credits: thisArticle.credits,
  });
});

// when cookie on users PC is received along with URL and user has credit
app.get("/splashTest3", async (req, res) => {
  const thisArticle = await Article.findOne({ where: { id: 1 } });
  const thisReader = await Reader.findOne({ where: { id: 1 } });
  const thisBlogger = await Blogger.findOne({
    where: { id: thisArticle.blogger_id },
  });
  res.render("reader-hasCredit", {
    devPath: _NODE_ENV === "development",
    layout: "splash",
    readerCredits: thisReader.credits,
    readerName: thisReader.first_name
      ? thisReader.first_name.toUpperCase().toUpperCase()
      : "",
    bloggerName: thisBlogger.first_name,
    articleCredits: thisArticle.credits,
    hasCredit: true,
  });
});

// when cookie on users PC is received along with URL and user has no credit
app.get("/splashTest4", async (req, res) => {
  const thisArticle = await Article.findOne({ where: { id: 1 } });
  const thisReader = await Reader.findOne({ where: { id: 1 } });
  const thisBlogger = await Blogger.findOne({
    where: { id: thisArticle.blogger_id },
  });
  res.render("reader-outOfCredit", {
    devPath: _NODE_ENV === "development",
    layout: "splash",
    articleCredits: thisArticle.credits,
    readerCredits: thisReader.credits,
    readerName: thisReader.first_name
      ? thisReader.first_name.toUpperCase().toUpperCase()
      : "",
    bloggerName: thisBlogger.first_name,
    outOfCredit: true,
  });
});

app.use(controllers);

sequalize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${PORT}!`);
  });
});
