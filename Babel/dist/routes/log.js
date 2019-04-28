"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _log = _interopRequireDefault(require("../controller/log"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/getVisit', _log["default"].getVisit);
router.post('/delReq', _log["default"].delReq);
router.post('/delFile', _log["default"].delFile);
router.post('/getFile', _log["default"].getFile);
var _default = router;
exports["default"] = _default;