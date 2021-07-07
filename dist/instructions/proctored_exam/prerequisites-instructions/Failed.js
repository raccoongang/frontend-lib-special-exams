"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18n = require("@edx/frontend-platform/i18n");

var _SkipProctoredExamButton = _interopRequireDefault(require("../SkipProctoredExamButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FailedPrerequisitesProctoredExamInstructions = function FailedPrerequisitesProctoredExamInstructions(props) {
  var allowProctoringOptOut = props.allowProctoringOptOut,
      prerequisites = props.prerequisites,
      platformName = props.platformName,
      skipProctoredExam = props.skipProctoredExam;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "pb-2",
    "data-testid": "failed-prerequisites"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.FailedPrerequisitesProctoredExamInstructions.text1",
    defaultMessage: "You did not satisfy the requirements for taking this exam with proctoring."
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.FailedPrerequisitesProctoredExamInstructions.text2",
    defaultMessage: "You did not satisfy the following prerequisites:"
  })), /*#__PURE__*/_react.default.createElement("ol", {
    style: {
      listStyleType: 'disc'
    }
  }, prerequisites.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index.toString()
    }, item.jumpto_url ? /*#__PURE__*/_react.default.createElement("a", {
      href: item.jumpto_url
    }, item.display_name) : item.display_name);
  })), allowProctoringOptOut && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.skipExamText",
    defaultMessage: "Due to unsatisfied prerequisites, you can only take this exam without proctoring."
  })), /*#__PURE__*/_react.default.createElement(_SkipProctoredExamButton.default, {
    handleClick: skipProctoredExam
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.FailedPrerequisitesProctoredExamInstructions.text3",
    defaultMessage: 'If you have questions about the status of your requirements, contact {platformName} Support.',
    values: {
      platformName: platformName
    }
  })));
};

FailedPrerequisitesProctoredExamInstructions.propTypes = {
  allowProctoringOptOut: _propTypes.default.bool.isRequired,
  prerequisites: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  platformName: _propTypes.default.string.isRequired,
  skipProctoredExam: _propTypes.default.func.isRequired
};
var _default = FailedPrerequisitesProctoredExamInstructions;
exports.default = _default;
//# sourceMappingURL=Failed.js.map