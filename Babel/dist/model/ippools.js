"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var ipPool = new Schema({
  type: String,
  host: String,
  port: Number,
  anonymity: {
    type: String,
    "default": '未知'
  },
  country: {
    type: String,
    "default": '未知'
  },
  response_time: {
    type: Number,
    "default": 0
  },
  from: {
    type: String,
    "default": '未知'
  },
  createTime: Date
});
ipPool.index({
  host: 1
}, {
  unique: true
});

var ipPools = _mongoose["default"].model('ipPools', ipPool);

var _default = ipPools;
exports["default"] = _default;