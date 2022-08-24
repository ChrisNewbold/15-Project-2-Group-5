const router = require("express").Router();
const bcrypt = require("bcrypt");
// eslint-disable-next-line no-unused-vars
const { _NODE_ENV } = require("../../config/config");
const { Reader } = require("../../models");
require("body-parser");

const saltRounds = 10;

router.post("/prereg", async (req, res) => {
  const { email, password, terms, privacy, articleId } = req.body;
  try {
    const readerRow = await Reader.findOne({
      where: { email },
    });
    // eslint-disable-next-line no-console
    console.log(readerRow);
    if (!readerRow) {
      /*
        if req.body.email isn't in our reader table:
        -> add user to database, then send back : { status: "ok", do: "continue" }
        */
      bcrypt.genSalt(saltRounds, async (err, salt) => {
        bcrypt.hash(password, salt, async (err2, hash) => {
          const encryptedPassword = hash;
          await Reader.create({
            email,
            password: encryptedPassword,
            credits: 500,
            terms,
            privacy,
          });
          // eslint-disable-next-line no-console
          console.log("Reader Added");
          res.render(
            "reader-registered",
            {
              justreg: true,
              layout: "splash",
              devPath: _NODE_ENV === "development",
              articleId,
            },
            (err3, html) => {
              if (err3) {
                // eslint-disable-next-line no-console
                console.log(`ERROR 61.5941: ${err3}`);
              }
              res.send({
                html,
              });
            }
          );
        });
      });
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
router.post("/join", async (req, res) => {
  const { email, firstName, lastName, password, terms, privacy } = req.body;
  bcrypt.genSalt(saltRounds, async (err, salt) => {
    bcrypt.hash(password, salt, async (err2, hash) => {
      const encryptedPassword = hash;
      const thisReader = await Reader.create({
        email,
        first_name: firstName,
        last_name: lastName,
        password: encryptedPassword,
        credits: 500,
        terms,
        privacy,
      });
      console.log(thisReader);
      req.session.user_id = thisReader.id;
      req.session.userFirstName = thisReader.first_name;
      req.session.userLastName = thisReader.last_name;
      req.session.userAuthenticated = true;
      req.session.userTypeReader = true;
      req.session.userTypeBlogger = false;
      res.send({ status: "success" });
    });
  });
});
module.exports = router;
