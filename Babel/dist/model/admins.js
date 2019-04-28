"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var adminSchema = new Schema({
  'username': String,
  'password': String,
  'id': Number,
  'avatar': {
    type: String,
    "default": '/img/default_avatar.png'
  },
  'role': Number,
  //1:普通管理、 2:超级管理员
  'createTime': {
    type: Date,
    "default": new Date()
  }
});
adminSchema.index({
  id: 1
});

var Admin = _mongoose["default"].model('admin', adminSchema);

var _default = Admin;
exports["default"] = _default;