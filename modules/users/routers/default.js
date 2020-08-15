// url namespace
let uns = '/api/v1/users/'
//controller namespace
let cns = '../controllers/'
module.exports = function (app) {
  app.use(uns + 'test', require('../../../controllers/test'))
}