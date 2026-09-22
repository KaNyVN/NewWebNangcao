const db = require("../config/db");

exports.list = async (req, res, next) => {
  try {
    const [newsList] = await db.query(
      "SELECT * FROM posts ORDER BY id DESC LIMIT 10"
    );
    res.render("news", { id: "", newsList });
  } catch (error) {
    next(error);
  }
};

exports.detail = async (req, res, next) => {
  try {
    const [newsList] = await db.query(
      "SELECT * FROM posts WHERE id = ?",
      [req.params.id]
    );
    res.render("news", { id: req.params.id, newsList });
  } catch (error) {
    next(error);
  }
};
