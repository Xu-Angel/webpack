"use strict";

var _config = require("../config");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var request = require('request');

var fs = require('fs');

var path = require('path');

var userAgent = _config.userAgents[parseInt(Math.random() * _config.userAgents.length)];
/**
 * 获取国外IP池,生成JSON文件
 */


module.exports = function getText() {
  return new Promise(function (resolve, reject) {
    var url = "https://raw.githubusercontent.com/fate0/proxylist/master/proxy.list";
    request({
      url: url,
      method: "GET",
      headers: {
        'User-Agent': userAgent
      }
    },
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(error, response, body) {
        var tempData, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  if (!error) {
                    tempData = unescape(body.replace(/\\/g, '').replace(/}/g, '},'));
                    tempData = tempData.substr(0, tempData.length - 1);
                    data = ('{"data":[' + tempData + ']}').replace(/,]}/, ']}');
                    fs.writeFileSync(path.resolve(__dirname, '../../db/ipPool.json'), data);
                    resolve();
                  }
                } catch (error) {
                  reject(error);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());
  });
};