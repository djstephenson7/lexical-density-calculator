function stringFormatter(str) {
  if (
    typeof str !== 'string'
    || str.length > 1000
    || str.split(/\W+/).length > 100
    || str.split(/\W+/).length < 1
  ) {
    return 'Error Input';
  }
  return str.replace(/[.,\/#!£$%\^&\*;:{}=\-_`''~()0-9]/g, '').split(' ');
}

module.exports = stringFormatter;
