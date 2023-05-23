"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getCurrentPackRequirePath = getCurrentPackRequirePath;

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCurrentPackRequirePath() {
  const targetRsoleved = require.resolve(_package.default.name).replace(/[\\/]dist[\\/]index\.js$/, '').replace(/\\/g, '/');

  return targetRsoleved;
}

var _default = {};
exports.default = _default;