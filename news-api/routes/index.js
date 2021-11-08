var express = require("express");
var axios = require("axios");
const { response } = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const { country, q } = req.query;
  const category = req.query.category || "general";
  const page = req.query.page || "1";
  const pageSize = 10;

  axios
    .get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: "0e5fa25006524160ba95ac08cead4c26",
        category,
        country,
        q,
        page,
        pageSize,
      },
    })
    .then((result) => {
      const { articles, totalResults } = result.data;
      res.render("index", {
        articles,
        totalResults,
        page,
        pageSize,
      });
    });
  // .catch((err) => console.error(err.response.data));
});

module.exports = router;
