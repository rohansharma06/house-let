const express = require('express');
const router = express.Router();
const seller_controller = require('../controllers/seller_controller');

router.post('/register', seller_controller.register);
router.post('/login', seller_controller.login);

module.exports = router;