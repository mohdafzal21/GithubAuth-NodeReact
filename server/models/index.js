const mongoose = require('mongoose');
const keys = require('../config/keys')

mongoose.connect(keys.mongoURI, {useNewUrlParser: true ,  useUnifiedTopology: true })

// module.exports.USER = require('./user')
// module.exports.CANVAS = require('./user')
