var querystring = require('querystring')
var config = require('./config')

module.exports = function () {
  var query = querystring.parse(window.location.hash.substr(1))

  var isQueryValid = Object.keys(config.defaultState).every(function (key) {
    return query.hasOwnProperty(key)
  })

  if (isQueryValid) {
    query.fontSize = parseInt(query.fontSize)
    query.spacing = parseInt(query.spacing)
    return query
  } else {
    return config.defaultState
  }
}
