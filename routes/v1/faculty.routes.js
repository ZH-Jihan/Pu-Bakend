const express = require("express");
const facultyController = require("../../controller/faculty.controller");
const viewCount = require("../../middelware/viewCount");
const limiter = require("../../middelware/limiter");
const routes = express.Router();

routes
  .route("/")
  .get(viewCount,limiter ,facultyController.getAllFaculty)
  .post( facultyController.postAFaculty);


module.exports = routes;