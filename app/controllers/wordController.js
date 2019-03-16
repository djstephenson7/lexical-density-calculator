const Word = require('../models/wordSchema');

const WordCtrl = {
  // Get all words from the Database
  GetWord(req, res) {
    Word.find({}, (err, words) => {
      if (err) {
        res.json({ status: false, error: 'Something went wrong' });
        return;
      }
      res.json({ status: true, word: words });
    });
  },
  // Post a word into Database
  PostWord(req, res) {
    const word = new Word(req.body);
    word.save((err, word) => {
      if (err) {
        res.json({ status: false, error: 'Something went wrong' });
        return;
      }
      res.json({ status: true, message: 'Word Saved!!' });
    });
  },
  // Updating a word status based on an ID
  UpdateWord(req, res) {
    const { completed } = req.body;
    Word.findById(req.params.id, (err, word) => {
      word.completed = completed;
      word.save((err, word) => {
        if (err) {
          res.json({ status: false, error: 'Status not updated' });
        }
        res.json({ status: true, message: 'Status updated successfully' });
      });
    });
  },
  // Deleting a word baed on an ID
  DeleteWord(req, res) {
    Word.remove({ _id: req.params.id }, (err, words) => {
      if (err) {
        res.json({ status: false, error: 'Deleting word is not successfull' });
        return;
      }
      res.json({ status: true, message: 'Word deleted successfully!!' });
    });
  },
};

module.exports = WordCtrl;
