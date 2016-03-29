var throttle = require('lodash/throttle')
var render = require('./render')
var getInitialState = require('get-initial-state')

var canvas = document.getElementById('main-canvas')
var state = getInitialState()

render(state, canvas)

window.addEventListener('resize', throttle(function () {
  render(state, canvas)
}, 100))
