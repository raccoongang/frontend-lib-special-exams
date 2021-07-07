"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _i18n = require("@edx/frontend-platform/i18n");

var _paragon = require("@edx/paragon");

var _context = _interopRequireDefault(require("../../context"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SubmitProctoredExamInstructions = function SubmitProctoredExamInstructions() {
  var state = (0, _react.useContext)(_context.default);
  var submitExam = state.submitExam,
      exam = state.exam,
      activeAttempt = state.activeAttempt;

  var _ref = exam || {},
      examType = _ref.type;

  var examName = activeAttempt.exam_display_name;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "h3",
    "data-testid": "proctored-exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmitProctoredExamInstructions.title",
    defaultMessage: "Are you sure you want to end your proctored exam?"
  })), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmitProctoredExamInstructions.warningText1",
    defaultMessage: "Make sure that you have selected \"Submit\" for each answer before you submit your exam."
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmitProctoredExamInstructions.warningText2",
    defaultMessage: 'Once you click "Yes, end my proctored exam", the exam will' + ' be closed, and your proctoring session will be submitted for review.'
  }))), examType === _constants.ExamType.ONBOARDING && /*#__PURE__*/_react.default.createElement("p", {
    "data-testid": "submit-onboarding-exam"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmitOnboardingExamInstructions.text",
    defaultMessage: 'You are taking "{examName}" as an ' + 'onboarding exam. You must click “Yes, end my proctored exam” ' + 'and submit your proctoring session to complete onboarding.',
    values: {
      examName: examName
    }
  })), /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    variant: "primary",
    onClick: submitExam,
    className: "mr-2",
    "data-testid": "end-exam-button"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmitProctoredExamInstructions.submit",
    defaultMessage: "Yes, end my proctored exam"
  })));
};

var _default = SubmitProctoredExamInstructions;
exports.default = _default;
//# sourceMappingURL=SubmitProctoredExamInstructions.js.map