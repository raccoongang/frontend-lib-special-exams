"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _i18n = require("@edx/frontend-platform/i18n");

var _paragon = require("@edx/paragon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpiredExamInstructions = function ExpiredExamInstructions() {
  return /*#__PURE__*/_react.default.createElement(_paragon.Container, {
    className: "border py-5 mb-4 bg-warning-100"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "h3",
    "data-testid": "expired-exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ExpiredExamInstructions.title",
    defaultMessage: "The due date for this exam has passed"
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ExpiredExamInstructions.body",
    defaultMessage: "Because the due date has passed, you are no longer able to take this exam."
  })));
};

var _default = ExpiredExamInstructions;
exports.default = _default;
//# sourceMappingURL=ExpiredInstructions.js.map