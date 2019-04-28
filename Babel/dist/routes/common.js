"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _common = _interopRequireDefault(require("../controller/common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/getCounts', _common["default"].getCounts); // TODO:
// router.post('/delGirl', Girl.delById);

var _default = router;
exports["default"] = _default;