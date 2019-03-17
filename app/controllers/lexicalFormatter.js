function stringFormatter(str) {
  if (
    typeof str !== 'string',
    str.length > 1000,
    str.split(/\W+/).length > 100 || str.split(/\W+/).length < 1
    ) {
    console.log('Error input')
  } else {
    console.log('Input is OK')
  }
}

stringFormatter('Kim loves going to the cinema')
