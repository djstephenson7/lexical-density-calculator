const stringFormatter = require('./stringFormatter');
const nonLexicalWords = require('../seed/nonLexicalWords');

const LexicalDensityCalculator = {
  calculate(req, res) {
    const sentence = stringFormatter(req.body.sentence);
    const wordCounter = sentence.length;
    const filter = sentence.filter(word => nonLexicalWords.includes(word));
    const result = Number(1 - filter.length / wordCounter).toFixed(2);
    res.json(
      {
        data: {
          overall_ld: result,
        },
      },
    );
  },
};

module.exports = LexicalDensityCalculator;
