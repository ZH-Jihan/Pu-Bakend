const express = require("express");
const userController = require("../../controller/user.controller");
const verifyToken = require("../../middelware/verifyToken");
const router = express.Router();


router.get('/', userController.getAllUser);

router.post('/singup', userController.singup);

router.post('/login', userController.login);

router.get('/me',verifyToken, userController.getMe);


module.exports = router;