"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var ipSchema = new Schema({
  ori: String,
  ip: String,
  address: String,
  type: String,
  speed: {
    type: String,
    "default": '未知'
  },
  createTime: {
    type: Date,
    "default": new Date()
  }
});
ipSchema.index({
  'ip': 1
}, {
  unique: true
});

var ips = _mongoose["default"].model('ips', ipSchema);

var _default = ips;
exports["default"] = _default;