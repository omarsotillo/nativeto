'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const path = require('path')
exports.DEFAULT_APP_NAME = 'APP'
// Update both together
exports.DEFAULT_ELECTRON_VERSION = '8.2.3'
exports.DEFAULT_CHROME_VERSION = '80.0.3987.163'
exports.ELECTRON_MAJOR_VERSION = parseInt(
  exports.DEFAULT_ELECTRON_VERSION.split('.')[0],
  10
)
exports.PLACEHOLDER_APP_DIR = path.join(__dirname, './../', 'tmp')
//# sourceMappingURL=constants.js.map
