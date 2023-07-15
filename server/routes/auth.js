const express = require('express');
const authControllers = require('../controllers/auth.js');

const router = express.Router();

router.post('/register', authControllers.register);
router.post('/login', authControllers.login);
router.get('/logout', authControllers.logout);

module.exports = router;
