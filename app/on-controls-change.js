var config = require('./config')

module.exports = function ($controls, callback) {
  $controls.find('[type="color"]').on('move.spectrum', function (e, color) {
    var data = {}
    data[this.name] = color.toHexString()
    callback(data)
  })

  $controls.find('input, select').on('input', function (event) {
    if (this.value) {
      var data = {}
      data[this.name] = this.value
      callback(data)
    }
  })

  $controls.find('#reset').on('click', function () {
    callback(config.defaultState)
    window.location.reload()
  })
}
