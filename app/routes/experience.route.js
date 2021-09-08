const express = require("express");
const router = express.Router();
const ExperienceController = require('../controllers/experience.controller');

/**
 * GET ROUTES
 */
router.get('/findAll', ExperienceController.findAll);

/**
 * POST ROUTES
 */
router.post('/create', ExperienceController.create);
router.post('/find', ExperienceController.find);
router.post('/findOne', ExperienceController.findOne);
router.post('/update', ExperienceController.update);

module.exports = router;