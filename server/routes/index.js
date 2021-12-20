import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/movie", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/book", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/book/:isbn", function (req, res, next) {
  res.render("index", { title: "Express" });
});

export default router;
