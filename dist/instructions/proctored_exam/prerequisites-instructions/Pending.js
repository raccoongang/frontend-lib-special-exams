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

var PendingPrerequisitesProctoredExamInstructions = function PendingPrerequisitesProctoredExamInstructions(_ref) {
  var allowProctoringOptOut = _ref.allowProctoringOptOut,
      prerequisites = _ref.prerequisites,
      skipProctoredExam = _ref.skipProctoredExam;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "pb-2",
    "data-testid": "pending-prerequisites"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.PendingPrerequisitesProctoredExamInstructions.text1",
    defaultMessage: 'You have not completed the prerequisites for ' + 'this exam. All requirements must be satisfied before you ' + 'can take this proctored exam.'
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.PendingPrerequisitesProctoredExamInstructions.text2",
    defaultMessage: "The following prerequisites are in a"
  }), "\xA0", /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.PendingPrerequisitesProctoredExamInstructions.text3",
    defaultMessage: "pending"
  })), "\xA0", /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.PendingPrerequisitesProctoredExamInstructions.text4",
    defaultMessage: "state and must be successfully completed before you can proceed:"
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
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.PendingPrerequisitesProctoredExamInstructions.text5",
    defaultMessage: 'You can take this exam with proctoring only ' + 'when all prerequisites-instructions have been successfully completed.'
  })), allowProctoringOptOut && /*#__PURE__*/_react.default.createElement(_SkipProctoredExamButton.default, {
    handleClick: skipProctoredExam
  }));
};

PendingPrerequisitesProctoredExamInstructions.propTypes = {
  allowProctoringOptOut: _propTypes.default.bool.isRequired,
  prerequisites: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  skipProctoredExam: _propTypes.default.func.isRequired
};
var _default = PendingPrerequisitesProctoredExamInstructions;
exports.default = _default;
//# sourceMappingURL=Pending.js.map