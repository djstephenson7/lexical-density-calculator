const stringFormatter = require('./stringFormatter')

const LexicalDensityCalculator = {

  calculate(req, res) {
    const sentence = req.body;
    sentence.save((err, sentence) => {
      if (err) {
        res.json({ status: false, error: 'Something went wrong' });
        return;
      }
      res.json({ status: true, message: 'Word Saved!!' });
    });
  }
}


module.exports = LexicalDensityCalculator
