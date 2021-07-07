"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@edx/frontend-platform/react");

var _context = _interopRequireDefault(require("../context"));

var _timer = require("../timer");

var _ExamAPIError = _interopRequireDefault(require("../exam/ExamAPIError"));

var _ExamStateProvider = _interopRequireDefault(require("./ExamStateProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ExamTimer = function ExamTimer(_ref) {
  var courseId = _ref.courseId;
  var state = (0, _react.useContext)(_context.default);

  var _useContext = (0, _react.useContext)(_react2.AppContext),
      authenticatedUser = _useContext.authenticatedUser;

  var activeAttempt = state.activeAttempt,
      showTimer = state.showTimer,
      stopExam = state.stopExam,
      submitExam = state.submitExam,
      expireExam = state.expireExam,
      pollAttempt = state.pollAttempt,
      apiErrorMsg = state.apiErrorMsg,
      pingAttempt = state.pingAttempt,
      getExamAttemptsData = state.getExamAttemptsData; // if user is not authenticated they cannot have active exam, so no need for timer
  // (also exam API would return 403 error)

  if (!authenticatedUser) {
    return null;
  }

  (0, _react.useEffect)(function () {
    getExamAttemptsData(courseId);
  }, [courseId]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column justify-content-center"
  }, showTimer && /*#__PURE__*/_react.default.createElement(_timer.ExamTimerBlock, {
    attempt: activeAttempt,
    stopExamAttempt: stopExam,
    submitExam: submitExam,
    expireExamAttempt: expireExam,
    pollExamAttempt: pollAttempt,
    pingAttempt: pingAttempt
  }), apiErrorMsg && /*#__PURE__*/_react.default.createElement(_ExamAPIError.default, null));
};

ExamTimer.propTypes = {
  courseId: _propTypes.default.string.isRequired
};
/**
 * OuterExamTimer is the component responsible for showing exam timer on non-sequence pages.
 * @param courseId - Id of a course that is checked for active exams, if there is one the timer
 * will be shown.
 */

var OuterExamTimer = function OuterExamTimer(_ref2) {
  var courseId = _ref2.courseId;
  return /*#__PURE__*/_react.default.createElement(_ExamStateProvider.default, null, /*#__PURE__*/_react.default.createElement(ExamTimer, {
    courseId: courseId
  }));
};

OuterExamTimer.propTypes = {
  courseId: _propTypes.default.string.isRequired
};
var _default = OuterExamTimer;
exports.default = _default;
//# sourceMappingURL=OuterExamTimer.js.map