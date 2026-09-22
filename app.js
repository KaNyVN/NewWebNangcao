require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const indexRoutes = require("./routes/index");
const newsRoutes = require("./routes/news");
const searchRoutes = require("./routes/search");
const loginRoutes = require("./routes/login");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoutes);
app.use("/news", newsRoutes);
app.use("/search", searchRoutes);
app.use("/login", loginRoutes);

app.use((req, res) => {
  res.status(404).send("<h1>404 - Không tìm thấy trang</h1>");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("<h1>Lỗi server</h1><p>Không thể kết nối tới cơ sở dữ liệu.</p>");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
