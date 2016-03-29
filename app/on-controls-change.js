module.exports = function ($controls, callback) {
  $controls.find('[name="backgroundColor"]').on('move.spectrum', function (e, color) {
    callback({ backgroundColor: color.toHexString() })
  })
}
