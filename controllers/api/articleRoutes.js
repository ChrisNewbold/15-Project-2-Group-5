const router = require("express").Router();

router.post("/", (req, res) => {
  try {
    res.render("pre-register", { layout: "splash" }, (err, html) => {
      if (err) {
        //
      }
      res.send({ html, id: 1 });
    });
  } catch (err) {
    //
  }
});

module.exports = router;
