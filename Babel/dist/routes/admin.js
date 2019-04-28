"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _admin = _interopRequireDefault(require("../controller/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/login', _admin["default"].login);
router.post('/updateInfo', _admin["default"].updateInfo);
router.post('/logout', _admin["default"].logout);
router.post('/getList', _admin["default"].getList);
router.post('/delAdmin', _admin["default"].delAdmin);
router.get('/info', _admin["default"].getAdminInfo);
router.post('/updateAvatar', _admin["default"].updateAvatar);
var _default = router;
exports["default"] = _default;