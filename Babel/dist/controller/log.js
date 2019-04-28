"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _basePrototype = _interopRequireDefault(require("./basePrototype"));

var _formidable = _interopRequireDefault(require("formidable"));

var _reqlogs = _interopRequireDefault(require("../model/reqlogs"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Log =
/*#__PURE__*/
function (_Base) {
  _inherits(Log, _Base);

  function Log() {
    _classCallCheck(this, Log);

    return _possibleConstructorReturn(this, _getPrototypeOf(Log).call(this));
  }

  _createClass(Log, [{
    key: "getVisit",
    value: function () {
      var _getVisit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res, next) {
        var form;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                form = new _formidable["default"].IncomingForm();
                form.parse(req,
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(err, fields, files) {
                    var page, pageSize, params, key, v, total, items;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;
                            page = fields.page, pageSize = fields.pageSize, params = _objectWithoutProperties(fields, ["page", "pageSize"]);

                            for (key in params) {
                              v = params[key];

                              if (v === '' || v === undefined || v === 'undefind') {
                                delete params[key];
                              }
                            }

                            _context.prev = 3;

                            if (page) {
                              _context.next = 8;
                              break;
                            }

                            throw new Error('页码参数错误');

                          case 8:
                            if (pageSize) {
                              _context.next = 10;
                              break;
                            }

                            throw new Error('分页大小参数错误');

                          case 10:
                            _context.next = 16;
                            break;

                          case 12:
                            _context.prev = 12;
                            _context.t0 = _context["catch"](3);
                            res.send({
                              status: 400,
                              message: _context.t0.message
                            });
                            return _context.abrupt("return");

                          case 16:
                            _context.next = 18;
                            return _reqlogs["default"].estimatedDocumentCount(_objectSpread({}, params));

                          case 18:
                            total = _context.sent;
                            items = null;

                            if (!(total < 10)) {
                              _context.next = 26;
                              break;
                            }

                            _context.next = 23;
                            return _reqlogs["default"].find(_objectSpread({}, params)).sort({
                              "_id": -1
                            });

                          case 23:
                            items = _context.sent;
                            _context.next = 29;
                            break;

                          case 26:
                            _context.next = 28;
                            return _reqlogs["default"].find(_objectSpread({}, params)).skip((page - 1) * pageSize).limit(pageSize).sort({
                              "_id": -1
                            });

                          case 28:
                            items = _context.sent;

                          case 29:
                            res.send({
                              status: 200,
                              data: {
                                items: items,
                                total: total
                              }
                            });
                            _context.next = 35;
                            break;

                          case 32:
                            _context.prev = 32;
                            _context.t1 = _context["catch"](0);
                            res.send({
                              status: 400,
                              message: "\u83B7\u53D6\u5931\u8D25,\u5931\u8D25\u539F\u56E0:".concat(err)
                            });

                          case 35:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[0, 32], [3, 12]]);
                  }));

                  return function (_x4, _x5, _x6) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getVisit(_x, _x2, _x3) {
        return _getVisit.apply(this, arguments);
      }

      return getVisit;
    }()
  }, {
    key: "delReq",
    value: function () {
      var _delReq = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(req, res, next) {
        var form;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                form = new _formidable["default"].IncomingForm();
                form.parse(req,
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee3(err, fields, files) {
                    var _id;

                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _id = fields._id;

                            _reqlogs["default"].findOneAndDelete({
                              _id: _id
                            }).exec();

                            res.send({
                              status: 200,
                              message: "\u5220\u9664\u6210\u529F~"
                            });

                          case 3:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x10, _x11, _x12) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function delReq(_x7, _x8, _x9) {
        return _delReq.apply(this, arguments);
      }

      return delReq;
    }()
  }, {
    key: "delFile",
    value: function () {
      var _delFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(req, res, next) {
        var form;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                form = new _formidable["default"].IncomingForm();
                form.parse(req,
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee5(err, fields, files) {
                    var file, type;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.prev = 0;

                            if (!(req.session.role !== 2)) {
                              _context5.next = 4;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '对不起，你没有权限操作~'
                            });
                            return _context5.abrupt("return");

                          case 4:
                            file = fields.file, type = fields.type;

                            _fs["default"].unlinkSync(_path["default"].resolve(__dirname, "../logs/".concat(type, "/").concat(file)));

                            res.send({
                              status: 200,
                              message: "\u5220\u9664\u6210\u529F~"
                            });
                            _context5.next = 12;
                            break;

                          case 9:
                            _context5.prev = 9;
                            _context5.t0 = _context5["catch"](0);
                            res.send({
                              status: 400,
                              message: _context5.t0
                            });

                          case 12:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, null, [[0, 9]]);
                  }));

                  return function (_x16, _x17, _x18) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function delFile(_x13, _x14, _x15) {
        return _delFile.apply(this, arguments);
      }

      return delFile;
    }()
  }, {
    key: "getFile",
    value: function () {
      var _getFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(req, res, next) {
        var form;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                form = new _formidable["default"].IncomingForm();
                form.parse(req,
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee7(err, fields, files) {
                    var page, pageSize, type, dir, arr, send, total;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.prev = 0;
                            // 查询log4的文件名返回
                            // type: error,response,pm2,req,
                            page = fields.page, pageSize = fields.pageSize, type = fields.type;
                            _context7.prev = 2;

                            if (page) {
                              _context7.next = 7;
                              break;
                            }

                            throw new Error('页码参数错误');

                          case 7:
                            if (pageSize) {
                              _context7.next = 9;
                              break;
                            }

                            throw new Error('分页大小参数错误');

                          case 9:
                            _context7.next = 15;
                            break;

                          case 11:
                            _context7.prev = 11;
                            _context7.t0 = _context7["catch"](2);
                            res.send({
                              status: 400,
                              message: _context7.t0.message
                            });
                            return _context7.abrupt("return");

                          case 15:
                            dir = _fs["default"].readdirSync(_path["default"].resolve(__dirname, "../logs/".concat(type)));
                            arr = [];
                            dir.forEach(function (v) {
                              if (_fs["default"].statSync(_path["default"].resolve(__dirname, "../logs/".concat(type, "/").concat(v))).size > 0) {
                                arr.push({
                                  file: v,
                                  type: type
                                });
                              }
                            });
                            send = null;
                            total = arr.length;

                            if (page === 1) {
                              send = arr.slice(0, pageSize);
                            } else {
                              send = arr.slice((page - 1) * pageSize, page * pageSize);
                            }

                            res.send({
                              status: 200,
                              data: {
                                items: send,
                                total: total
                              },
                              message: "\u83B7\u53D6\u6210\u529F~"
                            });
                            _context7.next = 27;
                            break;

                          case 24:
                            _context7.prev = 24;
                            _context7.t1 = _context7["catch"](0);
                            res.send({
                              status: 400,
                              message: _context7.t1
                            });

                          case 27:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7, null, [[0, 24], [2, 11]]);
                  }));

                  return function (_x22, _x23, _x24) {
                    return _ref4.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getFile(_x19, _x20, _x21) {
        return _getFile.apply(this, arguments);
      }

      return getFile;
    }()
  }]);

  return Log;
}(_basePrototype["default"]);

var _default = new Log();

exports["default"] = _default;