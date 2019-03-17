function stringFormatter(str) {
  if (
    typeof str !== 'string',
    str.length > 1000,
    str.split(/\W+/).length > 100 || str.split(/\W+/).length < 1
  ) {
    console.log('Error input');
  } else {
    const formatted = str.replace(/[.,\/#!£$%\^&\*;:{}=\-_`~()0-9]/g, '');
    console.log(formatted);
    return formatted;
  }
}

stringFormatter('K£im lo!ves go.in!9g to t,,he99 cinema9');

module.exports = stringFormatter;
