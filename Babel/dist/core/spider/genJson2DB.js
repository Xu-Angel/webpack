"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genAll2DB = genAll2DB;
exports.pushOne = pushOne;

var _config = require("../config");

var _allgirls = _interopRequireDefault(require("../../model/allgirls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var path = require('path');

var fs = require('fs');

var G = global;
/**
 * 将全部文件存入数据库
 * @param {*} config 
 */

function genAll2DB() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var N = 0;

  for (var key in _config.stc) {
    // console.log(key, 'stc-:', stc[key])
    (function (key, NN) {
      setTimeout(function () {
        console.log("\u5730\u533A".concat(key, "\u4EFB\u52A1\u5DF2\u7ECF\u5F00\u59CB")); // 执行任务

        var n = 1;
        var t = 1000 * 0.3; // 0.3s 压力极限？ 3*25 docs avg: 855b * 25 * 3 ~~ 62kb/s =>

        var timer = setInterval(function () {
          pushOne(key, n);
          n++;

          if (n === 501) {
            console.log("\u5730\u533A".concat(key, "\u4EFB\u52A1\u5DF2\u7ECF\u7ED3\u675F"));
            clearInterval(timer);
          }
        }, t);
      }, NN);
    })(key, N);

    N = N + 1000 * 60 * 3; // 3mins  跑一个地区

    console.log(key, N);
  }
}
/**
 * 将单个JSON文件存入数据库
 * @param {*} area 
 * @param {*} I 
 */


function pushOne(area) {
  var I = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var endPage = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(resolve, reject) {
      var json;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              json = require(path.resolve(__dirname, "../../db/json/".concat(area, "/").concat(I, ".json")));
              _context2.next = 4;
              return json.userInfo.forEach(
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(v, i) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return new _allgirls["default"](_objectSpread({}, v, {
                            area: area,
                            createTime: new Date()
                          })).save(function (err, data) {
                            if (err) {
                              // console.log(err)
                              G.ListStatuspageErr = {
                                'text': "\u4F20\u9001\u65F6\u95F4:".concat(new Date(), "--\u6570\u636E\u5E93\u5199\u5165").concat(area, "/").concat(I, ".json\u7684\u7B2C").concat(i, "\u6761\u6570\u636E-\u65F6\u5019\u53D1\u751F\u9519\u8BEF\uFF1A").concat(err)
                              };
                            } else {
                              // 进度事件
                              G.ListStatusRate = {
                                'text': "\u4F20\u9001\u65F6\u95F4:".concat(new Date(), "--\u5730\u533A ").concat(area, " \u7B2C ").concat(I, " \u9875 \u7B2C ").concat(i, " \u6761 \u5199\u5165\u6570\u636E\u5E93\u5B8C\u6210"),
                                'percent': I / endPage * 100
                              };
                              console.log("\u5730\u533A ".concat(area, " \u7B2C ").concat(I, " \u9875 \u7B2C ").concat(i, " \u6761 \u5199\u5165\u6570\u636E\u5E93\u5B8C\u6210"));
                            }
                          });

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 4:
              // await fs.unlinkSync(path.resolve(__dirname, `../../db/json/${area}/${I}.json`))
              // console.log(`地区 ${area} 第 ${I} 页 JSON文件已删除`)
              resolve();
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              // console.log(`数据库写入${area}/${I}.json-时候发生错误：${error}`)
              // 错误事件
              G.ListStatuspageErr = {
                'text': "\u4F20\u9001\u65F6\u95F4:".concat(new Date(), "--\u6570\u636E\u5E93\u5199\u5165").concat(area, "/").concat(I, ".json-\u65F6\u5019\u53D1\u751F\u9519\u8BEF\uFF1A").concat(_context2.t0)
              };
              fs.renameSync(path.resolve(__dirname, "../../db/json/".concat(area, "/").concat(I, ".json")), path.resolve(__dirname, "../../db/json/".concat(area, "/problem_").concat(I, ".json")));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}