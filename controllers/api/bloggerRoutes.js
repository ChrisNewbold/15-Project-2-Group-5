const bcrypt = require("bcrypt");
const router = require("express").Router();
// eslint-disable-next-line no-unused-vars
const { _NODE_ENV } = require("../../config/config");
const { Blogger } = require("../../models");
require("body-parser");

const saltRounds = 10;

router.get("/", async (req, res) => {
  const bloggerData = Blogger.findAll();
  res.send(bloggerData);
});
router.get("/:id", async (req, res) => {
  const bloggerData = Blogger.findOne({ where: { id: req.params.id } });
  res.send(bloggerData);
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const thisBlogger = await Blogger.findOne({ where: { email } });
  if (thisBlogger) {
    bcrypt.compare(password, thisBlogger.password).then((result) => {
      if (result) {
        req.session.user_id = thisBlogger.id;
        req.session.userFirstName = thisBlogger.blogger_first_name;
        req.session.userLastName = thisBlogger.blogger_last_name;
        req.session.userAuthenticated = true;
        res.status(200).send({ status: "success", data: thisBlogger });
      }
    });
  } else {
    res.status(200).send({
      status: "error",
      message: "Username or Password Incorrect",
    });
  }
});
router.post("/logout", async (req, res) => {
  req.session.destroy();
  res.status(200).send({ status: "success" });
});
router.get("/join", (req, res) => {
  res.render("blogger-join", { layout: "main" });
});
router.post("/join", async (req, res) => {
  const postedData = req.body;
  const bloggerData = {};
  bloggerData.email = postedData.email;
  bloggerData.first_name = postedData.firstName;
  bloggerData.last_name = postedData.lastName;
  bloggerData.password = postedData.password;
  bloggerData.description = postedData.description;
  bloggerData.url = postedData.url;
  bloggerData.image = postedData.image;

  try {
    const bloggerEmailCheck = await Blogger.count({
      where: { email: bloggerData.email },
    });
    if (bloggerEmailCheck !== 0) {
      res
        .status(200)
        .send({ status: "error", message: "User already exists." });
    } else {
      bcrypt.genSalt(saltRounds, async (err, salt) => {
        bcrypt.hash(bloggerData.blogger_password, salt, async (_err, hash) => {
          bloggerData.blogger_password = hash;
          await Blogger.create(bloggerData);
          res.status(200).send({
            status: "success",
            message:
              "You have successfully joined.<br>Please log in to continue.",
          });
        });
      });
    }
  } catch {
    res.status(500).send({ status: "error", message: "blogger create failed" });
  }
});

module.exports = router;
