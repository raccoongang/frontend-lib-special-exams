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

var EntrancePracticeExamInstructions = function EntrancePracticeExamInstructions() {
  var state = (0, _react.useContext)(_context.default);
  var createProctoredExamAttempt = state.createProctoredExamAttempt;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "h3",
    "data-testid": "exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntrancePracticeExamInstructions.title",
    defaultMessage: "Try a proctored exam"
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntrancePracticeExamInstructions.text1",
    defaultMessage: 'Get familiar with proctoring for real exams later in ' + 'the course. This practice exam has no impact on your grade in the course.'
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "pl-4 m-md-0"
  }, /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    "data-testid": "start-exam-button",
    variant: "primary",
    onClick: createProctoredExamAttempt
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntrancePracticeExamInstructions.startExamButtonText",
    defaultMessage: "Continue to my practice exam."
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "pl-md-4"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntrancePracticeExamInstructions.text2",
    defaultMessage: "You will be guided through steps to set up online proctoring software and verify your identity."
  })));
};

var _default = EntrancePracticeExamInstructions;
exports.default = _default;
//# sourceMappingURL=EntrancePracticeExamInstructions.js.map