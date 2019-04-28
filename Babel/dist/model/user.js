"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var userSchema = new Schema({
  'id': Number,
  'username': String,
  'password': String,
  'avatar': {
    type: String,
    "default": '女'
  },
  'fav': {
    type: Array,
    "default": []
  },
  'yes': {
    type: Array,
    "default": []
  }
});

var User = _mongoose["default"].model('allgirl', userSchema);

var _default = User;
exports["default"] = _default;