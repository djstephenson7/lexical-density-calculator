const express = require('express');

const router = express.Router();

const Word = require('../models/wordSchema');
const WordController = require('../controllers/wordController');

// Get all Word
router.get('/words', WordController.GetWord);

// Create new Word
router.post('/words', WordController.PostWord);

// Delete a words based on :id
router.delete('/words/:id', WordController.DeleteWord);

// Update a words based on :id
router.put('/words/:id', WordController.UpdateWord);

module.exports = router;
