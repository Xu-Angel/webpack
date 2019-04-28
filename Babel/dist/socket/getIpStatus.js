"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = socketGetIpStatus;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Ip池Socket
 */
function socketGetIpStatus(IO, G) {
  return new Promise(function (resolve, reject) {
    try {
      IO.of('/socket/start/getIp').on('connect', function (socket) {
        socket.on('start', function (data) {
          !G.IpStatusRate && !G.IpStatusIpErr && socket.emit('noTask', {
            text: "\u8BF7\u6C42\u65F6\u95F4".concat(new Date(), "---Ip\u6C60Socket---\u6682\u65E0\u4EFB\u52A1\u8FDB\u884C\u4E2D")
          });
          console.log(data);
        });
        G.IpStatusRate && setInterval(function () {
          socket.emit('rate', _objectSpread({}, G.IpStatusRate));
        }, 1000);
        G.IpStatusIpErr && setInterval(function () {
          socket.emit('ipErr', _objectSpread({}, G.IpStatusIpErr));
        }, 1000);
        socket.on('stop', function (data) {
          // 客户端提出关闭
          console.log(data);
          socket.disconnect(true);
        });
        socket.on('disconnect', function (reason) {
          // 服务端关闭
          console.log(reason);
          socket.disconnect(true);
        });
      });
    } catch (error) {
      console.log(error);
    }
  });
}