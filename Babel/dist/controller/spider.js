"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _details = _interopRequireDefault(require("../model/details"));

var _spider = _interopRequireDefault(require("../model/spider"));

var _basePrototype = _interopRequireDefault(require("./basePrototype"));

var _uids = _interopRequireDefault(require("../model/uids"));

var _allgirls = _interopRequireDefault(require("../model/allgirls"));

var _formidable = _interopRequireDefault(require("formidable"));

var _getList2Json = _interopRequireDefault(require("../core/spider/getList2Json"));

var _getdetail = _interopRequireDefault(require("../core/spider/getdetail"));

var _async = _interopRequireDefault(require("async"));

var _config = require("../core/config");

var _sortTask = require("../core/schedule/sortTask");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var G = global;

var Spider =
/*#__PURE__*/
function (_Base) {
  _inherits(Spider, _Base);

  function Spider() {
    var _this;

    _classCallCheck(this, Spider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spider).call(this));
    _this.spiDetailByRealUid = _this.spiDetailByRealUid.bind(_assertThisInitialized(_this)); // 继承方法 绑定

    _this.distinctGirl = _this.distinctGirl.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * 获取爬取的配置
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */


  _createClass(Spider, [{
    key: "getSipderConfig",
    value: function () {
      var _getSipderConfig = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var config, area, key;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _spider["default"].find({});

              case 3:
                config = _context.sent;
                area = [];

                for (key in config[0]['area']) {
                  area.push(key);
                }

                res.send({
                  status: 200,
                  data: {
                    area: area,
                    cookie: config[0]['cookie'],
                    age: config[0]['age'],
                    height: config[0]['height'],
                    education: config[0]['education'],
                    marriage: config[0]['marriage']
                  }
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                res.send({
                  status: 400,
                  message: "\u83B7\u53D6\u5931\u8D25,\u5931\u8D25\u539F\u56E0:".concat(err)
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function getSipderConfig(_x, _x2, _x3) {
        return _getSipderConfig.apply(this, arguments);
      }

      return getSipderConfig;
    }()
    /**
     * 根据UID爬取详情数据
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "spiDetailByRealUid",
    value: function () {
      var _spiDetailByRealUid = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(req, res, next) {
        var _this2 = this;

        var form;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                form = new _formidable["default"].IncomingForm();
                form.parse(req,
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee4(err, fields, files) {
                    var cookie, Cur, realUidArr, finUidArr, realUids, remainLength, Length, ipList;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            if (!(req.session.role !== 2)) {
                              _context4.next = 3;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '对不起，你没有权限操作~'
                            });
                            return _context4.abrupt("return");

                          case 3:
                            cookie = fields.cookie;
                            _context4.prev = 4;
                            Cur = new Date().getTime(); //V1.1.0使用总表

                            _context4.next = 8;
                            return _allgirls["default"].distinct('realUid');

                          case 8:
                            realUidArr = _context4.sent;
                            _context4.next = 11;
                            return _details["default"].distinct('realUid');

                          case 11:
                            finUidArr = _context4.sent;
                            realUids = null;

                            if (finUidArr.length > 0) {
                              realUids = _this2.difference(realUidArr, finUidArr);
                            } else {
                              realUids = realUidArr;
                            }

                            remainLength = realUids.length;
                            Length = realUidArr.length;
                            res.send({
                              status: 200,
                              message: "\u722C\u53D6\u8BE6\u7EC6\u9875\u4EFB\u52A1\u5DF2\u5F00\u59CB",
                              data: "\u67E5\u8BE2\u8017\u65F6\uFF1A".concat((new Date().getTime() - Cur) / 1000, ",\u5269\u4F59\u722C\u53D6\u6570\u4E3A").concat(remainLength)
                            });
                            _context4.next = 19;
                            return (0, _config.getipList)();

                          case 19:
                            ipList = _context4.sent;
                            _context4.next = 22;
                            return _spider["default"].findOneAndUpdate({}, {
                              $set: {
                                cookie: cookie
                              }
                            });

                          case 22:
                            // 记录任务开始
                            _async["default"].mapLimit(realUids, 100,
                            /*#__PURE__*/
                            function () {
                              var _ref2 = _asyncToGenerator(
                              /*#__PURE__*/
                              regeneratorRuntime.mark(function _callee2(realUid, cb) {
                                var row, ip, cur;
                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                  while (1) {
                                    switch (_context2.prev = _context2.next) {
                                      case 0:
                                        //way-1 详细任务开始 直接拿一波已有IP进行随机  每次请求都随机一个代理IP
                                        row = ipList[parseInt(Math.random() * ipList.length)];
                                        ip = "".concat(row.type, "://").concat(row.host, ":").concat(row.port, "/");
                                        cur = new Date().getTime();
                                        (0, _getdetail["default"])(realUid, cookie, ip).then(function (rs) {
                                          // 判断当前用户是否是空资料(未审核通过||关闭||隐藏)
                                          if (rs['学历'] === '' && rs['身高'] === '') {
                                            remainLength--; // 异常UID事件

                                            G.DetailStatusUidErr = {
                                              'text': "\u5F02\u5E38-realUid:".concat(realUid, ",\u82B1\u8D39\u65F6\u95F4:").concat((new Date().getTime() - cur) / 1000, "seconds,\u5269\u4F59realUid\u6570\u91CF\uFF1A").concat(remainLength),
                                              'percent': (Length - remainLength) / Length * 100 // console.log(`异常-realUid:${realUid},花费时间:${(new Date().getTime() - cur) / 1000}seconds,剩余realUid数量：${remainLength}`)

                                            };
                                            cb(null, realUid); // 结束本次函数 抛出本次异常realUid
                                          } else {
                                            // 判断当前的数据有没有薪资 如果没有，说明cookie过期 需要重新拿TODO:停止爬取任务 发送邮件更新cookie
                                            if (rs['经济实力']['月薪'] === '登录后可见' || rs['经济实力']['购车'] === '登录后可见') {
                                              //cookie错误事件
                                              G.DetailStatusCookieErr = {
                                                'text': "\u4F20\u9001\u65F6\u95F4:".concat(new Date(), "--\u8BF7\u66F4\u65B0cookie\u4EE5\u722C\u53D6\u79C1\u5BC6\u4FE1\u606F,\u5269\u4F59realUid\u6570\u91CF\uFF1A").concat(remainLength)
                                              };
                                              throw new Error("\u8BF7\u66F4\u65B0cookie\u4EE5\u722C\u53D6\u79C1\u5BC6\u4FE1\u606F,\u5269\u4F59realUid\u6570\u91CF\uFF1A".concat(remainLength));
                                            }

                                            rs['realUid'] = realUid;

                                            _details["default"].insertMany([rs], function (err, data) {
                                              // 更新列表的状态
                                              _allgirls["default"].findOneAndUpdate({
                                                realUid: realUid
                                              }, {
                                                $set: {
                                                  status: true,
                                                  finishTime: new Date()
                                                }
                                              }).exec();

                                              remainLength--; // 进度事件

                                              G.DetailStatusRate = {
                                                'text': "\u4F20\u9001\u65F6\u95F4:".concat(new Date(), "--end-realUid:").concat(realUid, ",usedtime:").concat((new Date().getTime() - cur) / 1000, "seconds,remain-realUid-count\uFF1A").concat(remainLength),
                                                'percent': (Length - remainLength) / Length * 100
                                              };
                                              cb(null, ' '); // 代表这个函数结束，传递出去
                                            });
                                          }
                                        })["catch"](function (err) {
                                          // console.log(err)
                                          cb(null, ' ');
                                        });

                                      case 4:
                                      case "end":
                                        return _context2.stop();
                                    }
                                  }
                                }, _callee2);
                              }));

                              return function (_x10, _x11) {
                                return _ref2.apply(this, arguments);
                              };
                            }(),
                            /*#__PURE__*/
                            function () {
                              var _ref3 = _asyncToGenerator(
                              /*#__PURE__*/
                              regeneratorRuntime.mark(function _callee3(err, data) {
                                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                  while (1) {
                                    switch (_context3.prev = _context3.next) {
                                      case 0:
                                        console.log("\u8BE6\u7EC6\u9875\u722C\u53D6\u4EFB\u52A1\u5B8C\u6210");

                                      case 1:
                                      case "end":
                                        return _context3.stop();
                                    }
                                  }
                                }, _callee3);
                              }));

                              return function (_x12, _x13) {
                                return _ref3.apply(this, arguments);
                              };
                            }());

                            _context4.next = 27;
                            break;

                          case 25:
                            _context4.prev = 25;
                            _context4.t0 = _context4["catch"](4);

                          case 27:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[4, 25]]);
                  }));

                  return function (_x7, _x8, _x9) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function spiDetailByRealUid(_x4, _x5, _x6) {
        return _spiDetailByRealUid.apply(this, arguments);
      }

      return spiDetailByRealUid;
    }()
    /**
     * 定义爬取列表页配置并开启任务
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "updateTaskConfig",
    value: function () {
      var _updateTaskConfig = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(req, res, next) {
        var form;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                form = new _formidable["default"].IncomingForm();
                form.parse(req,
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee6(err, fields, files) {
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            if (!(req.session.role !== 2)) {
                              _context6.next = 3;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '对不起，你没有权限操作~'
                            });
                            return _context6.abrupt("return");

                          case 3:
                            if (!err) {
                              _context6.next = 6;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '表单信息错误'
                            });
                            return _context6.abrupt("return");

                          case 6:
                            _context6.prev = 6;
                            _context6.next = 9;
                            return (0, _getList2Json["default"])(_objectSpread({
                              startPage: 1,
                              endPage: 150,
                              speed: 1,
                              marriage: 1,
                              education: 30
                            }, fields));

                          case 9:
                            res.send({
                              status: 100,
                              message: "\u722C\u53D6\u5217\u8868\u9875\u5DF2\u5F00\u59CB~"
                            });
                            _context6.next = 15;
                            break;

                          case 12:
                            _context6.prev = 12;
                            _context6.t0 = _context6["catch"](6);
                            res.send({
                              status: 400,
                              message: "\u64CD\u4F5C\u5931\u8D25,\u5931\u8D25\u539F\u56E0:".concat(_context6.t0)
                            });

                          case 15:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6, null, [[6, 12]]);
                  }));

                  return function (_x17, _x18, _x19) {
                    return _ref4.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function updateTaskConfig(_x14, _x15, _x16) {
        return _updateTaskConfig.apply(this, arguments);
      }

      return updateTaskConfig;
    }()
    /**
     * 设置权重
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "setTop",
    value: function () {
      var _setTop2 = _asyncToGenerator(
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
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee8(err, fields, files) {
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            if (!(req.session.role !== 2)) {
                              _context8.next = 3;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '对不起，你没有权限操作~'
                            });
                            return _context8.abrupt("return");

                          case 3:
                            _context8.prev = 3;
                            _context8.next = 6;
                            return (0, _sortTask.setTop)();

                          case 6:
                            res.send({
                              status: 100,
                              message: "\u8BBE\u7F6E\u6743\u91CD\u4EFB\u52A1\u5DF2\u5F00\u59CB~"
                            });
                            _context8.next = 12;
                            break;

                          case 9:
                            _context8.prev = 9;
                            _context8.t0 = _context8["catch"](3);
                            res.send({
                              status: 400,
                              message: "\u64CD\u4F5C\u5931\u8D25,\u5931\u8D25\u539F\u56E0:".concat(_context8.t0)
                            });

                          case 12:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8, null, [[3, 9]]);
                  }));

                  return function (_x23, _x24, _x25) {
                    return _ref5.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function setTop(_x20, _x21, _x22) {
        return _setTop2.apply(this, arguments);
      }

      return setTop;
    }()
    /**
     * WARRING: v0.1 去重方法  已废弃
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "distinctGirl",
    value: function () {
      var _distinctGirl = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12(req, res, next) {
        var _this3 = this;

        var form;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                form = new _formidable["default"].IncomingForm();
                form.parse(req,
                /*#__PURE__*/
                function () {
                  var _ref6 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee11(err, fields, files) {
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            if (!(req.session.role !== 2)) {
                              _context11.next = 3;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '对不起，你没有权限操作~'
                            });
                            return _context11.abrupt("return");

                          case 3:
                            _context11.prev = 3;
                            return _context11.delegateYield(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee10() {
                              var uids, fin, finArr, K, uidArr, key;
                              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                while (1) {
                                  switch (_context10.prev = _context10.next) {
                                    case 0:
                                      console.log('接到请求'); //let girl = await GirlModel.find({}) // 1. 整表取

                                      _context10.next = 3;
                                      return GirlModel.distinct('realUid');

                                    case 3:
                                      uids = _context10.sent;
                                      console.log('uids.length:', uids.length);
                                      console.log('set length ', Array.from(new Set(uids)).length); // 去除已完成的uid
                                      // 切割uid 分布写入

                                      _context10.next = 8;
                                      return _allgirls["default"].find({}, {
                                        realUid: 1,
                                        _id: 0
                                      });

                                    case 8:
                                      fin = _context10.sent;
                                      finArr = [];

                                      for (K in fin) {
                                        // console.log(fin[K]['realUid'])
                                        finArr.push(fin[K]['realUid']);
                                      }

                                      console.log('finArr.length:', finArr.length);
                                      res.send({
                                        status: 200,
                                        message: "\u91CD\u590D\u8868\u6570\u636E\u603B\u6570\uFF1A".concat(uids.length, ",\u53BB\u91CD\u8868\u5DF2\u5B58\u6761\u6570\uFF1A").concat(finArr.length)
                                      });
                                      uidArr = _this3.difference(uids, finArr); // 取出任务剩余的UID  继续进行 **bingo**

                                      console.log('uidArr.length', uidArr.length); // 2.distinct 然后find 再insert
                                      //console.log(uids)
                                      // return

                                      for (key in uidArr) {
                                        (function (key) {
                                          // console.log(key)
                                          setTimeout(function () {
                                            GirlModel.find({
                                              realUid: uids[key]
                                            }, function (err, data) {
                                              // 一级赋值结构有问题  需要详细结构
                                              var _data$ = data[0],
                                                  realUid = _data$.realUid,
                                                  area = _data$.area,
                                                  nickname = _data$.nickname,
                                                  sex = _data$.sex,
                                                  marriage = _data$.marriage,
                                                  height = _data$.height,
                                                  education = _data$.education,
                                                  work_location = _data$.work_location,
                                                  age = _data$.age,
                                                  image = _data$.image,
                                                  randListTag = _data$.randListTag,
                                                  userIcon = _data$.userIcon,
                                                  shortnote = _data$.shortnote,
                                                  matchCondition = _data$.matchCondition,
                                                  helloUrl = _data$.helloUrl,
                                                  top = _data$.top,
                                                  hidden = _data$.hidden;
                                              new _allgirls["default"]({
                                                realUid: realUid,
                                                area: area,
                                                nickname: nickname,
                                                sex: sex,
                                                marriage: marriage,
                                                height: height,
                                                education: education,
                                                work_location: work_location,
                                                age: age,
                                                image: image,
                                                randListTag: randListTag,
                                                userIcon: userIcon,
                                                shortnote: shortnote,
                                                matchCondition: matchCondition,
                                                helloUrl: helloUrl,
                                                top: top,
                                                hidden: hidden
                                              }).save(function (err, data) {
                                                if (err) {
                                                  // FIXME: 诡异数据库 catch err  需要重启server  否则uid数会出错
                                                  console.log('create', err);
                                                } else {
                                                  console.log(data, 'success:');
                                                }
                                              });
                                            });
                                          }, key * 30 + 200); // FIXME: 服务器压力值
                                        })(key);
                                      } // 3. 单表上的操作：利用distinct 出不重复的uid 然后全部UID数组去除Set() 在find&&remove
                                      // 4. 通过数据库表的导出重复表  建立唯一索引 再导入表  去重


                                    case 16:
                                    case "end":
                                      return _context10.stop();
                                  }
                                }
                              }, _callee10);
                            })(), "t0", 5);

                          case 5:
                            _context11.next = 10;
                            break;

                          case 7:
                            _context11.prev = 7;
                            _context11.t1 = _context11["catch"](3);
                            res.send({
                              status: 400,
                              message: "\u53BB\u91CD\u5931\u8D25,\u5931\u8D25\u539F\u56E0:".concat(_context11.t1)
                            });

                          case 10:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11, null, [[3, 7]]);
                  }));

                  return function (_x29, _x30, _x31) {
                    return _ref6.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function distinctGirl(_x26, _x27, _x28) {
        return _distinctGirl.apply(this, arguments);
      }

      return distinctGirl;
    }()
    /** WARRING: v0.1 去重方法  已废弃
     * 导出UID,生成UID表
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */

  }, {
    key: "exportRealUid",
    value: function () {
      var _exportRealUid = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee14(req, res, next) {
        var form;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                form = new _formidable["default"].IncomingForm();
                form.parse(req,
                /*#__PURE__*/
                function () {
                  var _ref7 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee13(err, fields, files) {
                    var realUids;
                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            if (!(req.session.role !== 2)) {
                              _context13.next = 3;
                              break;
                            }

                            res.send({
                              status: 100,
                              message: '对不起，你没有权限操作~'
                            });
                            return _context13.abrupt("return");

                          case 3:
                            _context13.prev = 3;
                            _context13.next = 6;
                            return _allgirls["default"].find({}, {
                              realUid: 1,
                              _id: 0
                            });

                          case 6:
                            realUids = _context13.sent;
                            _context13.next = 9;
                            return realUids.sort(function (a, b) {
                              return a['realUid'] - b['realUid'];
                            });

                          case 9:
                            _context13.next = 11;
                            return _uids["default"].remove({});

                          case 11:
                            _context13.next = 13;
                            return _uids["default"].insertMany(realUids);

                          case 13:
                            // 重写
                            res.send({
                              status: 200,
                              message: '成功导出realUid到uids表中',
                              data: {
                                'length': realUids.length // FIXME:不传给前台

                              }
                            });
                            _context13.next = 19;
                            break;

                          case 16:
                            _context13.prev = 16;
                            _context13.t0 = _context13["catch"](3);
                            res.send({
                              status: 400,
                              message: "\u5BFC\u51FA\u5931\u8D25,\u5931\u8D25\u539F\u56E0:".concat(_context13.t0)
                            });

                          case 19:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13, null, [[3, 16]]);
                  }));

                  return function (_x35, _x36, _x37) {
                    return _ref7.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function exportRealUid(_x32, _x33, _x34) {
        return _exportRealUid.apply(this, arguments);
      }

      return exportRealUid;
    }()
  }]);

  return Spider;
}(_basePrototype["default"]);

var _default = new Spider();

exports["default"] = _default;