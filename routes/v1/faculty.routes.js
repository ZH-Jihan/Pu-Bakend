const express = require("express");
const facultyController = require("../../controller/faculty.controller");
const viewCount = require("../../middelware/viewCount");
const limiter = require("../../middelware/limiter");
const verifyToken = require("../../middelware/verifyToken");
const authorization = require("../../middelware/authorization");
const routes = express.Router();

routes
  .route("/")
  .get(viewCount,limiter ,facultyController.getAllFaculty)
  .post(verifyToken,authorization("admin"),facultyController.postAFaculty);
routes
  .route("/:id")
  .get(viewCount,limiter ,facultyController.getOneFaculty)
  .put(verifyToken,authorization("admin"),facultyController.updateOneFaculty)
  .delete(verifyToken,authorization("admin"),facultyController.deleteOneFaculty)


module.exports = routes; 