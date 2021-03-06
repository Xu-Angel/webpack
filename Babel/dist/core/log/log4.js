"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _log = _interopRequireDefault(require("./log4.config"));

var _index = _interopRequireDefault(require("../../tool/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var errorLog = _log["default"].getLogger("errorLog"); //此处使用category的值


var resLog = _log["default"].getLogger("responseLog"); //此处使用category的值


var log4 = {};

log4.i = function (req, resTime) {
  if (req) {
    resLog.info(formatRes(req, resTime));
  }
};

log4.e = function (ctx, error, resTime) {
  if (ctx && error) {
    errorLog.error(formatError(ctx, error, resTime));
  }
}; //格式化请求日志


var formatReqLog = function formatReqLog(req, resTime) {
  var ip = _index["default"].getClientIp(req);

  var logText = new String(); //访问方法

  var method = req.method;
  logText += "request method: " + method + "\n"; //请求原始地址

  logText += "request originalUrl:  " + req.originalUrl + "\n"; //客户端ip

  logText += "request client ip:  " + ip + "\n"; //请求参数

  if (method === "GET") {
    logText += "request query:  " + JSON.stringify(req.query) + "\n";
  } else {
    logText += "request params: " + "\n" + JSON.stringify(req.params) + "\n";
  } //服务器响应时间


  logText += "response time: " + resTime + "\n";
  return logText;
}; //格式化响应日志


var formatRes = function formatRes(res, resTime) {
  var logText = new String(); //响应日志开始

  logText += "\n" + "*************** response log start ***************" + "\n"; //添加请求日志

  logText += formatReqLog(res, resTime); //响应状态码

  logText += "response status: " + res.res.statusCode + "\n"; //响应内容

  logText += "response body: " + "\n" + JSON.stringify(res.body) + "\n"; //响应日志结束

  logText += "*************** response log end ***************" + "\n";
  return logText;
}; //格式化错误日志


var formatError = function formatError(ctx, err, resTime) {
  var logText = new String(); //错误信息开始

  logText += "\n" + "*************** error log start ***************" + "\n"; //添加请求日志

  logText += formatReqLog(ctx, resTime); //错误名称

  logText += "err name: " + err.name + "\n"; //错误信息

  logText += "err message: " + err.message + "\n"; //错误详情

  logText += "err stack: " + err.stack + "\n"; //错误信息结束

  logText += "*************** error log end ***************" + "\n";
  return logText;
};

var _default = log4;
exports["default"] = _default;