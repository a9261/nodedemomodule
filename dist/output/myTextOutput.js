'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyTextOutput = function () {
  function MyTextOutput() {
    var formatter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, MyTextOutput);

    this.formatter = formatter;
  }

  _createClass(MyTextOutput, [{
    key: 'getResult',
    value: function getResult(text) {
      if (!this.formatter) {
        throw new Error('Text Formatter is required');
      }
      var result = this.formatter.getFormatterText(text);
      return result;
    }
  }]);

  return MyTextOutput;
}();

exports.default = MyTextOutput;