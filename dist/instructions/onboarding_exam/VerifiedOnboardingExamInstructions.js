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

var VerifiedOnboardingExamInstructions = function VerifiedOnboardingExamInstructions() {
  var state = (0, _react.useContext)(_context.default);

  var _ref = state.proctoringSettings || {},
      integrationSpecificEmail = _ref.integration_specific_email;

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "h3",
    "data-testid": "exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.VerifiedOnboardingExamInstructions.title",
    defaultMessage: "Your onboarding profile was reviewed successfully"
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.VerifiedOnboardingExamInstructions.text",
    defaultMessage: 'Your profile has been established, and you\'re ready ' + 'to take proctored exams in this course'
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.VerifiedOnboardingExamInstructions.helpText1",
    defaultMessage: "Please contact "
  }), /*#__PURE__*/_react.default.createElement(_paragon.MailtoLink, {
    to: integrationSpecificEmail
  }, integrationSpecificEmail), /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.VerifiedOnboardingExamInstructions.helpText2",
    defaultMessage: " if you have questions."
  })));
};

var _default = VerifiedOnboardingExamInstructions;
exports.default = _default;
//# sourceMappingURL=VerifiedOnboardingExamInstructions.js.map