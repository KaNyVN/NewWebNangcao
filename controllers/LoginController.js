exports.showLogin = (req, res) => {
  res.render("login", {
    islogin: false,
    username: ""
  });
};

exports.login = (req, res) => {
  const username = req.body.username || "";

  res.render("login", {
    islogin: Boolean(username),
    username
  });
};
