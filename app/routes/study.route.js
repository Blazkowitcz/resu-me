const express = require("express");
const router = express.Router();
const StudyController = require('../controllers/study.controller');

/**
 * GET ROUTES
 */
router.get('/findAll', StudyController.findAll);

/**
 * POST ROUTES
 */
router.post('/create', StudyController.create);
router.post('/find', StudyController.find);
router.post('/findOne', StudyController.findOne);
router.post('/update', StudyController.update);

module.exports = router;