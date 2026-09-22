require("dotenv").config();

const mysql = require("mysql2/promise");

// Dùng TCP (127.0.0.1) thay vì localhost để Node không cố tìm Unix socket.
// Khi chạy bằng Docker Compose, đặt DB_HOST=db trong file .env.
const db = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "newsuser",
  password: process.env.DB_PASSWORD || "newspassword",
  database: process.env.DB_NAME || "newsdb",
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 10000
});

module.exports = db;
