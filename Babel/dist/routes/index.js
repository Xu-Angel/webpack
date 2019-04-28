"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _admin = _interopRequireDefault(require("./admin"));

var _girl = _interopRequireDefault(require("./girl"));

var _spider = _interopRequireDefault(require("./spider"));

var _ip = _interopRequireDefault(require("./ip"));

var _log = _interopRequireDefault(require("./log"));

var _common = _interopRequireDefault(require("./common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(app) {
  app.use('/admin', _admin["default"]);
  app.use('/girl', _girl["default"]);
  app.use('/spider', _spider["default"]);
  app.use('/common', _common["default"]);
  app.use('/ip', _ip["default"]);
  app.use('/log', _log["default"]);
};

exports["default"] = _default;