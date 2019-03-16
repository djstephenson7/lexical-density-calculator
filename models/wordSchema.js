const mongoose = require('mongoose');
const { Schema } = mongoose;

const WordSchema = Schema({
  word: {
    type: String,
    required: true,
    unique: true,
  },
  inputDate: {
    type: Date,
    default: Date.now,
  },
});

const WordModel = mongoose.model('Words', WordSchema);

module.exports = WordModel;
