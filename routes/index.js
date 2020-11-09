const express = require('express');
const router = express.Router();

console.log('Router Loaded');

//--- route to different endpoints
router.use('/admin',require('./seller'));
router.use('/user',require('./buyer'));

module.exports = router;