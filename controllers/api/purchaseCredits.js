const router = require("express").Router();
// eslint-disable-next-line no-unused-vars
const { _NODE_ENV } = require("../../config/config");
require("body-parser");

router.get("/splashTest3", (req, res) => {
  res.render("reader-outOfCredit", { layout: "main" });
});
