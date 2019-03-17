const mongoose = require('mongoose');
const Word = require('../models/wordSchema');
const config = require('../config/config');
const nonLexicalWords = require('./nonLexicalWords');


console.log(config.MONGODB_URI);
const dbName = config.db;
mongoose.connect(dbName, { useNewUrlParser: true });

const wordObject = nonLexicalWords.map(word => ({
  word,
}));

Word.create(wordObject, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${words.length} words`);
  mongoose.connection.close();
});
