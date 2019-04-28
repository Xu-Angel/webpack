"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _details = _interopRequireDefault(require("../model/details"));

var _basePrototype = _interopRequireDefault(require("./basePrototype"));

var _allgirls = _interopRequireDefault(require("../model/allgirls"));

var _admins = _interopRequireDefault(require("../model/admins"));

var _ippools = _interopRequireDefault(require("../model/ippools"));

var _formidable = _interopRequireDefault(require("formidable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Common =
/*#__PURE__*/
function (_Base) {
  _inherits(Common, _Base);

  function Common() {
    _classCallCheck(this, Common);

    return _possibleConstructorReturn(this, _getPrototypeOf(Common).call(this));
  }
  /**
   * 获取统计数
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */


  _createClass(Common, [{
    key: "getCounts",
    value: function () {
      var _getCounts = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var girlCount, finishedCount, userCount, ipCount;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _allgirls["default"].estimatedDocumentCount();

              case 3:
                girlCount = _context.sent;
                _context.next = 6;
                return _details["default"].estimatedDocumentCount();

              case 6:
                finishedCount = _context.sent;
                _context.next = 9;
                return _admins["default"].estimatedDocumentCount();

              case 9:
                userCount = _context.sent;
                _context.next = 12;
                return _ippools["default"].estimatedDocumentCount();

              case 12:
                ipCount = _context.sent;
                // ip池条数
                res.send({
                  status: 200,
                  data: {
                    girlCount: girlCount,
                    finishedCount: finishedCount,
                    userCount: userCount,
                    ipCount: ipCount
                  }
                });
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);
                res.send({
                  status: 400,
                  message: "\u83B7\u53D6\u5931\u8D25,\u5931\u8D25\u539F\u56E0:".concat(err)
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 16]]);
      }));

      function getCounts(_x, _x2, _x3) {
        return _getCounts.apply(this, arguments);
      }

      return getCounts;
    }()
  }]);

  return Common;
}(_basePrototype["default"]);

var _default = new Common();

exports["default"] = _default;