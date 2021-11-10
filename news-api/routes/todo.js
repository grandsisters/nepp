var express = require("express");
var router = express.Router();
var conn = require("../db/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const query = `SELECT * FROM todos`;
  conn.query(query, (err, result) => {
    console.log(result);
    res.render("todo", { todos: result });
  });
});

router.post("/", (req, res) => {
  // TODO 생성
  // console.log(req.body);
  const { isDone, content } = req.body;
  const query = `INSERT INTO todos(isDone, content) VALUES(${isDone}, '${content}');`;

  conn.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.send({ success: false });
    } else {
      const id = result.insertId;
      console.log(result);
      res.send({ success: true, id: id });
    }
  });
});

// router.get("/:id", (req, res) => {
//   // TODO 생성 (특정 id를 받아와서 수정 하고 싶을때)
// });

// router.put("/:id", (req, res) => {
//   // TODO 수정
// });

router.patch("/:id/isDone", (req, res) => {
  // TODO 일부 수정
  const { id } = req.params;
  const { isDone } = req.body;
  const query = `
  UPDATE todos 
  SET isDone = ${isDone}
  WHERE id = ${id};
  `;

  conn.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return res.send({ success: false });
    } else {
      res.send({ success: true });
    }
  });
});

router.patch("/:id/content", (req, res) => {
  // TODO 일부 수정
  const { id } = req.params;
  const { content } = req.body;
  const query = `
  UPDATE todos 
  SET content = '${content}'
  WHERE id = ${id};
  `;

  conn.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return res.send({ success: false });
    } else {
      res.send({ success: true });
    }
  });
});

router.delete("/:id", (req, res) => {
  // TODO 삭제
  const { id } = req.params;
  const query = `DELETE FROM todos WHERE id = ${id};`;

  conn.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.send({ success: false });
    } else {
      res.send({ success: true });
    }
  });
});

router.delete("/", (req, res) => {
  // 전체 삭제
  const query = `DELETE FROM todos;`;

  conn.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.send({ success: false });
    } else {
      res.send({ success: true });
    }
  });
});

module.exports = router;
