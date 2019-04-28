"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _genJson2DB = require("./genJson2DB");

var _config = require("../config");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var request = require('request');

var fs = require('fs');

var path = require('path');

var G = global;

/**
 * 批量任务：爬取列表页数据转成json文件
 * @param {Object} config 
 */
function _default() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(reolve, reject) {
      var ipList, N, key, getJsonP;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              getJsonP = function _ref3(n, stc, userAgent, key, ipList) {
                var row = ipList[parseInt(Math.random() * ipList.length)];
                var ip = "".concat(row.type, "://").concat(row.host, ":").concat(row.port, "/");
                return request({
                  url: 'http://search.jiayuan.com/v2/search_v2.php',
                  method: 'POST',
                  headers: {
                    'User-Agent': userAgent
                  },
                  proxy: ip,
                  timeout: 10000,
                  // 十秒断开 列表任务用的是闭包 防止一直连接内存溢出
                  // 2:24.25  年龄24-25
                  // 28:1 高级白领
                  formData: {
                    'sex': 'f',
                    'key': '',
                    'stc': "".concat(stc, ",23:1").concat(config.education).concat(config.marriage),
                    // FIXME:
                    'sn': 'default',
                    'sv': 1,
                    'p': n,
                    'f': 'select',
                    'listStyle': 'bigPhoto',
                    'pri_uid': 0,
                    'jsversion': 'v5'
                  }
                },
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(err, res, body) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;
                            fs.writeFileSync(path.resolve(__dirname, "../../db/json/".concat(key, "/").concat(n, ".json")), unescape(body.replace(/\\u/g, '%u').replace(/##jiayser##\/\/$/g, '').replace(/\\/g, '').replace(/^##jiayser##/, '').replace(/゛/g, '').replace(//g, '').replace(//g, '').replace(/color="red"/g, '').replace(//g, '')));
                            console.log("\u5730\u533A-".concat(key, "-\u9875\u7801-").concat(n, "\u5DF2\u7ECF\u8F6C\u6210JSON\u6587\u4EF6")); // 进度事件

                            G.ListStatusRate = {
                              'text': "\u5730\u533A-".concat(key, "-\u9875\u7801-").concat(n, "\u5DF2\u7ECF\u8F6C\u6210JSON\u6587\u4EF6"),
                              'percent': n / config.endPage * 100 // 写入数据库

                            };
                            _context.next = 6;
                            return (0, _genJson2DB.pushOne)(key, n, config.endPage);

                          case 6:
                            _context.next = 11;
                            break;

                          case 8:
                            _context.prev = 8;
                            _context.t0 = _context["catch"](0);
                            // 错误事件
                            G.ListStatuspageErr = {
                              'text': "\u722C\u53D6\u5217\u8868\u9875\u7684\u65F6\u5019\u53D1\u751F\u9519\u8BEF:".concat(_context.t0) // console.log(`爬取列表页的时候发生错误:${error}`)

                            };

                          case 11:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[0, 8]]);
                  }));

                  return function (_x3, _x4, _x5) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              };

              _context2.next = 3;
              return (0, _config.getipList)();

            case 3:
              ipList = _context2.sent;
              N = 0;

              for (key in _config.stc) {
                // 根据area  进行任务分发 匹配stc
                if (config.area.includes(key)) {
                  // 判断当前地区文件夹是否创建
                  // 4:50.0,28:0 硕士
                  // 4:60.0,28:0 博士
                  // 4:40.0,28:0 双学士
                  // 4:30.0,28:0 本科
                  // 4:20.0,28:0 大专
                  // 4:10.0,28:0 高中中专及以下
                  // 6:1 未婚
                  // 6:2 离异
                  // 6:3 丧偶
                  if (!config.task) {
                    //不是定时任务的话
                    if (config.education) {
                      config.education = ",4:".concat(config.education, ".0,28:0,");
                    }

                    if (config.marriage) {
                      config.marriage = "6:".concat(config.marriage);
                    }
                  } else {
                    config.education = '';
                    config.marriage = '';
                  }

                  if (!fs.existsSync(path.resolve(__dirname, "../../db/json/".concat(key)))) {
                    fs.mkdirSync(path.resolve(__dirname, "../../db/json/".concat(key)));
                  }

                  (function (stc, key, NN) {
                    setTimeout(function () {
                      console.log("\u5730\u533A".concat(key, "\u4EFB\u52A1\u5DF2\u7ECF\u5F00\u59CB")); // 执行任务

                      var userAgent = _config.userAgents[parseInt(Math.random() * _config.userAgents.length)];

                      var n = config.startPage;
                      var t = 1000 * config.speed;
                      var timer = setInterval(function () {
                        getJsonP(n, stc, userAgent, key, ipList);
                        n++;

                        if (n === config.endPage + 1) {
                          console.log("\u5730\u533A".concat(key, "\u4EFB\u52A1\u5DF2\u7ECF\u7ED3\u675F"));
                          clearInterval(timer);
                        }
                      }, t);
                    }, NN);
                  })(_config.stc[key], key, N);

                  N = N + 1000 * config.endPage * (config.speed + 0.2); // 跑一个地区时间

                  console.log(key, N);
                }
              }

              reolve();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}