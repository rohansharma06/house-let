const express = require('express');
const router = express.Router();

console.log('Router Loaded');

//--- route to different endpoints
router.use('/admin',require('./seller'));

module.exports = router;