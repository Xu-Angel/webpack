"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spiIp = spiIp;
exports.getIpPool = getIpPool;
exports.check = check;
exports.checkIpPool = checkIpPool;

var _ips = _interopRequireDefault(require("../../model/ips"));

var _ippools = _interopRequireDefault(require("../../model/ippools"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var async = require('async');

var getXici = require('./getproxy');

var getText = require('./getIpPool');

var request = require('request');

var path = require('path');

var G = global;
/**
 * 爬取西刺代理的IP v1.0版本
 * @param {Object} config 
 */

function spiIp(config) {
  return new Promise(function (resolve, reject) {
    var pageArr = [];

    for (var i = config.start; i < config.end + 1; i++) {
      pageArr.push(i);
    }

    async.mapLimit(pageArr, 2, function (pageNum, cb) {
      getXici(pageNum).then(function (rs) {
        _ips["default"].insertMany(rs).then(function (err, data) {
          cb(null, '');
        });
      })["catch"](function (err) {
        reject(err);
      });
    }, function (err, rs) {
      console.log(rs, '所有任务完成');
    });
    resolve();
  });
}
/**
 * 爬取代理池IP入库
 */


function getIpPool() {
  return _getIpPool.apply(this, arguments);
}

function _getIpPool() {
  _getIpPool = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(resolve, reject) {
                var json, data, numArr, len, i;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return getText();

                      case 3:
                        json = require(path.resolve(__dirname, "../../db/ipPool.json"));
                        data = json.data;
                        numArr = [];
                        len = data.length;

                        for (i = 0; i < len; i++) {
                          numArr.push(i);
                        }

                        async.mapLimit(numArr, 50, function (num, cb) {
                          var tempData = data[num];
                          var ip = tempData['type'] + '://' + tempData['host'] + ':' + tempData['port'] + '/'; // 入库筛选 检测当前IP有效性

                          check(ip).then(
                          /*#__PURE__*/
                          function () {
                            var _ref2 = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee(rs) {
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      if (!(rs.code === 1)) {
                                        _context.next = 5;
                                        break;
                                      }

                                      _context.next = 3;
                                      return new _ippools["default"](_objectSpread({}, tempData, {
                                        createTime: new Date()
                                      })).save(function (err, data) {
                                        if (err) {
                                          G.IpStatusIpErr = {
                                            'text': "\u5165\u5E93\u7684\u65F6\u5019\u53D1\u751F\u9519\u8BEF:".concat(err)
                                          };
                                        } else {
                                          G.IpStatusRate = {
                                            'text': "\u7B2C".concat(num, "\u6761IP-").concat(ip, "\u6210\u529F\u5165\u5E93"),
                                            'percent': num / len * 100
                                          };
                                        }
                                      });

                                    case 3:
                                      _context.next = 6;
                                      break;

                                    case 5:
                                      if (rs.code === 2) {
                                        // IP 无效
                                        G.IpStatusIpErr = {
                                          'text': "\u65E0\u6548IP".concat(rs.ip, "\uFF0C\u5DF2\u8FC7\u6EE4")
                                        };
                                      }

                                    case 6:
                                      cb(null, '-');

                                    case 7:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            }));

                            return function (_x3) {
                              return _ref2.apply(this, arguments);
                            };
                          }())["catch"](function (err) {
                            cb(null, '|');
                            G.IpStatusIpErr = {
                              'text': "requrest\u9519\u8BEF".concat(err.error, "\uFF0C\u5DF2\u8FC7\u6EE4")
                            };
                          });
                        }, function (err, rs) {
                          console.log('IP入库任务完成');
                        });
                        _context2.next = 14;
                        break;

                      case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2["catch"](0);
                        console.log(_context2.t0);

                      case 14:
                        resolve();

                      case 15:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[0, 11]]);
              }));

              return function (_x, _x2) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getIpPool.apply(this, arguments);
}

function check(ip) {
  return new Promise(function (resolve, reject) {
    //尝试请求百度的静态资源公共库中的jquery文件
    var url = "http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js";

    try {
      request({
        url: url,
        proxy: ip,
        method: 'GET',
        timeout: 5000 //5s没有返回则视为代理不行

      }, function (error, response, body) {
        if (error) {
          reject({
            code: 3,
            error: error
          });
        }

        if (!error) {
          if (response.statusCode == 200) {
            resolve({
              code: 1
            });
          } else {
            resolve(0);
          }
        }
      });
    } catch (error) {
      resolve({
        code: 2,
        ip: ip
      });
    }
  });
}
/**
 * 代理池全局检查
 */


function checkIpPool() {
  return _checkIpPool.apply(this, arguments);
}

function _checkIpPool() {
  _checkIpPool = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var ips, numArr, len, i;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _ippools["default"].find({});

          case 2:
            ips = _context5.sent;
            numArr = [];
            len = ips.length;

            for (i = 0; i < len; i++) {
              numArr.push(i);
            }

            async.mapLimit(numArr, 50, function (num, cb) {
              var tempData = ips[num];
              var ip = tempData['type'] + '://' + tempData['host'] + ':' + tempData['port'] + '/';
              var _id = tempData['_id'];
              check(ip).then(
              /*#__PURE__*/
              function () {
                var _ref3 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(rs) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (rs.code === 2 || rs === 0) {
                            _ippools["default"].deleteOne({
                              _id: _id
                            }).exec();
                          }

                          cb(null, ip);

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x4) {
                  return _ref3.apply(this, arguments);
                };
              }())["catch"](function (err) {
                _ippools["default"].deleteOne({
                  _id: _id
                }).exec();

                cb(null, ip);
              });
            }, function (err, rs) {
              console.log('代理池检查完成');
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _checkIpPool.apply(this, arguments);
}