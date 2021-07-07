"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _paragon = require("@edx/paragon");

var _i18n = require("@edx/frontend-platform/i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkipProctoredExamButton = function SkipProctoredExamButton(_ref) {
  var handleClick = _ref.handleClick;
  return /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    "data-testid": "start-exam-without-proctoring-button",
    variant: "link",
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.skipProctoredExamButton",
    defaultMessage: "Take this exam without proctoring."
  })));
};

SkipProctoredExamButton.propTypes = {
  handleClick: _propTypes.default.func.isRequired
};
var _default = SkipProctoredExamButton;
exports.default = _default;
//# sourceMappingURL=SkipProctoredExamButton.js.map