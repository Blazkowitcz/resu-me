const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.post('/create', UserController.create);
router.post('/find', UserController.find);
router.get('/findAll', UserController.findAll);

module.exports = router;