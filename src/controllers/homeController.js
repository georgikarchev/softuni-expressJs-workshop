const db = require("../db");

exports.getHomePage = (req, res) => {
  res.render("index", { cubes: db.cubes });
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};
