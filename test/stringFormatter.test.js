const stringFormatter = require('../app/controllers/stringFormatter');
const hundredWordStory = require('./helpers');
const thousandPlusCharacters = require('./helpers');

test('Removes numbers and punctuation from string', () => {
  expect(stringFormatter('K£im lo!ves go.in!9g to t,,he99 cinema9'))
    .toBe('Kim loves going to the cinema');
});

test('Error if string word count > 100', () => {
  expect(stringFormatter(hundredWordStory)).toBe('Error Input');
});

test('Error if string character count > 1000', () => {
  expect(stringFormatter(thousandPlusCharacters)).toBe('Error Input');
});
