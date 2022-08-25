const router = require("express").Router();
const bcrypt = require("bcrypt");
// eslint-disable-next-line no-unused-vars
const { _NODE_ENV } = require("../../config/config");
const { Reader, Article, Blogger } = require("../../models");
require("body-parser");

const saltRounds = 10;
router.post("/charge", async (req, res) => {
  const { articleId, readerId } = req.body;
  const articleRow = await Article.findByPk(articleId);
  const readerRow = await Reader.findByPk(readerId);
  const bloggerRow = await Blogger.findByPk(Article.blogger_id);
  const articleCredits = articleRow.credits;
  const readerCredits = readerRow.credits;
  const bloggerCredits = bloggerRow.credits;
  Reader.update(
    { credits: readerCredits - articleCredits },
    { where: { id: readerId } }
  );
  Blogger.update(
    { credits: bloggerCredits + articleCredits },
    { where: { id: bloggerRow.id } }
  );
  res.status(200).send({ status: "success" });
});
router.post("/prereg", async (req, res) => {
  const { email, password, terms, privacy, articleId } = req.body;
  try {
    const readerRow = await Reader.findOne({
      where: { email },
    });
    const articleRow = await Article.findOne({
      where: { id: articleId },
    });
    const bloggerRow = await Blogger.findByPk(articleRow.blogger_id);
    if (!readerRow) {
      /*
        if req.body.email isn't in our reader table:
        -> add user to database, then send back : { status: "ok", do: "continue" }
        */
      bcrypt.genSalt(saltRounds, async (err, salt) => {
        bcrypt.hash(password, salt, async (err2, hash) => {
          const encryptedPassword = hash;
          const newReader = await Reader.create({
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
              credits: articleRow.credits,
            },
            (err3, html) => {
              if (err3) {
                // eslint-disable-next-line no-console
                console.log(`ERROR 61.5941: ${err3}`);
              }
              res.send({
                html,
                articleId,
                readerId: newReader.id,
              });
            }
          );
        });
      });
    }
    if (readerRow) {
      // eslint-disable-next-line no-console
      if (readerRow.credits > 0) {
        res.render(
          "reader-hasCredit",
          {
            layout: "splash",
            devPath: _NODE_ENV === "development",
            readerCredits: readerRow.credits,
            readerName: readerRow.first_name
              ? readerRow.first_name.toUpperCase().toUpperCase()
              : "",
            bloggerName: bloggerRow.first_name,
            articleCredits: articleRow.credits,
            hasCredit: true,
          },
          (err, html) => {
            if (err) {
              // eslint-disable-next-line no-console
              console.log(`ERROR: ${err}`);
            }
            res.send({
              html,
              credits: articleRow.credits,
              id: articleRow.id,
            });
          }
        );
      }
      if (readerRow.credits < 1) {
        res.render(
          "reader-outOfCredit",
          {
            layout: "splash",
            devPath: _NODE_ENV === "development",
            credits: articleRow.credits,
          },
          (err, html) => {
            if (err) {
              // eslint-disable-next-line no-console
              console.log(`ERROR: ${err}`);
            }
            res.send({
              html,
              credits: articleRow.credits,
              id: articleRow.id,
            });
          }
        );
      }
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
      req.session.userId = thisReader.id;
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
