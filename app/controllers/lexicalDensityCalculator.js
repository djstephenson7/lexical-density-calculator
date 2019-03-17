const stringFormatter = require('./stringFormatter')

const LexicalDensityCalculator = {

  calculate(req, res) {
    const sentence = req.body.sentence;
    console.log(sentence)
    var hi = stringFormatter(sentence)
    console.log(hi)

      res.json({ status: true, sentence: sentence });
  }
}


module.exports = LexicalDensityCalculator
