function stringFormatter(str) {
  if (
    typeof str !== 'string'
    || str.length > 1000
    || str.split(/\W+/).length > 100
    || str.split(/\W+/).length < 1
  ) {
    return 'Error Input';
  }
  return str.replace(/[.,\/#!£$%\^&\*;:{}=\-_`~()0-9]/g, '').split(" ");
}

// stringFormatter('K£im lo!ves go.in!9g to t,,he99 cinema9');

module.exports = stringFormatter;
