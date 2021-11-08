var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var conn = require("./db/index");

var indexRouter = require("./routes/index");
var todoRouter = require("./routes/todo");
var usersRouter = require("./routes/users");

var app = express();

// 서버 안멈추고 새로고침 되게끔 추가한 코드
const livereload = require("livereload");
const livereloadMiddleware = require("connect-livereload");

const liveServer = livereload.createServer({
  exts: ["html", "css", "ejs"],
});

liveServer.watch(__dirname);

var app = express();

conn.connect();

app.use(livereloadMiddleware());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/todo", todoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
