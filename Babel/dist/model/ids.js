"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var idsSchema = new Schema({
  admin_id: {
    type: Number,
    "default": 0
  },
  girl_id: {
    type: Number,
    "default": 0
  },
  img_id: {
    type: Number,
    "default": 0
  }
});

var Ids = _mongoose["default"].model('id', idsSchema);

Ids.findOne(function (err, data) {
  if (!data) {
    var newIds = new Ids({
      admin_id: 0,
      girl_id: 0,
      img_id: 0
    });
    newIds.save();
  }
});
var _default = Ids;
exports["default"] = _default;