const express = require('express');

const router = express.Router();
const WordController = require('../controllers/wordController');
// const LexicalDensityCalculator = require('../controllers/lexicalDensityCalculator')

// Get all Word
router.get('/words', WordController.getWord);

// Create new Word
router.post('/words', WordController.postWord);

// Delete a words based on :id
router.delete('/words/:id', WordController.deleteWord);

// Update a words based on :id
router.put('/words/:id', WordController.updateWord);

module.exports = router;
