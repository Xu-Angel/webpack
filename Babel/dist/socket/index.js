"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getDetailStatus = _interopRequireDefault(require("./getDetailStatus"));

var _getListStatus = _interopRequireDefault(require("./getListStatus"));

var _getIpStatus = _interopRequireDefault(require("./getIpStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var G = global;

var _default = function _default(IO) {
  (0, _getDetailStatus["default"])(IO, G);
  (0, _getListStatus["default"])(IO, G);
  (0, _getIpStatus["default"])(IO, G);
};

exports["default"] = _default;