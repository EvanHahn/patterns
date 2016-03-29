var makeCanvasFillScreen = require('./lib/make-canvas-fill-screen')
var querystring = require('querystring')

module.exports = function render (state, canvas) {
  console.log('rendering', state)

  makeCanvasFillScreen(canvas)

  var context = canvas.getContext('2d')

  context.fillStyle = state.backgroundColor
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = state.color
  context.font = state.fontSize + 'px sans-serif'
  context.textAlign = 'center'
  context.textBaseline = 'middle'

  var rowShouldBeOffset = false
  var startX = -Math.round(canvas.width % state.spacing)
  var startY = -Math.round(canvas.height % state.spacing)
  var endX = canvas.width + state.spacing
  var endY = canvas.height + state.spacing
  for (var y = startY; y < endY; y += state.spacing) {
    var x = startX
    if (rowShouldBeOffset) { x = Math.round(x - (state.spacing / 2)) }
    rowShouldBeOffset = !rowShouldBeOffset

    for (; x < endX; x += state.spacing) {
      context.fillText(state.content, x, y)
    }
  }

  location.hash = querystring.stringify(state)
}
