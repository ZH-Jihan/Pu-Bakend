const express = require("express");
const routes = express.Router();
const classRoomControlar = require("../../controller/classroom.controller")

routes
.route("/")
.get(classRoomControlar.getAllClass)

module.exports = routes;