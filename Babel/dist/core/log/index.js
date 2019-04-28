"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogReq = LogReq;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _moment = _interopRequireDefault(require("moment"));

var _reqlogs = _interopRequireDefault(require("../../model/reqlogs"));

var _index = _interopRequireDefault(require("../../tool/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function LogReq(req) {
  var time = (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss');
  var origin = req.headers.origin;

  var ua = _index["default"].getBrowserInfo(req.headers['user-agent']);

  var referer = req.headers.referer;
  var host = req.headers.host;

  var ip = _index["default"].getClientIp(req);

  var url = req.url;

  _index["default"].confirmPath(_path["default"].resolve(__dirname, "../../logs/req"));

  _fs["default"].appendFile(_path["default"].resolve(__dirname, "../../logs/req/req-".concat((0, _moment["default"])().format('YYYY-MM-DD-HH'), ".log")), "\r\n\u65F6\u95F4:'".concat(time, "'----\u8BF7\u6C42\u7684origin:'").concat(origin, "'----\u8BF7\u6C42\u7684\u6D4F\u89C8\u5668:'").concat(ua, "'----\u8BF7\u6C42\u7684referer:'").concat(referer, "'----\u8BF7\u6C42\u7684IP:'").concat(ip, "'----\u8BF7\u6C42\u7684\u4E3B\u673A:'").concat(host, "'----\u8BF7\u6C42URL:'").concat(url, "'"), function (error) {
    if (error) {
      console.log('追加文件失败' + error.message);
    } else {
      new _reqlogs["default"]({
        time: time,
        origin: origin,
        ua: ua,
        host: host,
        referer: referer,
        url: url,
        ip: ip
      }).save(function (err, data) {});
    }
  });
}