var nativefier = require('nativefier').default
var archiver = require('archiver')
var fs = require('fs')

exports.handler = function (event, context, callback) {
  const options = JSON.parse(event.body)
  nativefier({ ...options, ...{ out: './tmp' } }, function (error, appPath) {
    if (error) {
      console.error(error)
      return
    }
    const fileName = './tmp/' + options.appName + '.zip'
    const fileOutput = fs.createWriteStream(fileName)
    const archive = archiver('zip')

    archive.pipe(fileOutput)
    archive.directory(appPath, false)
    archive.finalize()

    fileOutput.on('close', function () {
      fs.readFile(fileOutput.path, function read(err, data) {
        callback(null, {
          headers: {
            'Content-Type': 'application/zip',
            'Content-Disposition': 'attachment; filename=' + fileName,
          },
          statusCode: 200,
          body: data.toString('base64'),
          isBase64Encoded: true,
        })
      })
    })
  })
}
