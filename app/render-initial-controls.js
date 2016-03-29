var $ = require('jquery')
var config = require('./config')
require('spectrum-colorpicker')

module.exports = function (state, $controls) {
  $controls.find('input').each(function () {
    if (!this.name) { return }

    this.id = this.name

    if (state.hasOwnProperty(this.name)) {
      this.value = state[this.name]
    }
  })

  var contentOptions = document.createDocumentFragment()
  config.contents.forEach(function (content) {
    var option = document.createElement('option')
    option.innerHTML = option.value = content
    contentOptions.appendChild(option)
  })
  $controls.find('[name="content"]').append(contentOptions)

  $controls.find('[type="color"]').spectrum({
    showButtons: false
  })
}
