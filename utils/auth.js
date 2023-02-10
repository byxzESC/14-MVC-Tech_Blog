const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

const areAuth = (req, res, next) => {
  if (req.session.logged_in) {
    res.redirect("/");
  } else {
    next();
  }
};

module.exports = withAuth, areAuth;
