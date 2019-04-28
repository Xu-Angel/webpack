"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _allgirls = _interopRequireDefault(require("../model/allgirls"));

var _details = _interopRequireDefault(require("../model/details"));

var _formidable = _interopRequireDefault(require("formidable"));

var _basePrototype = _interopRequireDefault(require("./basePrototype"));

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Girl =
/*#__PURE__*/
function (_Base) {
  _inherits(Girl, _Base);

  function Girl() {
    var _this;

    _classCallCheck(this, Girl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Girl).call(this));
    _this.getList = _this.getList.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * 获取女性列表数据
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */


  _createClass(Girl, [{
    key: "getList",
    value: function () {
      var _getList = _asyncToGenerator(
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
                    var page, pageSize, params, key, v, total, girl;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!err) {
                              _context.next = 3;
                              break;
                            }

                            res.send({
                              status: 100,
                              type: 'FORM_DATA_ERROR',
                              message: '表单信息错误'
                            });
                            return _context.abrupt("return");

                          case 3:
                            page = fields.page, pageSize = fields.pageSize, params = _objectWithoutProperties(fields, ["page", "pageSize"]);

                            for (key in params) {
                              v = params[key];

                              if (v === '' || v === undefined || v === 'undefind') {
                                delete params[key];
                              }
                            }

                            _context.prev = 5;

                            if (page) {
                              _context.next = 10;
                              break;
                            }

                            throw new Error('页码参数错误');

                          case 10:
                            if (pageSize) {
                              _context.next = 12;
                              break;
                            }

                            throw new Error('分页大小参数错误');

                          case 12:
                            _context.next = 18;
                            break;

                          case 14:
                            _context.prev = 14;
                            _context.t0 = _context["catch"](5);
                            res.send({
                              status: 400,
                              type: 'GET_ERROR_PARAM',
                              message: _context.t0.message
                            });
                            return _context.abrupt("return");

                          case 18:
                            _context.prev = 18;
                            _context.next = 21;
                            return _allgirls["default"].countDocuments(_objectSpread({}, params));

                          case 21:
                            total = _context.sent;
                            girl = null;

                            if (!(total < 10)) {
                              _context.next = 29;
                              break;
                            }

                            _context.next = 26;
                            return _allgirls["default"].find(_objectSpread({}, params)).sort({
                              'top': -1
                            });

                          case 26:
                            girl = _context.sent;
                            _context.next = 32;
                            break;

                          case 29:
                            _context.next = 31;
                            return _allgirls["default"].find(_objectSpread({}, params)).skip((page - 1) * pageSize).limit(pageSize).sort({
                              'top': -1
                            });

                          case 31:
                            girl = _context.sent;

                          case 32:
                            res.send({
                              status: 200,
                              message: "\u83B7\u53D6\u6570\u636E\u6210\u529F",
                              data: {
                                items: girl,
                                total: total
                              }
                            });
                            _context.next = 38;
                            break;

                          case 35:
                            _context.prev = 35;
                            _context.t1 = _context["catch"](18);
                            res.send({
                              status: 400,
                              message: "\u67E5\u8BE2\u5931\u8D25,\u5931\u8D25\u539F\u56E0:".concat(_context.t1)
                            });

                          case 38:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[5, 14], [18, 35]]);
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

      function getList(_x, _x2, _x3) {
        return _getList.apply(this, arguments);
      }

      return getList;
    }()
    /**
     * 获取女性详情
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "getDetail",
    value: function () {
      var _getDetail = _asyncToGenerator(
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
                    var uid, girl;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!err) {
                              _context3.next = 3;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '表单信息错误'
                            });
                            return _context3.abrupt("return");

                          case 3:
                            uid = fields.uid;
                            _context3.prev = 4;

                            if (uid) {
                              _context3.next = 7;
                              break;
                            }

                            throw new Error('参数错误');

                          case 7:
                            _context3.next = 13;
                            break;

                          case 9:
                            _context3.prev = 9;
                            _context3.t0 = _context3["catch"](4);
                            res.send({
                              status: 400,
                              message: _context3.t0.message
                            });
                            return _context3.abrupt("return");

                          case 13:
                            _context3.prev = 13;
                            _context3.next = 16;
                            return _details["default"].findOne({
                              realUid: uid
                            });

                          case 16:
                            girl = _context3.sent;
                            res.send({
                              status: 200,
                              data: {
                                detail: girl
                              }
                            });
                            _context3.next = 23;
                            break;

                          case 20:
                            _context3.prev = 20;
                            _context3.t1 = _context3["catch"](13);
                            res.send({
                              status: 400,
                              message: "\u67E5\u8BE2\u5931\u8D25,\u5931\u8D25\u539F\u56E0:".concat(_context3.t1)
                            });

                          case 23:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, null, [[4, 9], [13, 20]]);
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

      function getDetail(_x7, _x8, _x9) {
        return _getDetail.apply(this, arguments);
      }

      return getDetail;
    }()
    /**
     * 更新女性权重值
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "updateTop",
    value: function () {
      var _updateTop = _asyncToGenerator(
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
                    var realUid, type, setp;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!err) {
                              _context5.next = 3;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '表单信息错误'
                            });
                            return _context5.abrupt("return");

                          case 3:
                            realUid = fields.realUid, type = fields.type;
                            _context5.prev = 4;

                            if (realUid) {
                              _context5.next = 7;
                              break;
                            }

                            throw new Error('参数错误');

                          case 7:
                            _context5.next = 13;
                            break;

                          case 9:
                            _context5.prev = 9;
                            _context5.t0 = _context5["catch"](4);
                            res.send({
                              status: 400,
                              message: _context5.t0.message
                            });
                            return _context5.abrupt("return");

                          case 13:
                            _context5.prev = 13;
                            setp = type ? 10 : -10;
                            _context5.next = 17;
                            return _allgirls["default"].findOneAndUpdate({
                              realUid: realUid
                            }, {
                              $inc: {
                                top: setp
                              }
                            }).exec();

                          case 17:
                            res.send({
                              status: 200,
                              message: '操作成功'
                            });
                            _context5.next = 23;
                            break;

                          case 20:
                            _context5.prev = 20;
                            _context5.t1 = _context5["catch"](13);
                            res.send({
                              status: 400,
                              message: "\u589E\u52A0\u5931\u8D25,\u5931\u8D25\u539F\u56E0:".concat(_context5.t1)
                            });

                          case 23:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, null, [[4, 9], [13, 20]]);
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

      function updateTop(_x13, _x14, _x15) {
        return _updateTop.apply(this, arguments);
      }

      return updateTop;
    }()
  }]);

  return Girl;
}(_basePrototype["default"]);

var _default = new Girl();

exports["default"] = _default;