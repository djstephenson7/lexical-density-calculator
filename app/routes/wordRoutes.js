const express = require('express');

const router = express.Router();

const Word = require('../models/wordSchema');
const WordController = require('../controllers/wordController');

// Get all Word
router.get('/word', WordController.GetWord);

// Create new Word
router.post('/word', WordController.PostWord);

// Delete a word based on :id
router.delete('/word/:id', WordController.DeleteWord);

// Update a word based on :id
router.put('/word/:id', WordController.UpdateWord);

module.exports = router;
