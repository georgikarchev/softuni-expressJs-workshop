const express = require("express");
const app = express();

const config = require("./config");
const setupViewEngine = require("./config/viewEngine");
// const { getCreateCube } = require("./controllers/cubeController");
const cubeController = require("./controllers/cubeController");

setupViewEngine(app);
// this line does the same as the upper two lines
// require('./config/viewEngine')(app);

// setup static assets
app.use(express.static("./public"));

app.get("/", (req, res) => {
  // res.send("Home page");
  // layout doesn't have to be explicitly defined when using the default/main layout
  // res.render('home', {layout: 'main'});
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// app.get('/create', (req, res) => {
//     res.render('create');
// });
// this works
// app.get('/create', cubeController.getCreateCube);

// using modular routes

app.listen(config.PORT, () =>
  console.log(`Server is running on port ${config.PORT}...`)
);
