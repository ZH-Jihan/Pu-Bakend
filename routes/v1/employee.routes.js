const express = require("express");
const routes = express.Router();
const verifyToken = require("../../middelware/verifyToken");
const authorization = require("../../middelware/authorization");
const EmployeeControler = require("../../controller/employee.controller");

routes
.route("/")
.get(verifyToken,EmployeeControler.getAllEmployee)
.post(verifyToken,authorization("admin"),EmployeeControler.postEmployee)

routes
.route("/:id")
.get(verifyToken,EmployeeControler.getOneEmployee)
.put(verifyToken,authorization("admin"),EmployeeControler.updateEmployee)
.delete(verifyToken,authorization("admin"),EmployeeControler.deleteEmployee)

module.exports = routes;