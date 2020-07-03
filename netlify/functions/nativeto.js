var nativefier = require('nativefier').default

// possible options, defaults unless specified otherwise
var options = {
  targetUrl: 'http://okubi.co',
}

nativefier(options, function (error, appPath) {
  if (error) {
    console.error(error)
    return
  }
  console.log('App has been nativefied to', appPath)
})
