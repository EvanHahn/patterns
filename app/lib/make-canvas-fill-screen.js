module.exports = function makeCanvasFillScreen (canvas) {
  var dpi = window.devicePixelRatio || 1
  canvas.width = window.innerWidth * dpi
  canvas.height = window.innerHeight * dpi
  if (dpi !== 1) {
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
  }
}
