"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _basePrototype = _interopRequireDefault(require("./basePrototype"));

var _index = require("../core/ip/index");

var _ips = _interopRequireDefault(require("../model/ips"));

var _ippools = _interopRequireDefault(require("../model/ippools"));

var _formidable = _interopRequireDefault(require("formidable"));

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

var Ip =
/*#__PURE__*/
function (_Base) {
  _inherits(Ip, _Base);

  function Ip() {
    _classCallCheck(this, Ip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ip).call(this));
  }
  /**
   * 获取IP列表
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */


  _createClass(Ip, [{
    key: "getIpList",
    value: function () {
      var _getIpList = _asyncToGenerator(
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
                    var page, pageSize, params, key, v, total, ipList;
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
                            return _ippools["default"].estimatedDocumentCount(_objectSpread({}, params));

                          case 21:
                            total = _context.sent;
                            ipList = null;

                            if (!(total < 10)) {
                              _context.next = 29;
                              break;
                            }

                            _context.next = 26;
                            return _ippools["default"].find(_objectSpread({}, params)).sort({
                              '_id': 1
                            });

                          case 26:
                            ipList = _context.sent;
                            _context.next = 32;
                            break;

                          case 29:
                            _context.next = 31;
                            return _ippools["default"].find(_objectSpread({}, params)).skip((page - 1) * pageSize).limit(pageSize).sort({
                              '_id': 1
                            });

                          case 31:
                            ipList = _context.sent;

                          case 32:
                            res.send({
                              status: 200,
                              message: "\u83B7\u53D6\u6570\u636E\u6210\u529F",
                              data: {
                                items: ipList,
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

      function getIpList(_x, _x2, _x3) {
        return _getIpList.apply(this, arguments);
      }

      return getIpList;
    }()
    /**
     * 开启爬取IP任务
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "startSpiIp",
    value: function () {
      var _startSpiIp = _asyncToGenerator(
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
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.prev = 0;

                            if (!(req.session.role !== 2)) {
                              _context3.next = 4;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '对不起，你没有权限操作~'
                            });
                            return _context3.abrupt("return");

                          case 4:
                            (0, _index.spiIp)(fields).then(function (rs) {
                              res.send({
                                status: 100,
                                message: "\u5F00\u542F\u6210\u529F"
                              });
                            })["catch"](function (err) {
                              res.send({
                                status: 400,
                                message: "\u5F00\u542F\u5931\u8D25:".concat(err)
                              });
                            });
                            _context3.next = 10;
                            break;

                          case 7:
                            _context3.prev = 7;
                            _context3.t0 = _context3["catch"](0);
                            res.send({
                              status: 400,
                              message: "\u5F00\u542F\u5931\u8D25:".concat(_context3.t0)
                            });

                          case 10:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, null, [[0, 7]]);
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

      function startSpiIp(_x7, _x8, _x9) {
        return _startSpiIp.apply(this, arguments);
      }

      return startSpiIp;
    }()
    /**
     * 开启爬取IP池任务
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "startSpiIpPool",
    value: function () {
      var _startSpiIpPool = _asyncToGenerator(
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
                            (0, _index.getIpPool)().then(function (rs) {
                              res.send({
                                status: 100,
                                message: "\u5F00\u542F\u6210\u529F"
                              });
                            })["catch"](function (err) {
                              res.send({
                                status: 400,
                                message: "\u5F00\u542F\u5931\u8D25:".concat(err)
                              });
                            });
                            _context5.next = 10;
                            break;

                          case 7:
                            _context5.prev = 7;
                            _context5.t0 = _context5["catch"](0);
                            res.send({
                              status: 400,
                              message: "\u5F00\u542F\u5931\u8D25:".concat(_context5.t0)
                            });

                          case 10:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, null, [[0, 7]]);
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

      function startSpiIpPool(_x13, _x14, _x15) {
        return _startSpiIpPool.apply(this, arguments);
      }

      return startSpiIpPool;
    }()
    /**
     * 去重IP池
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "distinct",
    value: function () {
      var _distinct = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(req, res, next) {
        var datas, data;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _ippools["default"].find({});

              case 3:
                datas = _context7.sent;
                // 所有数据
                datas.forEach(function (V, i) {
                  datas.forEach(function (v, i) {
                    if (v['host'] === V['host'] && V['_id'] !== v['_id']) {
                      datas.splice(i, 1);

                      _ippools["default"].findOneAndDelete({
                        _id: v['_id']
                      }).exec();
                    }
                  });
                });
                _context7.next = 7;
                return _ippools["default"].find({});

              case 7:
                data = _context7.sent;
                res.send({
                  status: 100,
                  message: "\u53BB\u91CD\u6210\u529F,\u73B0\u5728\u6761\u6570:".concat(data.length)
                });
                _context7.next = 13;
                break;

              case 11:
                _context7.prev = 11;
                _context7.t0 = _context7["catch"](0);

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 11]]);
      }));

      function distinct(_x19, _x20, _x21) {
        return _distinct.apply(this, arguments);
      }

      return distinct;
    }()
    /**
     * 检查IP可用性
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "checkIp",
    value: function () {
      var _checkIp = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(req, res, next) {
        var form;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                form = new _formidable["default"].IncomingForm();
                form.parse(req,
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee8(err, fields, files) {
                    var ip;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            ip = fields.ip;

                            try {
                              (0, _index.check)(ip).then(function (rs) {
                                if (rs.code === 1) {
                                  res.send({
                                    status: 200,
                                    message: "IP\u8BF7\u6C42\u6210\u529F-\u72B6\u6001\u6709\u6548"
                                  });
                                } else {
                                  res.send({
                                    status: 100,
                                    message: "IP\u8BF7\u6C42\u8D85\u8FC7\u4E94\u79D2-\u72B6\u6001\u5DF2\u5931\u6548"
                                  });
                                }
                              })["catch"](function (er) {
                                _ips["default"].findOneAndDelete({
                                  ip: ip
                                }).exec();

                                res.send({
                                  status: 400,
                                  message: "IP\u8D85\u65F6\u5931\u6548-".concat(er, "--\u5DF2\u5220\u9664")
                                });
                              });
                            } catch (err) {
                              console.log(err);
                            }

                          case 2:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x25, _x26, _x27) {
                    return _ref4.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function checkIp(_x22, _x23, _x24) {
        return _checkIp.apply(this, arguments);
      }

      return checkIp;
    }()
  }]);

  return Ip;
}(_basePrototype["default"]);

var _default = new Ip();

exports["default"] = _default;