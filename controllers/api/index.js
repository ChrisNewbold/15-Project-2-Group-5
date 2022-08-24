const router = require("express").Router();
const bcrypt = require("bcrypt");
const articleRoutes = require("./articleRoutes");
const bloggerRoutes = require("./bloggerRoutes");
const readerRoutes = require("./readerRoutes");
const purchaseCreditsRoutes = require("./purchaseCreditsRoutes");

const { Blogger, Reader } = require("../../models");

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.status(200).send({ status: "success" });
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    // Check if this is a Blogger logging in
    const thisBlogger = await Blogger.findOne({ where: { email } });
    if (thisBlogger) {
      bcrypt.compare(password, thisBlogger.password).then((result) => {
        if (result) {
          req.session.user_id = thisBlogger.id;
          req.session.userFirstName = thisBlogger.blogger_first_name;
          req.session.userLastName = thisBlogger.blogger_last_name;
          req.session.userAuthenticated = true;
          req.session.userType = "blogger";
          res.status(200).send({ status: "success", data: thisBlogger });
        }
      });
    } else {
      // If not a blogger, is it a Reader?
      const thisReader = await Reader.findOne({ where: { email } });
      if (thisReader) {
        bcrypt.compare(password, thisReader.password).then((result) => {
          if (result) {
            req.session.user_id = thisReader.id;
            req.session.userFirstName = thisReader.blogger_first_name;
            req.session.userLastName = thisReader.blogger_last_name;
            req.session.userAuthenticated = true;
            req.session.userType = "reader";
            res.status(200).send({ status: "success", data: thisReader });
          }
        });
      }
    }
  } else {
    // if no hits on either DB Table return error
    res.status(200).send({
      status: "error",
      message: "LOGIN DETAILS INCORRECT",
    });
  }
});
router.use("/articleCheck", articleRoutes);
router.use("/blogger", bloggerRoutes);
router.use("/reader", readerRoutes);
router.use("/purchase", purchaseCreditsRoutes);

module.exports = router;
