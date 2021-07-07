"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _paragon = require("@edx/paragon");

var _timer = require("../timer");

var _instructions = _interopRequireDefault(require("../instructions"));

var _context = _interopRequireDefault(require("../context"));

var _ExamAPIError = _interopRequireDefault(require("./ExamAPIError"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Exam component is intended to render exam instructions before and after exam.
 * It is also responsible for rendering exam timer block/component during the exam.
 * If children do not relate to exam sequence, render them directly.
 * @param isTimeLimited - boolean used to identify if we need to process sequence as an exam
 * @param children - sequence content
 * @returns {JSX.Element}
 * @constructor
 */
var Exam = function Exam(_ref) {
  var isTimeLimited = _ref.isTimeLimited,
      children = _ref.children;
  var state = (0, _react.useContext)(_context.default);
  var isLoading = state.isLoading,
      activeAttempt = state.activeAttempt,
      showTimer = state.showTimer,
      stopExam = state.stopExam,
      exam = state.exam,
      expireExam = state.expireExam,
      pollAttempt = state.pollAttempt,
      apiErrorMsg = state.apiErrorMsg,
      pingAttempt = state.pingAttempt,
      getVerificationData = state.getVerificationData,
      getProctoringSettings = state.getProctoringSettings,
      submitExam = state.submitExam;

  var _ref2 = exam || {},
      examType = _ref2.type,
      examId = _ref2.id;

  (0, _react.useEffect)(function () {
    if (examId) {
      getProctoringSettings();
    }

    if (examType === _constants.ExamType.PROCTORED) {
      getVerificationData();
    } // this makes sure useEffect gets called only one time after the exam has been fetched
    // we can't leave this empty since initially exam is just an empty object, so
    // API calls above would not get triggered

  }, [examId]);

  if (isLoading) {
    return /*#__PURE__*/_react.default.createElement("div", {
      "data-testid": "spinner",
      className: "d-flex justify-content-center align-items-center flex-column my-5 py-5"
    }, /*#__PURE__*/_react.default.createElement(_paragon.Spinner, {
      animation: "border",
      variant: "primary"
    }));
  }

  var sequenceContent = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column justify-content-center"
  }, showTimer && /*#__PURE__*/_react.default.createElement(_timer.ExamTimerBlock, {
    attempt: activeAttempt,
    stopExamAttempt: stopExam,
    submitExam: submitExam,
    expireExamAttempt: expireExam,
    pollExamAttempt: pollAttempt,
    pingAttempt: pingAttempt
  }), apiErrorMsg && /*#__PURE__*/_react.default.createElement(_ExamAPIError.default, null), isTimeLimited ? /*#__PURE__*/_react.default.createElement(_instructions.default, null, sequenceContent) : sequenceContent);
};

Exam.propTypes = {
  isTimeLimited: _propTypes.default.bool.isRequired,
  children: _propTypes.default.element.isRequired
};
var _default = Exam;
exports.default = _default;
//# sourceMappingURL=Exam.js.map