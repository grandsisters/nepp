var express = require("express");
var router = express.Router();
var conn = require("../db/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const query = `SELECT * FROM todos`;
  conn.query(query, (err, result) => {
    console.log(result);
  });

  const todos = [
    { isDone: true, content: "장보기" },
    { isDone: false, content: "공부하기" },
  ];

  res.render("todo", { todos });
});

// router.post("/", (req, res) => {
//   // TODO 생성
// });

// router.get("/:id", (req, res) => {
//   // TODO 생성 (특정 id를 받아와서 수정 하고 싶을때)
// });

// router.put("/:id", (req, res) => {
//   // TODO 수정
// });

// router.patch("/:id", (req, res) => {
//   // TODO 일부 수정
// });

// router.delete("/:id", (req, res) => {
//   // TODO 삭제
// });
module.exports = router;
