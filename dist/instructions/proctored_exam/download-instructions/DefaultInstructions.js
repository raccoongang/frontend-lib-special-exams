"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18n = require("@edx/frontend-platform/i18n");

var _ExamCode = _interopRequireDefault(require("./ExamCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultInstructions = function DefaultInstructions(_ref) {
  var code = _ref.code;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "h4"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step1.title",
    defaultMessage: "Step 1."
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_ExamCode.default, {
    code: code
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step1.body",
    defaultMessage: "Select the exam code, then copy it using Control + C (Windows) or Command + C (Mac)."
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "h4"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.title",
    defaultMessage: "Step 2."
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body1",
    defaultMessage: "Start your system check now. A new window will open for this step and you will verify your identity."
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body2",
    defaultMessage: "Make sure you:"
  })), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body3",
    defaultMessage: "Have a computer with a functioning webcam"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body4",
    defaultMessage: "Have your valid photo ID (e.g. driver's license or passport) ready"
  }))));
};

DefaultInstructions.propTypes = {
  code: _propTypes.default.string.isRequired
};
var _default = DefaultInstructions;
exports.default = _default;
//# sourceMappingURL=DefaultInstructions.js.map