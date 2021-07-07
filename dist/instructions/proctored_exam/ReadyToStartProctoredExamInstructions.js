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

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ReadyToStartProctoredExamInstructions = function ReadyToStartProctoredExamInstructions() {
  var state = (0, _react.useContext)(_context.default);
  var exam = state.exam,
      proctoringSettings = state.proctoringSettings,
      getExamReviewPolicy = state.getExamReviewPolicy,
      startProctoredExam = state.startProctoredExam;
  var attempt = exam.attempt,
      reviewPolicy = exam.reviewPolicy;
  var examDuration = attempt.total_time;
  var linkUrls = proctoringSettings.link_urls,
      platformName = proctoringSettings.platform_name;
  var rulesUrl = linkUrls && linkUrls.online_proctoring_rules;
  (0, _react.useEffect)(function () {
    getExamReviewPolicy();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_paragon.Container, {
    className: "border py-5 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "h3",
    "data-testid": "exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.title1",
    defaultMessage: "Important"
  })), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    "data-testid": "duration-text"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text1",
    defaultMessage: 'You have {examDuration} to complete this exam.',
    values: {
      examDuration: examDuration
    }
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text2",
    defaultMessage: "Once you start the exam, you cannot stop the timer."
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text3",
    defaultMessage: "For all question types, you must click \"submit\" to complete your answer."
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text4",
    defaultMessage: "If time expires before you click \"End My Exam\", only your submitted answers will be graded."
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "h3"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.title2",
    defaultMessage: "Proctored Exam Rules"
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text5",
    defaultMessage: "You must adhere to the following rules while you complete this exam."
  }), "\xA0", /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text6",
    defaultMessage: 'If you violate these rules, you will receive a score of 0 ' + 'on the exam, and you will not be eligible for academic course credit.'
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    variant: "link",
    target: "_blank",
    href: rulesUrl,
    "data-testid": "proctored-exam-instructions-rulesLink"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.rulesLink",
    defaultMessage: '{platformName} Rules for Online Proctored Exams',
    values: {
      platformName: platformName
    }
  }))), reviewPolicy && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "h3"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.title3",
    defaultMessage: "Additional Exam Rules"
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ReadyToStartProctoredExamInstructions.text7",
    defaultMessage: 'The following additional rules apply to this exam. ' + 'These rules take precedence over the Rules for Online Proctored Exams.'
  })), /*#__PURE__*/_react.default.createElement("p", null, reviewPolicy)), /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    "data-testid": "start-exam-button",
    variant: "primary",
    onClick: startProctoredExam
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.startExamInstructions.startExamButtonText",
    defaultMessage: "Start exam"
  }))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};

var _default = ReadyToStartProctoredExamInstructions;
exports.default = _default;
//# sourceMappingURL=ReadyToStartProctoredExamInstructions.js.map