require("dotenv").config();

const mysql = require("mysql2/promise");

// Dùng TCP và utf8mb4 để hỗ trợ đầy đủ tiếng Việt và các ký tự Unicode.
// Khi chạy bằng Docker Compose, đặt DB_HOST=db nếu Node cũng chạy trong container.
const db = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "newsuser",
  password: process.env.DB_PASSWORD || "newspassword",
  database: process.env.DB_NAME || "newsdb",
  charset: "utf8mb4",
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 10000
});

module.exports = db;
