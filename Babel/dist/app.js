"use strict";

var _babelPolyfill = _interopRequireDefault(require("babel-polyfill"));

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.js"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _configLite = _interopRequireDefault(require("config-lite"));

var _chalk = _interopRequireDefault(require("chalk"));

var _connectHistoryApiFallback = _interopRequireDefault(require("connect-history-api-fallback"));

var _http = _interopRequireDefault(require("http"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _socket = _interopRequireDefault(require("socket.io"));

var _index2 = _interopRequireDefault(require("./socket/index"));

var _db = _interopRequireDefault(require("./mongodb/db.js"));

var _fs = _interopRequireDefault(require("fs"));

var _index3 = _interopRequireDefault(require("./core/schedule/index"));

var _index4 = require("./core/log/index");

var _log = _interopRequireDefault(require("./core/log/log4"));

var _path = _interopRequireDefault(require("path"));

var _serveStatic = _interopRequireDefault(require("serve-static"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();
app.set('trust proxy', 'loopback'); // 获取外网IP

app.all('*',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var start, ms, _req$headers, origin, Origin, referer, Referer, allowOrigin;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = new Date();

            if (['localhost:8088', 'girl.xutianshi.top', 'localhost:9529'].includes(req.headers.host)) {
              _context.next = 5;
              break;
            }

            res.send("".concat(req.headers.host, "\u5728").concat(new Date(), "\u8BBF\u95EE\uFF0C\u5DF2\u88AB\u62E6\u622A,\u603B\u6709\u5201\u6C11\u60F3\u5BB3\u6715\uFF0C\u9526\u8863\u536B\u62A4\u9A7E"));
            _context.next = 27;
            break;

          case 5:
            // 跨域处理
            _req$headers = req.headers, origin = _req$headers.origin, Origin = _req$headers.Origin, referer = _req$headers.referer, Referer = _req$headers.Referer;
            allowOrigin = origin || Origin || referer || Referer || '*';
            res.header("Access-Control-Allow-Origin", allowOrigin);
            res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
            res.header("Access-Control-Allow-Credentials", true); //可以带cookies

            res.header("X-Powered-By", 'Express'); // res.header("X-Token", config.token)

            if (!(req.method == 'OPTIONS')) {
              _context.next = 16;
              break;
            }

            res.sendStatus(200);
            _context.next = 27;
            break;

          case 16:
            (0, _index4.LogReq)(req);
            _context.prev = 17;
            _context.next = 20;
            return next();

          case 20:
            ms = new Date() - start;

            _log["default"].i(req, ms);

            _context.next = 27;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](17);

            _log["default"].e(req, _context.t0, ms);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[17, 24]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
var MongoStore = (0, _connectMongo["default"])(_expressSession["default"]); // 持久化session 到数据库

app.use((0, _cookieParser["default"])());
app.use((0, _expressSession["default"])({
  // 使用session
  name: _configLite["default"].session.name,
  secret: _configLite["default"].session.secret,
  resave: true,
  saveUninitialized: false,
  cookie: _configLite["default"].session.cookie,
  store: new MongoStore({
    mongooseConnection: _mongoose["default"].connection
  })
}));
(0, _index["default"])(app);
app.use((0, _connectHistoryApiFallback["default"])());
app.use((0, _serveStatic["default"])(_path["default"].resolve(__dirname, './public'))); // 静态根目录

app.use('/logs', (0, _serveStatic["default"])(_path["default"].resolve(__dirname, './logs'))); // 日志文件夹

var server = _http["default"].createServer(app);

var io = (0, _socket["default"])(server);
(0, _index2["default"])(io);
server.listen(_configLite["default"].port, function () {
  console.log(_chalk["default"].green("\u6210\u529F\u76D1\u542C\u7AEF\u53E3\uFF1A".concat(_configLite["default"].port)));
});
(0, _index3["default"])();