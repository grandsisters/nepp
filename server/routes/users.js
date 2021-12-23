import express from "express";
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  console.log(req.body);
  res.send("respond with a resource");
});

export default router;
