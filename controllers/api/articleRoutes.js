const router = require("express").Router();
const { _NODE_ENV, _PROD_PATH } = require("../../config/config");
const { Article, Reader, Blogger } = require("../../models");
require("body-parser");

router.post("/addurl", async (req, res) => {
  const { url, credits } = req.body;

  // check if the article link is already in the db. If not, add it, if so, send error back
  const articleExists = await Article.findOne({ where: { url } });
  if (!articleExists) {
    try {
      const articleRow = await Article.create({
        url,
        credits,
        blogger_id: req.session.userId,
      });
      res.status(200).send({
        status: "success",
        html: `<tr><td>${articleRow.url}</td><td>${articleRow.credits}</td></tr>`,
      });
    } catch (err) {
      res.status(400).send({
        status: "error",
        message: `ERROR 112.546: ${err}`,
      });
    }
  }
});

// this will come from the bloggers site to see if the article is in our db
router.post("/check", async (req, res) => {
  const { url, email } = req.body;
  try {
    const articleRow = await Article.findOne({
      where: { url },
    });
    if (!articleRow) {
      /*
      if req.body.url isn't in our article table:
      -> send back a message to continue: { status: "ok", do: "continue" }
      */
      res.send({ status: "ok", do: "continue" });
    }
    if (articleRow && !email) {
      /*
      If req.body doesn't include an email, then the reader has never seen this before
      -> send them the pre-register splash
      */
      res.render(
        "pre-register",
        {
          prereg: true,
          layout: "splash",
          devPath: _NODE_ENV === "development",
          prodPath: _PROD_PATH,
          credits: articleRow.credits,
        },
        (err, html) => {
          if (err) {
            // eslint-disable-next-line no-console
            console.log(`ERROR 24.351: ${err}`);
          }
          res.send({
            html,
            credits: articleRow.credits,
            articleId: articleRow.id,
          });
        }
      );
    }

    if (articleRow && email) {
      /*
      if req.body does include an email, this reader probably knows what this is about. Check that this reader is in the DB
     */
      const readerRow = await Reader.findOne({
        where: { email },
      });
      const bloggerRow = await Blogger.findByPk(articleRow.blogger_id);

      // if reader is not in the db send back reg form
      if (!readerRow) {
        res.render(
          "pre-register",
          {
            prereg: true,
            layout: "splash",
            devPath: _NODE_ENV === "development",
            prodPath: _PROD_PATH,
            credits: articleRow.credits,
          },
          (err, html) => {
            if (err) {
              // eslint-disable-next-line no-console
              console.log(`ERROR 142.32: ${err}`);
            }
            res.send({
              html,
              credits: articleRow.credits,
              articleId: articleRow.id,
            });
          }
        );
      } else {
        /*
        If the reader is in the DB
        Check if the user has enough credit to read the article
        */
        if (readerRow.credits > articleRow.credits) {
          /*
          if user does have enough credit:
          -> send back splash with thank you message, cost to read article, and button
          */
          res.render(
            "reader-hasCredit",
            {
              layout: "splash",
              devPath: _NODE_ENV === "development",
              prodPath: _PROD_PATH,
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
                console.log(`ERROR 56.21: ${err}`);
              }
              res.send({
                html,
                credits: articleRow.credits,
                readerId: readerRow.id,
                articleId: articleRow.id,
              });
            }
          );
        }
        if (readerRow.credits < articleRow.credits) {
          /*
          If user does not have enough credit:
          -> send back splash with paypal link to top-up their credit.
          */
          res.render(
            "reader-outOfCredit",
            {
              layout: "splash",
              devPath: _NODE_ENV === "development",
              prodPath: _PROD_PATH,
              readerCredits: readerRow.credits,
              readerName: readerRow.first_name
                ? readerRow.first_name.toUpperCase().toUpperCase()
                : "",
              bloggerName: bloggerRow.first_name,
              articleCredits: articleRow.credits,
              outOfCredit: true,
            },
            (err, html) => {
              if (err) {
                // eslint-disable-next-line no-console
                console.log(`ERROR 184.68: ${err}`);
              }
              res.send({
                html,
                credits: articleRow.credits,
                readerId: readerRow.id,
                articleId: articleRow.id,
              });
            }
          );
        }
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`ERROR 456.328: ${err}`);
  }
});

module.exports = router;
