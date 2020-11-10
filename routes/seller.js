const express = require('express');
const router = express.Router();
const passport= require('passport');
const seller_controller = require('../controllers/seller_controller');
const property_contoller = require('../controllers/property_controller');

router.post('/register', seller_controller.register);
router.post('/login', seller_controller.login);
router.post('/addproperty', passport.authenticate('jwt',{session: false}), property_contoller.create);
router.get('/allproperty',passport.authenticate('jwt',{session: false}), property_contoller.fetchproperty);
router.post('/propertydetails', passport.authenticate('jwt',{session: false}), property_contoller.fetchpropertydetails);
router.post('/propertystatus',passport.authenticate('jwt',{session: false}), property_contoller.changeStatus);

module.exports = router;