"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _i18n = require("@edx/frontend-platform/i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerifiedProctoredExamInstructions = function VerifiedProctoredExamInstructions() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "h3",
    "data-testid": "proctored-exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.VerifiedProctoredExamInstructions.title",
    defaultMessage: 'Your proctoring session was reviewed successfully. ' + 'Go to your progress page to view your exam grade.'
  })));
};

var _default = VerifiedProctoredExamInstructions;
exports.default = _default;
//# sourceMappingURL=VerifiedProctoredExamInstructions.js.map