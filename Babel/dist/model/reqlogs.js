"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var reqLogSchema = new Schema({
  time: Date,
  origin: String,
  ua: String,
  host: String,
  referer: String,
  url: String,
  ip: String
});

var reqLogs = _mongoose["default"].model('reqLogs', reqLogSchema);

var _default = reqLogs;
exports["default"] = _default;