const express = require('express');
const authControllers = require('../controllers/auth.js');
const bodyParser = require('body-parser');

const router = express.Router();

router.post('/register', bodyParser.json(), authControllers.register);

module.exports = router;
