const express = require("express");
const router = express.Router();
const StudyController = require('../controllers/study.controller');

router.get('/findAll', StudyController.findAll);
router.post('/create', StudyController.create);

module.exports = router;