const router = require("express").Router();

router.post("/", (req, res) => {
  try {
    res.render("pre-register", { layout: "splash" }, (err, html) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(`ERROR: ${err}`);
      }
      res.send({ html, id: 1 });
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`ERROR: ${err}`);
  }
});

module.exports = router;
