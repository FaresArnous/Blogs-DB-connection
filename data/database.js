const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "your host",
  database: "your database",
  user: "your user",
  password: "Your password",
});

module.exports = pool;
