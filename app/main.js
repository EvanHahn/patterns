var $ = require('jquery')
var throttle = require('lodash/throttle')
var render = require('./render')
var getInitialState = require('./get-initial-state')
var renderInitialControls = require('./render-initial-controls')
var onControlsChange = require('./on-controls-change')
var assign = require('lodash/assign')

var canvas = $('#main-canvas').get(0)
var state = getInitialState()
var $controls = $('#controls')

renderInitialControls(state, $controls)

render(state, canvas)
$(window).on('resize', throttle(function () {
  render(state, canvas)
}, 100))
onControlsChange($controls, function (newProperties) {
  assign(state, newProperties)
  render(state, canvas)
})

$controls.on('submit', function (event) {
  event.preventDefault()
})
