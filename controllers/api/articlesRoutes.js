const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const { url, email } = req.body;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.render("pre-register");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
