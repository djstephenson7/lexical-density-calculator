const config = {
  port: process.env.PORT || 2000,
  db: process.env.MONGOLAB_URI || 'mongodb://localhost/wordapi',
  test_port: 2001,
  test_db: 'mongodb://localhost/wordapi_test',
};
module.exports = config;
