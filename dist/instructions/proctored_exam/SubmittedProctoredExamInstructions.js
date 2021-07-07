"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _i18n = require("@edx/frontend-platform/i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmittedProctoredExamInstructions = function SubmittedProctoredExamInstructions() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "h3",
    "data-testid": "proctored-exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.title",
    defaultMessage: "You have submitted this proctored exam for review"
  })), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.list1",
    defaultMessage: "Your recorded data should now be uploaded for review."
  }), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.list2",
    defaultMessage: 'If the proctoring software window is still open, close it now and ' + 'confirm that you want to quit the application.'
  })))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.list3",
    defaultMessage: 'Proctoring results are usually available within 5 business days ' + 'after you submit your exam.'
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.text",
    defaultMessage: 'If you have questions about the status of your proctored exam results, ' + 'contact platform Support.'
  })));
};

var _default = SubmittedProctoredExamInstructions;
exports.default = _default;
//# sourceMappingURL=SubmittedProctoredExamInstructions.js.map