"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _log4js = _interopRequireDefault(require("log4js"));

var _path = _interopRequireDefault(require("path"));

var _index = _interopRequireDefault(require("../../tool/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var basePath = _path["default"].resolve(__dirname, "../../logs");

var errorPath = basePath + "/error/";
var resPath = basePath + "/response/";
var errorFilename = errorPath + "/error";
var resFilename = resPath + "/response";

_log4js["default"].configure({
  appenders: {
    errorLog: {
      type: "dateFile",
      //日志类型
      filename: errorFilename,
      //日志输出位置
      alwaysIncludePattern: true,
      //是否总是有后缀名
      pattern: "yyyy-MM-dd-hh.log" //后缀，每小时创建一个新的日志文件
      // pattern: "yyyy-MM-dd.log" //后缀，每天创建一个新的日志文件

    },
    responseLog: {
      type: "dateFile",
      filename: resFilename,
      alwaysIncludePattern: true,
      pattern: "yyyy-MM-dd-hh.log"
    } // replaceConsole: true//把console输出的内容也写入log文件

  },
  categories: {
    errorLog: {
      appenders: ['errorLog'],
      level: 'error'
    },
    responseLog: {
      appenders: ["responseLog"],
      level: "info"
    },
    "default": {
      appenders: ['responseLog', 'errorLog'],
      level: 'trace'
    }
  },
  // pm2: true,
  // pm2InstanceVar: 'INSTANCE_ID',
  disableClustering: true
}); //创建log的根目录'logs'


if (basePath) {
  _index["default"].confirmPath(basePath); //根据不同的logType创建不同的文件目录


  _index["default"].confirmPath(errorPath);

  _index["default"].confirmPath(resPath);
}

var _default = _log4js["default"];
exports["default"] = _default;