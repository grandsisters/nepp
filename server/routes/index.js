import express from "express";
import { getMovieList } from "../api/movie.js";
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/movie", async function (req, res, next) {
  const params = req.query;
  if (params.query) {
    return res.send("검색어가 없습니다.");
  }

  const result = await getMovieList(params);
  res.send(result);
});

router.get("/book", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/book/:isbn", function (req, res, next) {
  res.render("index", { title: "Express" });
});

export default router;
