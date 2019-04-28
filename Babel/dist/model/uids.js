"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var uidSchema = new Schema({
  'realUid': Number
});
uidSchema.index({
  'realUid': 1
}, {
  unique: true
});

var Uid = _mongoose["default"].model('uids', uidSchema);

var _default = Uid;
exports["default"] = _default;