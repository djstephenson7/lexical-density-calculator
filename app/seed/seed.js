const mongoose = require('mongoose');
const Word = require('../models/wordSchema');
const config = require("../config/config");

const nonLexicalWords = [
"to",
"got",
"is",
"have",
"and",
"although",
"or",
"that",
"when",
"while",
"a",
"either",
"more",
"much",
"neither",
"my",
"the",
"as",
"no",
"nor",
"not",
"at",
"between",
"in",
"of",
"without",
"I",
"you",
"he",
"she",
"it",
"we",
"they",
"anybody"
]

console.log(config.MONGODB_URI)
const dbName = config.db;
mongoose.connect(dbName,{ useNewUrlParser: true });

var wordObject = nonLexicalWords.map(word => ({
    word: word
}))

Word.create(wordObject, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${words.length} words`)
  mongoose.connection.close()
});

console.log(dbName)
