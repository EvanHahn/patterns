var ko = require('knockout-es5')
var throttle = require('lodash/throttle')
var render = require('./render')
var config = require('./config')

var canvas = document.getElementById('main-canvas')
var state = config.defaultState

window.addEventListener('resize', throttle(function () {
  render(state, canvas)
}, 100))

render(state, canvas)
