const express = require('express');

const router = express.Router();
const LexicalDensityCalculator = require('../controllers/lexicalDensityCalculator');

router.post('/calculate', LexicalDensityCalculator.calculate);

module.exports = router;
