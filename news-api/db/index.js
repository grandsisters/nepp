const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12341234",
  database: "todo_app",
});

module.exports = connection;
