const stringFormatter = require('./stringFormatter');
const nonLexicalWords = require('../seed/nonLexicalWords');

const LexicalDensityCalculator = {

  calculate(req, res) {
    const sentence = stringFormatter(req.body.sentence);
    const wordCounter = sentence.length;
    // console.log(nonLexicalWords)
    console.log(wordCounter);

    res.json({ status: true, sentence });
  },
};


module.exports = LexicalDensityCalculator;
