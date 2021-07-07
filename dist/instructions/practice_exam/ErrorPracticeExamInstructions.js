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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ErrorPracticeExamInstructions = function ErrorPracticeExamInstructions() {
  var state = (0, _react.useContext)(_context.default);
  var resetExam = state.resetExam;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "h3"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ErrorPracticeExamInstructions.title",
    defaultMessage: "There was a problem with your practice proctoring session"
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: "h4"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ErrorPracticeExamInstructions.title2",
    defaultMessage: "Your practice proctoring results: "
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "font-weight-bold"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ErrorPracticeExamInstructions.title2.result",
    defaultMessage: "Unsatisfactory"
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-0"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ErrorPracticeExamInstructions.text",
    defaultMessage: 'Your proctoring session ended before you completed this practice exam. ' + 'You can retry this practice exam if you had problems setting up the online proctoring software.'
  })), /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    "data-testid": "retry-exam-button",
    variant: "primary",
    onClick: resetExam
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ErrorOnboardingExamInstructions.retryExamButton",
    defaultMessage: "Retry my exam"
  })));
};

var _default = ErrorPracticeExamInstructions;
exports.default = _default;
//# sourceMappingURL=ErrorPracticeExamInstructions.js.map