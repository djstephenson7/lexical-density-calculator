const stringFormatter = require('../app/controllers/stringFormatter');

test('Removes numbers and punctuation from string', () => {
  expect(stringFormatter('K£im lo!ves go.in!9g to t,,he99 cinema9'))
    .toBe('Kim loves going to the cinema');
});
