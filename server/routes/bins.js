const express = require('express');
const binsControllers = require('../controllers/bins.js');

const router = express.Router();

router.get('/', binsControllers.getBins);

module.exports = router;
