const router = require("express").Router();
const { _NODE_ENV } = require("../../config/config");
const { Article, Reader, Blogger } = require("../../models");
require("body-parser");

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
      // eslint-disable-next-line no-console
      // console.log("not found");
      res.send({ status: "ok", do: "continue" });
    }
    if (articleRow && !email) {
      /*
      If req.body doesn't include an email, then the reader has never seen this before,
      -> send them the pre-register splash.
      */
      // eslint-disable-next-line no-console
      // console.log("url found, no email");
      res.render(
        "pre-register",
        {
          prereg: true,
          layout: "splash",
          devPath: _NODE_ENV === "development",
          credits: articleRow.credits,
        },
        (err, html) => {
          if (err) {
            // eslint-disable-next-line no-console
            // console.log(`ERROR: ${err}`);
          }
          res.send({
            html,
            credits: articleRow.credits,
            id: articleRow.id,
          });
        }
      );
    }

    if (articleRow && email) {
      // if req.body does include an email, this reader knows what this is about

      // Check if the user has credit

      // if user does have credit:
      // -> send back splash with thank you message, cost to read article, and button

      // If user does not have credit:
      // -> send back splash with paypal link to top-up their credit.

      const readerRow = await Reader.findOne({
        where: { email },
      });
      const bloggerRow = await Blogger.findByPk(articleRow.blogger_id);

      if (!readerRow) {
        res.send({
          status: "error",
          errorMessage: "Reader not found",
        });
      }
      if (readerRow.credits > 0) {
        res.render(
          "reader-hasCredit",
          {
            layout: "splash",
            devPath: _NODE_ENV === "development",
            readerCredits: readerRow.credits,
            readerName: readerRow.first_name.toUpperCase(),
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

      // eslint-disable-next-line no-console
      // console.log(readerRow);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`ERROR: ${err}`);
  }
});

module.exports = router;
