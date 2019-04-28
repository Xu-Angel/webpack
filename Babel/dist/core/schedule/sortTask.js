"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTop = setTop;

var _allgirls = _interopRequireDefault(require("../../model/allgirls"));

var _details = _interopRequireDefault(require("../../model/details"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var async = require('async');
/*
权重计算 top:
+0 -> +5
age: 18-25 25-30 30-35 35-   // 有五分
shortnote: 20字
详细页的照片 每一张 + 2
*/


var m = ['丧偶', '离异', '未婚'];
/**
 * way1-main:兼容 V1.1.0以及之前的数据，以前没做权重
 * 给每条数据进行权重计算
*/

function setTop() {
  return _setTop.apply(this, arguments);
}

function _setTop() {
  _setTop = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var numArr, len, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            numArr = [];
            _context2.next = 3;
            return _allgirls["default"].count({
              top: 0
            });

          case 3:
            len = _context2.sent;

            // 直接根据个数 做查找 减少服务器消耗 
            for (i = 0; i < len; i++) {
              numArr.push(i);
            }

            async.mapLimit(numArr, 1,
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(num, cb) {
                var girl, realUid, top, detail;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _allgirls["default"].findOne({
                          top: 0
                        });

                      case 2:
                        girl = _context.sent;
                        realUid = girl['realUid'];
                        top = 0;
                        top += m.findIndex(function (e) {
                          return e === girl['marriage'];
                        }) * 5; // 婚姻

                        top += parseInt(10 / girl['age'] * 50); // 年龄

                        if (girl['shortnote'] > 20) top += 5; //简介大于20字符长度 +5分

                        if (!girl.status) {
                          _context.next = 13;
                          break;
                        }

                        _context.next = 11;
                        return _details["default"].find({
                          realUid: realUid
                        });

                      case 11:
                        detail = _context.sent;
                        top += detail[0]['照片']['small'].length * 5; // 一张照片 +5分

                      case 13:
                        _context.next = 15;
                        return _allgirls["default"].findOneAndUpdate({
                          realUid: realUid
                        }, {
                          $set: {
                            top: top
                          }
                        }).exec();

                      case 15:
                        console.log("\u672C\u6761\u6743\u91CD\u6570\u636E\u5B8C\u6210\uFF1A".concat(realUid, ", ").concat((0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss')));
                        cb(null, realUid);

                      case 17:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x, _x2) {
                return _ref.apply(this, arguments);
              };
            }(), function (err, rs) {
              console.log("\u6743\u91CD\u8BBE\u7F6E\u5B8C\u6210:".concat((0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss')));
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _setTop.apply(this, arguments);
}