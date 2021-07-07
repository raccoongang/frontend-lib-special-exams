"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18n = require("@edx/frontend-platform/i18n");

var _paragon = require("@edx/paragon");

var _constants = require("../../constants");

var _context = _interopRequireDefault(require("../../context"));

var _SkipProctoredExamButton = _interopRequireDefault(require("./SkipProctoredExamButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var EntranceProctoredExamInstructions = function EntranceProctoredExamInstructions(_ref) {
  var skipProctoredExam = _ref.skipProctoredExam;
  var state = (0, _react.useContext)(_context.default);
  var exam = state.exam,
      createProctoredExamAttempt = state.createProctoredExamAttempt,
      allowProctoringOptOut = state.allowProctoringOptOut;

  var _ref2 = exam || {},
      attempt = _ref2.attempt;

  var _attempt$total_time = attempt.total_time,
      totalTime = _attempt$total_time === void 0 ? 0 : _attempt$total_time;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, attempt.attempt_status === _constants.ExamStatus.READY_TO_RESUME ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "h3",
    "data-testid": "proctored-exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToResumeProctoredExamInstructions.title",
    defaultMessage: "Your exam is ready to be resumed."
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToResumeProctoredExamInstructions.text",
    defaultMessage: "You will have {totalTime} to complete your exam.",
    values: {
      totalTime: totalTime
    }
  }))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "h3",
    "data-testid": "proctored-exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceProctoredExamInstructions.title",
    defaultMessage: "This exam is proctored"
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceProctoredExamInstructions.text1",
    defaultMessage: 'To be eligible for credit or the program credential associated with this course, ' + 'you must pass the proctoring review for this exam.'
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "mt-4 pl-md-4"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceProctoredExamInstructions.text2",
    defaultMessage: "You will be guided through steps to set up online proctoring software and verify your identity."
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "pl-md-4"
  }, /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    "data-testid": "start-exam-button",
    variant: "primary",
    onClick: createProctoredExamAttempt
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.startExamButtonText",
    defaultMessage: "Continue to my proctored exam."
  }))), allowProctoringOptOut && /*#__PURE__*/_react.default.createElement(_SkipProctoredExamButton.default, {
    handleClick: skipProctoredExam
  }));
};

EntranceProctoredExamInstructions.propTypes = {
  skipProctoredExam: _propTypes.default.func.isRequired
};
var _default = EntranceProctoredExamInstructions;
exports.default = _default;
//# sourceMappingURL=EntranceProctoredExamInstructions.js.map