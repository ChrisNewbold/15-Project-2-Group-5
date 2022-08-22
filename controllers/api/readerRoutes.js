const router = require("express").Router();
// eslint-disable-next-line no-unused-vars
const { _NODE_ENV } = require("../../config/config");
const { Reader } = require("../../models");
require("body-parser");

router.post("/", async (req, res) => {
  const { email, password, terms, privacy, articleId } = req.body;
  try {
    const readerRow = await Reader.findOne({
      where: { email },
    });
    if (!readerRow) {
      /*
        if req.body.email isn't in our reader table:
        -> add user to database, then send back : { status: "ok", do: "continue" }
        */
      await Reader.create({
        email,
        password,
        terms,
        privacy,
      });
      // eslint-disable-next-line no-console
      console.log("Reader Added");
      res.render(
        "reader-registered",
        {
          layout: "splash",
          devPath: _NODE_ENV === "development",
          articleId,
        },
        (err, html) => {
          if (err) {
            // eslint-disable-next-line no-console
            console.log(`ERROR: ${err}`);
          }
          res.send({
            html,
          });
        }
      );
    }
    if (readerRow) {
      // eslint-disable-next-line no-console
      console.log("Readers profile already exists");
      res.send({
        status: "error",
        errorMessage: "Readers profile already exists",
      });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`ERROR: ${err}`);
  }
});
