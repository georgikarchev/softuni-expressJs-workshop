const db = require("../db");

exports.getHomePage = (req, res) => {
  console.log(req.query);

  const { search, from, to } = req.query;

  let cubes = db.cubes;

  if(search) {
    console.log("1: ", cubes)
    cubes = cubes.filter((cube) => cube.name.toLowerCase().includes(search.toLowerCase()));
    console.log("2: ", cubes)
  }

  if (from) {
    cubes = cubes.filter((cube) => cube.difficultyLevel >= from);
  }

  if (to) {
    cubes = cubes.filter((cube) => cube.difficultyLevel <= to);
  }

  res.render("index", { cubes, search, from, to });
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.get404 = (req, res) => {
  res.render("404");
};
