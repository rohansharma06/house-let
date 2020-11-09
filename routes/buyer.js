const express = require('express');
const router = express.Router();
const passport = require('passport');
const buyer_controller = require('../controllers/buyer_controoler');
const property_controller = require('../controllers/property_controller');

router.post('/register',buyer_controller.register);
router.post('/login',buyer_controller.login);
router.get('/allproperty',property_controller.fetchAllProperty);

module.exports = router;