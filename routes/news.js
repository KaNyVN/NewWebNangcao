const express = require("express");
const router = express.Router();
const newsController = require("../controllers/NewsController");

router.get("/", newsController.list);
router.get("/:id", newsController.detail);

module.exports = router;
