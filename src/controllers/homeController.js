const db = require("../db");

exports.getHomePage = (req, res) => {
  res.render("index", { cubes: db.cubes });
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};


exports.get404 = (req, res) => {
  res.render('404');
};