"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _i18n = require("@edx/frontend-platform/i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimedExamFooter = function TimedExamFooter() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-sequence"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "h4"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.footerTitle",
    defaultMessage: "Can I request additional time to complete my exam?"
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.footerText",
    defaultMessage: 'If you have disabilities, ' + 'you might be eligible for an additional time allowance on timed exams. ' + 'Ask your course team for information about additional time allowances.'
  })));
};

var _default = TimedExamFooter;
exports.default = _default;
//# sourceMappingURL=TimedExamFooter.js.map