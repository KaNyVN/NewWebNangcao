exports.search = (req, res) => {
  res.render("search", {
    keyword: req.query.keyword || ""
  });
};
