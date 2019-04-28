"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var girlSchema = new Schema({
  'realUid': Number,
  'area': String,
  'nickname': String,
  'sex': {
    type: String,
    "default": '女'
  },
  'marriage': {
    type: String,
    "default": '未婚'
  },
  'height': Number,
  'education': String,
  'work_location': String,
  'age': {
    type: Number,
    "default": 18
  },
  'image': String,
  'randListTag': String,
  'userIcon': String,
  'shortnote': String,
  'matchCondition': String,
  'helloUrl': String,
  'top': {
    type: Number,
    "default": 0
  },
  'hidden': {
    type: Boolean,
    "default": false
  },
  'status': {
    type: Boolean,
    "default": false
  },
  'createTime': Date,
  'finishTime': Date
});
girlSchema.index({
  'realUid': 1
}, {
  unique: true
});
girlSchema.index({
  'createTime': -1
});
girlSchema.index({
  'top': -1
}); // girlSchema.index({ 'realUid': 1 })

var Girl = _mongoose["default"].model('allgirl', girlSchema);

var _default = Girl;
exports["default"] = _default;