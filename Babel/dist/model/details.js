"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var detailSchema = new Schema({
  'realUid': Number,
  '概要': String,
  '学历': String,
  '身高': String,
  '购车': String,
  '月薪': String,
  '住房': String,
  '体重': String,
  '星座': String,
  '民族': String,
  '属相': String,
  '血型': String,
  '照片': Object,
  '自我介绍': String,
  '情感故事': String,
  '爱情DNA': {
    type: String,
    "default": ''
  },
  '择偶要求': Object,
  '生活方式': Object,
  '经济实力': Object,
  '工作学习': Object,
  '婚姻观念': Object,
  'createTime': {
    type: Date,
    "default": new Date()
  }
});
detailSchema.index({
  'realUid': 1
}, {
  unique: true
});

var Detail = _mongoose["default"].model('details', detailSchema);

var _default = Detail;
exports["default"] = _default;