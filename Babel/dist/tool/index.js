"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _request = _interopRequireDefault(require("request"));

var _configLite = _interopRequireDefault(require("config-lite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 1.V 版本调用方式
var Tool = {
  /**
   * 根据UA返回来浏览器信息
   * @param {*} ua
   */
  getBrowserInfo: function getBrowserInfo(ua) {
    var Sys = {};
    ua = ua.toLowerCase();
    var re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
    var m = ua.match(re);

    if (m) {
      Sys.browser = m[1] && m[1].replace(/version/, "'safari") || '';
      Sys.ver = m[2] && m[2] || '';
      return Sys.browser + "的版本是：" + Sys.ver;
    } else {
      return '';
    }
  },

  /**
   * 判断文件夹是否存在 并创建
   * @param {*} pathStr
   */
  confirmPath: function confirmPath(pathStr) {
    if (!_fs["default"].existsSync(pathStr)) {
      _fs["default"].mkdirSync(pathStr);

      console.log("createPath: " + pathStr);
    }
  },

  /**
   * 获取外网client的IP
   * @param {request} req
   */
  getClientIp: function getClientIp(req) {
    return (req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress || '').match(/\d+.\d+.\d+.\d+/);
  },

  /**
   * 根据IP返回信息
   * @param {*} ip 
   */
  getRegion: function getRegion(ip) {
    return new Promise(function (resolve, reject) {
      (0, _request["default"])({
        url: "https://apis.map.qq.com/ws/location/v1/ip?ip=".concat(ip, "&key=").concat(_configLite["default"].ipKey)
      }, function (err, res, bo) {
        if (res) {
          var body = JSON.parse(bo);

          if (body.status === 0) {
            resolve(body);
          } else {
            resolve('');
          }
        }

        if (err) {
          resolve('');
        }
      });
    });
  }
};
var _default = Tool;
exports["default"] = _default;