"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _girl = _interopRequireDefault(require("../controller/girl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/list', _girl["default"].getList); // router.get('/distinct', Girl.distinct)
// router.get('/exportRealUid', Girl.exportRealUid)

router.post('/getDetail', _girl["default"].getDetail);
router.post('/updateTop', _girl["default"].updateTop); // TODO:
// router.post('/delGirl', Girl.delById);

var _default = router;
exports["default"] = _default;