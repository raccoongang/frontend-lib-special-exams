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

var EntranceOnboardingExamInstructions = function EntranceOnboardingExamInstructions() {
  var state = (0, _react.useContext)(_context.default);
  var createProctoredExamAttempt = state.createProctoredExamAttempt,
      proctoringSettings = state.proctoringSettings;

  var _ref = proctoringSettings || {},
      providerName = _ref.provider_name,
      learnerNotificationFromEmail = _ref.learner_notification_from_email,
      integrationSpecificEmail = _ref.integration_specific_email;

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "h3",
    "data-testid": "exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.title",
    defaultMessage: "Proctoring onboarding exam"
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.text1",
    defaultMessage: "Why this is important to you:"
  })), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.listItem1",
    defaultMessage: "Establish your identity with the proctoring system to take a proctored exam"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.listItem2",
    defaultMessage: "Create your onboarding profile for faster access in the future"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.listItem3",
    defaultMessage: "Practice taking a proctored test"
  }))), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.text2",
    defaultMessage: 'Proctoring for this course is provided via {providerName}. ' + 'Onboarding review, including identity verification, can take 2+ business days.',
    values: {
      providerName: providerName
    }
  })), learnerNotificationFromEmail && /*#__PURE__*/_react.default.createElement("p", {
    "data-testid": "learner-notification-email-contact"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.text3",
    defaultMessage: 'Once your profile has been reviewed, you will receive an email ' + 'with review results. The email will come from '
  }), /*#__PURE__*/_react.default.createElement(_paragon.MailtoLink, {
    to: learnerNotificationFromEmail
  }, learnerNotificationFromEmail), /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.text4",
    defaultMessage: " Make sure this email has been added to your inbox filter."
  })), integrationSpecificEmail && /*#__PURE__*/_react.default.createElement("p", {
    "data-testid": "integration-email-contact"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.text5",
    defaultMessage: "Please contact "
  }), /*#__PURE__*/_react.default.createElement(_paragon.MailtoLink, {
    to: integrationSpecificEmail
  }, integrationSpecificEmail), /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.text6",
    defaultMessage: " if you have questions."
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "pl-4 m-md-0"
  }, /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    "data-testid": "start-exam-button",
    variant: "primary",
    onClick: createProctoredExamAttempt
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.startExamButtonText",
    defaultMessage: "Continue to onboarding"
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "pl-md-4"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.EntranceOnboardingExamInstructions.text7",
    defaultMessage: "You will be guided through online proctoring software set up and identity verification."
  })));
};

var _default = EntranceOnboardingExamInstructions;
exports.default = _default;
//# sourceMappingURL=EntranceOnboardingExamInstructions.js.map