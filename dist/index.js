
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./coba-actions.cjs.production.min.js')
} else {
  module.exports = require('./coba-actions.cjs.development.js')
}
