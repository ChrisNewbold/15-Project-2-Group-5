require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");
const { _SESSION_SECRET } = require("./config/config");
const sequalize = require("./config/connection");
const controllers = require("./controllers");

const hbs = exphbs.create({});
const app = express();

const myStore = new SequelizeStore({
  db: sequalize,
});

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

app.use(express.static(`${__dirname}/public`));

const PORT = process.env.PORT || 3001;

// route to get plugin.js from public folder
app.get("/plugins/plugin.js", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.sendFile(path.join(__dirname, "public/js/plugin.js"));
});

app.get("/api/articleCheck", async (req, res) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const { url, email } = req.body;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("pre-register");
  } catch (err) {
    console.log(err);
  }
});

app.use(controllers);

sequalize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${PORT}!`);
  });
});
