"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ids = _interopRequireDefault(require("../model/ids"));

var _formidable = _interopRequireDefault(require("formidable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var path = require('path');

var fs = require('fs');

var BaseComponent =
/*#__PURE__*/
function () {
  function BaseComponent() {
    _classCallCheck(this, BaseComponent);

    this.idList = ['admin_id', 'girl_id', 'img_id'];
  }
  /**
   * 获取id列表
   * @param {*} type 
   */


  _createClass(BaseComponent, [{
    key: "getId",
    value: function () {
      var _getId = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(type) {
        var idData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.idList.includes(type)) {
                  _context.next = 3;
                  break;
                }

                throw new Error('id类型错误');

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return _ids["default"].findOne();

              case 6:
                idData = _context.sent;
                idData[type]++;
                _context.next = 10;
                return idData.save();

              case 10:
                return _context.abrupt("return", idData[type]);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);
                throw new Error(_context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 13]]);
      }));

      function getId(_x) {
        return _getId.apply(this, arguments);
      }

      return getId;
    }()
    /**
     * 获取上传的图片的路径
     * @param {*} req 
     * @param {*} res 
     */

  }, {
    key: "getPath",
    value: function () {
      var _getPath = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  var form = _formidable["default"].IncomingForm();

                  form.uploadDir = './public/img';
                  form.parse(req,
                  /*#__PURE__*/
                  function () {
                    var _ref = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2(err, fields, files) {
                      var img_id, hashName, extname, fullName, repath;
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.prev = 0;
                              _context2.next = 3;
                              return _this.getId('img_id');

                            case 3:
                              img_id = _context2.sent;
                              _context2.next = 10;
                              break;

                            case 6:
                              _context2.prev = 6;
                              _context2.t0 = _context2["catch"](0);
                              // console.log('获取图片id失败')
                              fs.unlinkSync(files.file.path);
                              reject('获取图片id失败');

                            case 10:
                              hashName = (new Date().getTime() + Math.ceil(Math.random() * 10000)).toString(16) + img_id;
                              extname = path.extname(files.file.name);

                              if (['.jpg', '.jpeg', '.png'].includes(extname)) {
                                _context2.next = 17;
                                break;
                              }

                              fs.unlinkSync(files.file.path);
                              res.send({
                                status: 0,
                                type: 'ERROR_EXTNAME',
                                message: '文件格式错误'
                              });
                              reject('上传失败');
                              return _context2.abrupt("return");

                            case 17:
                              fullName = '/img/' + hashName + extname;
                              repath = './public/img/' + hashName + extname;

                              try {
                                fs.renameSync(files.file.path, repath);
                                resolve({
                                  fullName: fullName,
                                  fields: fields
                                });
                              } catch (err) {
                                // console.log('保存图片失败', err)
                                if (fs.existsSync(repath)) {
                                  fs.unlinkSync(repath);
                                } else {
                                  fs.unlinkSync(files.file.path);
                                }

                                reject('保存图片失败');
                              }

                            case 20:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, null, [[0, 6]]);
                    }));

                    return function (_x4, _x5, _x6) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getPath(_x2, _x3) {
        return _getPath.apply(this, arguments);
      }

      return getPath;
    }()
    /**
     * 取数组不同值
     * @param {*} l 长数组
     * @param {*} s 短数组
     */

  }, {
    key: "difference",
    value: function difference(l, s) {
      var S = new Set(s);
      return l.filter(function (v) {
        return !S.has(v);
      });
    }
  }]);

  return BaseComponent;
}();

exports["default"] = BaseComponent;