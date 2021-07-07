"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _paragon = require("@edx/paragon");

var _constants = require("../constants");

var _proctored_exam = require("./proctored_exam");

var _onboarding_exam = require("./onboarding_exam");

var _practice_exam = require("./practice_exam");

var _timed_exam = require("./timed_exam");

var _Footer = _interopRequireDefault(require("./proctored_exam/Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntranceExamInstructions = function EntranceExamInstructions(_ref) {
  var examType = _ref.examType,
      skipProctoredExam = _ref.skipProctoredExam;

  var renderInstructions = function renderInstructions() {
    switch (examType) {
      case _constants.ExamType.PROCTORED:
        return /*#__PURE__*/_react.default.createElement(_proctored_exam.EntranceProctoredExamInstructions, {
          skipProctoredExam: skipProctoredExam
        });

      case _constants.ExamType.ONBOARDING:
        return /*#__PURE__*/_react.default.createElement(_onboarding_exam.EntranceOnboardingExamInstructions, null);

      case _constants.ExamType.PRACTICE:
        return /*#__PURE__*/_react.default.createElement(_practice_exam.EntrancePracticeExamInstructions, null);

      case _constants.ExamType.TIMED:
        return /*#__PURE__*/_react.default.createElement(_timed_exam.StartTimedExamInstructions, null);

      default:
        return null;
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_paragon.Container, {
    className: "border py-5 mb-4"
  }, renderInstructions()), examType === _constants.ExamType.TIMED ? /*#__PURE__*/_react.default.createElement(_timed_exam.TimedExamFooter, null) : /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};

EntranceExamInstructions.propTypes = {
  examType: _propTypes.default.string.isRequired,
  skipProctoredExam: _propTypes.default.func.isRequired
};
var _default = EntranceExamInstructions;
exports.default = _default;
//# sourceMappingURL=EntranceInstructions.js.map