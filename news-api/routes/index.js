var axios = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.query);
  const { category, country } = req.query;

  axios
    .get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: "0e5fa25006524160ba95ac08cead4c26",
        category,
        country,
      },
    })
    .then((result) => {
      const { articles, totalResults } = result.data;
      // console.log(result);
      res.render("index", { articles, totalResults });
    })
    .catch((err) => console.error(err.response.data));
});

module.exports = router;
