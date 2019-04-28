"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ip = _interopRequireDefault(require("../controller/ip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/startSpiIp', _ip["default"].startSpiIp);
router.post('/startSpiIpPool', _ip["default"].startSpiIpPool);
router.get('/distinct', _ip["default"].distinct);
router.post('/getIpList', _ip["default"].getIpList);
router.post('/checkIp', _ip["default"].checkIp);
var _default = router;
exports["default"] = _default;