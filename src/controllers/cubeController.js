//  this file is the cubeController file and it holds multiple actions regarding the cube asset/model

const Cube = require("../models/Cube");

// this is the getCreateCube action
exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  //save cube
  let cube = new Cube(name, description, imageUrl, difficultyLevel);
  await Cube.save(cube);

  //redirect
  res.redirect("/");
};

exports.getCube = (req, res) => {
  res.render("details");
};
