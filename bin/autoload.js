let env = process.env.NODE_ENV || 'development'
global.constants = require('../config/constants')
global.db = {
  mysql: require('../models/mysql/index'),
  mongo: require('../models/mongo/index'),
}
global.config = {
  default: require('../config/default.json')[env],
}
