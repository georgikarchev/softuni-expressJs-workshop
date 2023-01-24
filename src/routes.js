// const express = require("express");
// const Router = express.Router;
// const router = Router();
// --- the following line does the same job as the 3 lines above
const router = require('express').Router();

const cubeController = require("./controllers/cubeController");
const homeController = require('./controllers/homeController');


router.get("/", homeController.getHomePage);
router.get("/about", homeController.getAboutPage);

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.getCube);

module.exports = router;