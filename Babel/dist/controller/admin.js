"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _admins = _interopRequireDefault(require("../model/admins"));

var _formidable = _interopRequireDefault(require("formidable"));

var _crypto = _interopRequireDefault(require("crypto"));

var _basePrototype = _interopRequireDefault(require("./basePrototype"));

var _configLite = _interopRequireDefault(require("config-lite"));

var _index = _interopRequireDefault(require("../tool/index"));

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

var Admin =
/*#__PURE__*/
function (_Base) {
  _inherits(Admin, _Base);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));
    _this.login = _this.login.bind(_assertThisInitialized(_this));
    _this.encryption = _this.encryption.bind(_assertThisInitialized(_this));
    _this.updateAvatar = _this.updateAvatar.bind(_assertThisInitialized(_this));
    _this.updateInfo = _this.updateInfo.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * 登录/注册接口
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */


  _createClass(Admin, [{
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res, next) {
        var _this2 = this;

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
                    var username, password, _fields$status, status, newpassword, admin, role, admin_id, newAdmin, _admin;

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
                            username = fields.username, password = fields.password, _fields$status = fields.status, status = _fields$status === void 0 ? 1 : _fields$status;
                            _context.prev = 4;

                            if (username) {
                              _context.next = 9;
                              break;
                            }

                            throw new Error('用户名参数错误');

                          case 9:
                            if (password) {
                              _context.next = 11;
                              break;
                            }

                            throw new Error('密码参数错误');

                          case 11:
                            _context.next = 17;
                            break;

                          case 13:
                            _context.prev = 13;
                            _context.t0 = _context["catch"](4);
                            // console.log(err.message, err)
                            res.send({
                              status: 400,
                              message: _context.t0.message
                            });
                            return _context.abrupt("return");

                          case 17:
                            newpassword = _this2.encryption(password);
                            _context.prev = 18;
                            _context.next = 21;
                            return _admins["default"].findOne({
                              username: username
                            });

                          case 21:
                            admin = _context.sent;

                            if (admin) {
                              _context.next = 36;
                              break;
                            }

                            role = status == 1 ? 1 : 2;
                            _context.next = 26;
                            return _this2.getId('admin_id');

                          case 26:
                            admin_id = _context.sent;
                            newAdmin = {
                              username: username,
                              password: newpassword,
                              id: admin_id,
                              role: role,
                              createTime: new Date()
                            };
                            _context.next = 30;
                            return _admins["default"].create(newAdmin);

                          case 30:
                            _admin = _context.sent;
                            req.session.admin_id = _admin.id;
                            req.session.role = role;
                            res.send({
                              status: 200,
                              message: '注册管理员成功',
                              token: _configLite["default"].token,
                              data: {
                                role: _admin.role,
                                avatar: _admin.avatar,
                                name: _admin.username,
                                createTime: _admin.createTime,
                                id: admin_id
                              }
                            });
                            _context.next = 37;
                            break;

                          case 36:
                            if (newpassword.toString() != admin.password.toString()) {
                              console.log('管理员登录密码错误');
                              res.send({
                                status: 400,
                                message: '该用户已存在，密码输入错误'
                              });
                            } else {
                              req.session.admin_id = admin.id;
                              req.session.role = admin.role;
                              res.send({
                                status: 200,
                                message: '登录成功',
                                token: _configLite["default"].token,
                                data: {
                                  role: admin.role,
                                  avatar: admin.avatar,
                                  name: admin.username
                                }
                              });
                            }

                          case 37:
                            _context.next = 42;
                            break;

                          case 39:
                            _context.prev = 39;
                            _context.t1 = _context["catch"](18);
                            res.send({
                              status: 400,
                              message: '登录管理员失败'
                            });

                          case 42:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[4, 13], [18, 39]]);
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

      function login(_x, _x2, _x3) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /**
     * 退出登录
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res, next) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                try {
                  delete req.session;
                  res.send({
                    status: 200,
                    message: '退出成功'
                  });
                } catch (err) {
                  // console.log('退出失败', err)
                  res.send({
                    status: 400,
                    message: '退出失败'
                  });
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function logout(_x7, _x8, _x9) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
    /**
     * 更新管理员头像
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "updateAvatar",
    value: function () {
      var _updateAvatar = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(req, res, next) {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.getPath(req);

              case 3:
                data = _context4.sent;

                if (data.fields.id) {
                  _context4.next = 7;
                  break;
                }

                res.send({
                  status: 400,
                  message: '缺少管理员ID'
                });
                return _context4.abrupt("return");

              case 7:
                _context4.next = 9;
                return _admins["default"].findOneAndUpdate({
                  id: data.fields.id
                }, {
                  $set: {
                    avatar: data.fullName
                  }
                });

              case 9:
                res.send({
                  status: 200,
                  message: '更新头像成功',
                  avatar: data.fullName
                });
                _context4.next = 16;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);
                // console.log('上传图片失败', err)
                res.send({
                  status: 400,
                  message: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25".concat(_context4.t0)
                });
                return _context4.abrupt("return");

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 12]]);
      }));

      function updateAvatar(_x10, _x11, _x12) {
        return _updateAvatar.apply(this, arguments);
      }

      return updateAvatar;
    }()
    /**
     * 更新管理员头像以外信息
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "updateInfo",
    value: function () {
      var _updateInfo = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(req, res, next) {
        var _this3 = this;

        var form;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                try {
                  form = new _formidable["default"].IncomingForm();
                  form.parse(req,
                  /*#__PURE__*/
                  function () {
                    var _ref2 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee5(err, fields, files) {
                      var oldPass, newPass, name, id, admin, oldpassword;
                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              oldPass = fields.oldPass, newPass = fields.newPass, name = fields.name, id = fields.id;
                              _context5.next = 3;
                              return _admins["default"].findOne({
                                id: id
                              });

                            case 3:
                              admin = _context5.sent;
                              // console.log(admin)
                              oldpassword = _this3.encryption(oldPass);

                              if (!(oldpassword.toString() != admin.password.toString())) {
                                _context5.next = 8;
                                break;
                              }

                              res.send({
                                status: 100,
                                message: '旧密码错误~'
                              });
                              return _context5.abrupt("return");

                            case 8:
                              _context5.next = 10;
                              return _admins["default"].findOneAndUpdate({
                                id: id
                              }, {
                                $set: {
                                  password: _this3.encryption(newPass),
                                  username: name
                                }
                              });

                            case 10:
                              res.send({
                                status: 200,
                                message: '更新信息成功~'
                              });

                            case 11:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }));

                    return function (_x16, _x17, _x18) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                } catch (error) {
                  res.send({
                    status: 400,
                    message: "\u53D1\u751F\u9519\u8BEF~".concat(error)
                  });
                }

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function updateInfo(_x13, _x14, _x15) {
        return _updateInfo.apply(this, arguments);
      }

      return updateInfo;
    }()
    /**
     * 获取管理员列表数据
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "getList",
    value: function () {
      var _getList = _asyncToGenerator(
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
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee7(err, fields, files) {
                    var page, pageSize, params, key, v, total, admin, items;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            if (!err) {
                              _context7.next = 3;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '表单信息错误'
                            });
                            return _context7.abrupt("return");

                          case 3:
                            page = fields.page, pageSize = fields.pageSize, params = _objectWithoutProperties(fields, ["page", "pageSize"]);

                            for (key in params) {
                              v = params[key];

                              if (v === '' || v === undefined || v === 'undefind') {
                                delete params[key];
                              }
                            }

                            _context7.prev = 5;

                            if (page) {
                              _context7.next = 10;
                              break;
                            }

                            throw new Error('页码参数错误');

                          case 10:
                            if (pageSize) {
                              _context7.next = 12;
                              break;
                            }

                            throw new Error('分页大小参数错误');

                          case 12:
                            _context7.next = 18;
                            break;

                          case 14:
                            _context7.prev = 14;
                            _context7.t0 = _context7["catch"](5);
                            res.send({
                              status: 400,
                              message: _context7.t0.message
                            });
                            return _context7.abrupt("return");

                          case 18:
                            _context7.prev = 18;
                            _context7.next = 21;
                            return _admins["default"].estimatedDocumentCount(_objectSpread({}, params));

                          case 21:
                            total = _context7.sent;
                            admin = null;

                            if (!(total < 10)) {
                              _context7.next = 29;
                              break;
                            }

                            _context7.next = 26;
                            return _admins["default"].find(_objectSpread({}, params)).sort({
                              'id': -1
                            });

                          case 26:
                            admin = _context7.sent;
                            _context7.next = 32;
                            break;

                          case 29:
                            _context7.next = 31;
                            return _admins["default"].find(_objectSpread({}, params)).skip((page - 1) * pageSize).limit(pageSize).sort({
                              'id': -1
                            });

                          case 31:
                            admin = _context7.sent;

                          case 32:
                            items = [];
                            admin.forEach(function (v) {
                              items.push({
                                role: v.role === 1 ? '普通管理员' : '超级管理员',
                                username: v.username,
                                avatar: v.avatar,
                                id: v.id,
                                createTime: v.createTime
                              });
                            });
                            res.send({
                              status: 200,
                              message: "\u83B7\u53D6\u6570\u636E\u6210\u529F",
                              data: {
                                items: items,
                                total: total
                              }
                            });
                            _context7.next = 40;
                            break;

                          case 37:
                            _context7.prev = 37;
                            _context7.t1 = _context7["catch"](18);
                            res.send({
                              status: 400,
                              message: "\u67E5\u8BE2\u5931\u8D25,\u5931\u8D25\u539F\u56E0:".concat(_context7.t1)
                            });

                          case 40:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7, null, [[5, 14], [18, 37]]);
                  }));

                  return function (_x22, _x23, _x24) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getList(_x19, _x20, _x21) {
        return _getList.apply(this, arguments);
      }

      return getList;
    }()
    /**
     * 获取管理员信息
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "getAdminInfo",
    value: function () {
      var _getAdminInfo = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(req, res, next) {
        var admin_id, info, region;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                admin_id = req.session.admin_id;

                if (!(!admin_id || !Number(admin_id))) {
                  _context9.next = 4;
                  break;
                }

                // console.log('获取管理员信息的session失效')
                res.send({
                  status: 400,
                  type: 'ERROR_SESSION',
                  message: '获取管理员信息失败'
                });
                return _context9.abrupt("return");

              case 4:
                _context9.prev = 4;
                _context9.next = 7;
                return _admins["default"].findOne({
                  id: admin_id
                }, '-_id -__v -password');

              case 7:
                info = _context9.sent;

                if (info) {
                  _context9.next = 12;
                  break;
                }

                throw new Error('未找到当前管理员');

              case 12:
                _context9.next = 14;
                return _index["default"].getRegion(_index["default"].getClientIp(req));

              case 14:
                _context9.t0 = _context9.sent;

                if (_context9.t0) {
                  _context9.next = 17;
                  break;
                }

                _context9.t0 = '';

              case 17:
                region = _context9.t0;
                res.send({
                  status: 200,
                  data: info,
                  region: region && region.result.ad_info || ''
                });

              case 19:
                _context9.next = 24;
                break;

              case 21:
                _context9.prev = 21;
                _context9.t1 = _context9["catch"](4);
                // console.log(err, 'in');
                // console.log('获取管理员信息失败');
                res.send({
                  status: 0,
                  type: 'GET_ADMIN_INFO_FAILED',
                  message: '获取管理员信息失败'
                });

              case 24:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[4, 21]]);
      }));

      function getAdminInfo(_x25, _x26, _x27) {
        return _getAdminInfo.apply(this, arguments);
      }

      return getAdminInfo;
    }()
  }, {
    key: "delAdmin",
    value: function () {
      var _delAdmin = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(req, res, next) {
        var form;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                form = new _formidable["default"].IncomingForm();
                form.parse(req,
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee10(err, fields, files) {
                    var username, user;
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            if (!(req.session.role !== 2)) {
                              _context10.next = 3;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '对不起，你没有权限操作~'
                            });
                            return _context10.abrupt("return");

                          case 3:
                            _context10.prev = 3;
                            username = fields.username;
                            _context10.next = 7;
                            return _admins["default"].find({
                              username: username
                            });

                          case 7:
                            user = _context10.sent;

                            if (!(user[0].role === 2)) {
                              _context10.next = 11;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '对不起，超级管理员不能删除~'
                            });
                            return _context10.abrupt("return");

                          case 11:
                            _context10.next = 13;
                            return _admins["default"].findOneAndDelete({
                              username: username
                            });

                          case 13:
                            res.send({
                              status: 200,
                              message: '删除成功~'
                            });
                            _context10.next = 19;
                            break;

                          case 16:
                            _context10.prev = 16;
                            _context10.t0 = _context10["catch"](3);
                            res.send({
                              status: 400,
                              message: "\u64CD\u4F5C\u5931\u8D25\uFF1A".concat(_context10.t0, "~")
                            });

                          case 19:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10, null, [[3, 16]]);
                  }));

                  return function (_x31, _x32, _x33) {
                    return _ref4.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function delAdmin(_x28, _x29, _x30) {
        return _delAdmin.apply(this, arguments);
      }

      return delAdmin;
    }()
  }, {
    key: "encryption",
    value: function encryption(password) {
      var newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
      return newpassword;
    }
  }, {
    key: "Md5",
    value: function Md5(password) {
      var md5 = _crypto["default"].createHash('md5');

      return md5.update(password).digest('base64');
    }
  }]);

  return Admin;
}(_basePrototype["default"]);

var _default = new Admin();

exports["default"] = _default;