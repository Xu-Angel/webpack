"use strict";

var _config = require("../config");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var cheerio = require('cheerio');

var request = require('request');

var userAgent = _config.userAgents[parseInt(Math.random() * _config.userAgents.length)];

var proxys = []; //保存从网站上获取到的代理

var useful = []; //保存检查过有效性的代理

/**
 * 获取www.xicidaili.com提供的免费代理 v1.0版本 现在暂时弃用
 */

module.exports = function getXici(pageNum) {
  return new Promise(function (resolve, reject) {
    var url = "http://www.xicidaili.com/nn/".concat(pageNum); // 

    console.log('start');
    request({
      url: url,
      method: "GET",
      headers: {
        'User-Agent': userAgent
      } // proxy: 'http://27.29.44.220:9999/'

    },
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(error, response, body) {
        var $, trs, i, proxy, tr, tds, speed, connectTime, testUrl, flag, _loop, _i;

        return regeneratorRuntime.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!error) {
                  $ = cheerio.load(body);
                  trs = $("#ip_list tr");

                  for (i = 1; i < trs.length; i++) {
                    proxy = {};
                    tr = trs.eq(i);
                    tds = tr.children("td");
                    proxy['ip'] = tds.eq(1).text();
                    proxy['port'] = tds.eq(2).text();
                    proxy['address'] = tds.eq(3).text();
                    speed = tds.eq(6).children("div").attr("title");
                    console.log(speed);
                    proxy['speed'] = speed;
                    proxy['type'] = tds.eq(4).text();
                    proxy['ori'] = '西刺';
                    connectTime = tds.eq(7).children("div").attr("title");
                    connectTime = connectTime.substring(0, connectTime.length - 1);

                    if (speed <= 5 && connectTime <= 1) {
                      //用速度和连接时间筛选一轮
                      proxys.push(proxy);
                    }

                    proxys.push(proxy);
                  }
                }

                if (error) {
                  console.log('error:', error);
                }

                testUrl = "http://xutianshi.top";
                flag = proxys.length; //检查是否所有异步函数都执行完的标志量

                _loop =
                /*#__PURE__*/
                regeneratorRuntime.mark(function _loop(_i) {
                  var proxy;
                  return regeneratorRuntime.wrap(function _loop$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          proxy = proxys[_i];
                          _context.next = 3;
                          return request({
                            url: testUrl,
                            proxy: "http://" + proxy['ip'] + ":" + proxy['port'],
                            method: 'GET',
                            timeout: 5000 //5s没有返回则视为代理不行

                          }, function (error, response, body) {
                            flag--;

                            if (!error) {
                              if (response.statusCode == 200) {
                                useful.push({
                                  ip: response.request['proxy']['href'],
                                  address: proxy.address,
                                  type: proxy.type,
                                  ori: proxy.ori,
                                  createTime: new Date(),
                                  speed: proxy.speed
                                });
                                console.log(response.request['proxy']['href'], "useful!", 'pageNum:' + pageNum);
                              } else {
                                console.log(response.request['proxy']['href'], "failed!", 'pageNum:' + pageNum);
                              }
                            } else {
                              console.log("One proxy failed!", 'pageNum:' + pageNum);
                            }

                            if (flag == 0) {
                              resolve(useful); // 返回有用的IP 数组
                            }

                            console.log(flag);
                          });

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _loop);
                });
                _i = 0;

              case 6:
                if (!(_i < proxys.length)) {
                  _context2.next = 11;
                  break;
                }

                return _context2.delegateYield(_loop(_i), "t0", 8);

              case 8:
                _i++;
                _context2.next = 6;
                break;

              case 11:
                console.log('finished for');

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());
  });
};