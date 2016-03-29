var $ = require('jquery')
require('spectrum-colorpicker')

module.exports = function (state, $controls) {
  for (var key in state) {
    if (state.hasOwnProperty(key)) {
      $controls.find('[name="' + key + '"]').val(state[key])
    }
  }

  $controls.find('[name="backgroundColor"]').spectrum({
    showButtons: false
  })
}
