module.exports = {
  test: {
    db: 'mongodb://localhost/noobjs_test'
  },
  development: {
    db: 'mongodb://localhost/noobjs_dev'
  },
  production: {
    db: process.env.MONGOLAB_URI
  }
}[process.env.NODE_ENV || 'development'];