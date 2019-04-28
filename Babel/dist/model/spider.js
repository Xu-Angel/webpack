"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("../core/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var age = [];
var height = [];

for (var i = 18; i < 70; i++) {
  age.push(i);
}

for (var _i = 150; _i < 190; _i++) {
  height.push(_i);
}

var education = ['高中中专及以下', '大专', '本科', '双学士', '硕士', '博士'];
var marriage = ['未婚', '离异', '丧偶'];
var spiderSchema = new Schema({
  'cookie': String,
  'area': {
    type: Object,
    "default": _config.stc
  },
  'tag': {
    type: Object,
    "default": {}
  },
  'param': {
    type: Object,
    "default": {}
  },
  'age': {
    type: Array,
    "default": age
  },
  'height': {
    type: Array,
    "default": height
  },
  'education': {
    type: Array,
    "default": education
  },
  'marriage': {
    type: Array,
    "default": marriage
  }
});

var Spider = _mongoose["default"].model('spider', spiderSchema);

Spider.findOne(function (err, data) {
  if (!data) {
    var newSpider = new Spider({
      'cookie': '',
      'area': _config.stc,
      'tag': {},
      'param': {},
      'age': age,
      'height': height,
      'education': education,
      'marriage': marriage,
      'listStatus': 0,
      'detailStatus': 0
    });
    newSpider.save();
  }
});
var _default = Spider;
exports["default"] = _default;