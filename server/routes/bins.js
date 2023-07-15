const express = require('express');
const binsControllers = require('../controllers/bins.js');

const router = express.Router();

router.get('/', binsControllers.getBins);
router.put('/:id', binsControllers.updateBin);
router.delete('/:id', binsControllers.deleteBin);
router.post('/', binsControllers.createBin);

module.exports = router;
