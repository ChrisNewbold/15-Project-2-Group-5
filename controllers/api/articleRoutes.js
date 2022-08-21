const router = require("express").Router();
const { _NODE_ENV } = require("../../config/config");

router.post("/", (req, res) => {
  try {
    res.render(
      "pre-register",
      { layout: "splash", devPath: _NODE_ENV === "development" },
      (err, html) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.log(`ERROR: ${err}`);
        }
        res.send({ html, id: 1 });
      }
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`ERROR: ${err}`);
  }
});

module.exports = router;
