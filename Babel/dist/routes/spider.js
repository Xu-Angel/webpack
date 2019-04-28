"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _spider = _interopRequireDefault(require("../controller/spider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/spiDetailByRealUid', _spider["default"].spiDetailByRealUid);
router.post('/distinctGirl', _spider["default"].distinctGirl);
router.get('/getSipderConfig', _spider["default"].getSipderConfig);
router.post('/updateTaskConfig', _spider["default"].updateTaskConfig);
router.post('/exportRealUid', _spider["default"].exportRealUid);
router.post('/setTop', _spider["default"].setTop); // TODO:
// router.post('/delGirl', Girl.delById);

var _default = router;
exports["default"] = _default;