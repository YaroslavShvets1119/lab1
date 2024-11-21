const express = require('express');
const router = express.Router();
const staticController = require('../controllers/staticController');

router.get('/privacy', staticController.getPrivacyPolicy);
router.get('/about', staticController.getAbout);

module.exports = router;
