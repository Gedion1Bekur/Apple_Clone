// models/dbModel.js
const mysql = require("mysql2");
require("dotenv").config(); // Use dotenv to get environment variables

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const testConnection = () => {
  return new Promise((resolve, reject) => {
    conn.connect((err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Connected to the database!");
      }
    });
  });
};

module.exports = { testConnection };
