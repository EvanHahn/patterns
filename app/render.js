var makeCanvasFillScreen = require('./lib/make-canvas-fill-screen')

module.exports = function render (state, canvas) {
  console.log('rendering', state)

  makeCanvasFillScreen(canvas)

  var context = canvas.getContext('2d')

  context.fillStyle = state.backgroundColor
  context.fillRect(0, 0, canvas.width, canvas.height)
}
