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

router.post("/join", async (req, res) => {
  const postedData = req.body;
  const bloggerData = {};
  bloggerData.email = postedData.email;
  bloggerData.first_name = postedData.first_name;
  bloggerData.last_name = postedData.last_name;
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
          const thisBlogger = await Blogger.create(bloggerData);
          req.session.blogger_id = thisBlogger.id;
          req.session.bloggerFirstName = thisBlogger.first_name;
          req.session.bloggerLastName = thisBlogger.last_name;
          req.session.bloggerAuthenticated = true;
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
