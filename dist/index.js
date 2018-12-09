'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleFormatter = exports.default = undefined;

var _simpleFormatter = require('./formatter/simpleFormatter');

var _simpleFormatter2 = _interopRequireDefault(_simpleFormatter);

var _myTextOutput = require('./output/myTextOutput');

var _myTextOutput2 = _interopRequireDefault(_myTextOutput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _myTextOutput2.default;
exports.SimpleFormatter = _simpleFormatter2.default;