var nativefier = require('nativefier').default
var archiver = require('archiver')
var os = require('os')
var fs = require('fs')

exports.handler = function (event, context, callback) {
  fs.writeFile('/tmp/test.txt', 'testing', function (err) {
    if (err) {
      console.log(err)
    } else {
      fs.readFile('testing', function read(err, data) {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({}),
          isBase64Encoded: true,
        })
      })
    }
  })
}
