"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _moment = _interopRequireDefault(require("moment"));

var _index = require("../ip/index");

var _getList2Json = _interopRequireDefault(require("../spider/getList2Json"));

var _sortTask = require("./sortTask");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var schedule = require('node-schedule');

function _default() {
  // 每30分钟倍数爬取一次IP池
  var IpTask = schedule.scheduleJob('*/30 * * * *',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('IP池爬取任务开始执行!', (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
            _context.next = 3;
            return (0, _index.getIpPool)();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  var params = {
    startPage: 1,
    endPage: 150,
    speed: 1,
    marriage: 1,
    education: 30,
    area: ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "台湾", "香港", "澳门", "美国", "国外"] // 美妙的一天从检查权重开始

  };
  var SortTask = schedule.scheduleJob('30 1 0 * * *',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('检查权重开始执行!', (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
            _context2.next = 3;
            return (0, _sortTask.setTop)();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }))); // 再检查一次代理池

  var CheckIpPoolTask = schedule.scheduleJob('20 40 0 * * *',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('IP池检查任务开始执行!', (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
            _context3.next = 3;
            return (0, _index.checkIpPool)();

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }))); // 凌晨1点1分30秒触发  爬250页

  var ListTaskO = schedule.scheduleJob('30 1 1 * * *',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log('全区列表任务开始执行!', (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
            _context4.next = 3;
            return (0, _getList2Json["default"])(_objectSpread({}, params, {
              task: true,
              endPage: 250
            }));

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }))); // 凌晨4点1分30秒触发  爬100页

  var ListTaskO_ = schedule.scheduleJob('30 1 4 * * *',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log('全区列表任务开始执行!', (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
            _context5.next = 3;
            return (0, _getList2Json["default"])(_objectSpread({}, params, {
              task: true,
              endPage: 100
            }));

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }))); // 爬150页

  var ListTaskO__ = schedule.scheduleJob('30 1 6 * * *',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log('全区列表任务开始执行!', (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
            _context6.next = 3;
            return (0, _getList2Json["default"])(_objectSpread({}, params, {
              task: true,
              startPage: 200,
              endPage: 350
            }));

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }))); // 再检查一次代理池

  var CheckIpPoolTask_ = schedule.scheduleJob('20 50 7 * * *',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            console.log('IP池检查任务开始执行!', (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
            _context7.next = 3;
            return (0, _index.checkIpPool)();

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }))); // 早上列表爬取任务 轻量爬50页 模拟用户访问

  var ListTask_ = schedule.scheduleJob('30 1 8 * * *',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            console.log('全区列表任务开始执行!', (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
            _context8.next = 3;
            return (0, _getList2Json["default"])(_objectSpread({}, params, {
              task: true,
              endPage: 50
            }));

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  var ListTask__ = schedule.scheduleJob('28 1 10 * * *',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9() {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            console.log('全区列表任务开始执行!', (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
            _context9.next = 3;
            return (0, _getList2Json["default"])(_objectSpread({}, params, {
              task: true,
              endPage: 50
            }));

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
  var ListTask___ = schedule.scheduleJob('28 1 12 * * *',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10() {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            console.log('全区列表任务开始执行!', (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss'));
            _context10.next = 3;
            return (0, _getList2Json["default"])(_objectSpread({}, params, {
              task: true,
              endPage: 50
            }));

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }))); // 洗完澡传个cookie 爬下详细页 看下每日成果 美滋滋
}
/* 
每分钟的第30秒触发： '30 * * * * *'

每小时的1分30秒触发 ：'30 1 * * * *'

每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'

每月的1日1点1分30秒触发 ：'30 1 1 1 * *'

2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'

每周1的1点1分30秒触发 ：'30 1 1 * * 1'
*/

/* 
*  *  *  *  *  *
┬ ┬ ┬ ┬ ┬ ┬
│ │ │ │ │  |
│ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
│ │ │ │ └───── month (1 - 12)
│ │ │ └────────── day of month (1 - 31)
│ │ └─────────────── hour (0 - 23)
│ └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
*表示通配符，匹配任意，当秒是*时，表示任意秒数都触发，/表示每
*/