"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _configLite = _interopRequireDefault(require("config-lite"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect(_configLite["default"].url, {
  useCreateIndex: true,
  useNewUrlParser: true
});

_mongoose["default"].Promise = global.Promise; // 使用Node的Promise  接管

var db = _mongoose["default"].connection; // 全局链接 
// createConnection  具名链接

db.once('open', function () {
  console.log(_chalk["default"].green('连接数据库成功'));
});
db.on('error', function (error) {
  console.error(_chalk["default"].red('Error in MongoDb connection: ' + error));

  _mongoose["default"].disconnect();
});
db.on('close', function () {
  console.log(_chalk["default"].red('数据库断开，重新连接数据库'));

  _mongoose["default"].connect(_configLite["default"].url, {
    server: {
      auto_reconnect: true
    },
    useCreateIndex: true,
    useNewUrlParser: true
  });
});
var _default = db;
exports["default"] = _default;