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

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var OnboardingErrorProctoredExamInstructions = function OnboardingErrorProctoredExamInstructions() {
  var state = (0, _react.useContext)(_context.default);
  var exam = state.exam,
      proctoringSettings = state.proctoringSettings;
  var attempt = exam.attempt,
      onboardingLink = exam.onboarding_link;
  var integrationSpecificEmail = proctoringSettings.integration_specific_email,
      providerName = proctoringSettings.provider_name;

  var renderBody = function renderBody() {
    switch (attempt.attempt_status) {
      case _constants.ExamStatus.ONBOARDING_MISSING:
      case _constants.ExamStatus.ONBOARDING_EXPIRED:
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
          "data-testid": "onboarding_missing"
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.OnboardingErrorProctoredExamInstructions.missingText",
          defaultMessage: "Please complete an onboarding exam before attempting this exam."
        })), onboardingLink && /*#__PURE__*/_react.default.createElement(_paragon.Hyperlink, {
          href: onboardingLink
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.OnboardingErrorProctoredExamInstructions.onboardingButtonText",
          defaultMessage: "Navigate to onboarding exam"
        })));

      case _constants.ExamStatus.ONBOARDING_PENDING:
        return /*#__PURE__*/_react.default.createElement("p", {
          "data-testid": "onboarding_pending"
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.OnboardingErrorProctoredExamInstructions.pendingText",
          defaultMessage: 'Your onboarding exam is being reviewed. Before attempting this exam,' + ' please allow 2+ business days for your onboarding exam to be reviewed.'
        }));

      case _constants.ExamStatus.ONBOARDING_FAILED:
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
          "data-testid": "onboarding_failed"
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.OnboardingErrorProctoredExamInstructions.failedText",
          defaultMessage: "Your onboarding exam failed to pass all requirements."
        })), onboardingLink && /*#__PURE__*/_react.default.createElement(_paragon.Hyperlink, {
          href: onboardingLink
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.OnboardingErrorProctoredExamInstructions.onboardingButtonText",
          defaultMessage: "Navigate to onboarding exam"
        })));

      default:
        return null;
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_paragon.Container, {
    className: "border py-5 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "h3"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.OnboardingErrorProctoredExamInstructions.title",
    defaultMessage: "You must complete an onboarding exam before taking this proctored exam"
  })), renderBody(), integrationSpecificEmail && /*#__PURE__*/_react.default.createElement("p", {
    className: "pt-2"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.OnboardingErrorProctoredExamInstructions.providerInfo",
    defaultMessage: 'Proctoring for your exam is provided via {providerName}. ' + 'If you have questions about the status of your onboarding exam, contact ',
    values: {
      providerName: providerName
    }
  }), /*#__PURE__*/_react.default.createElement(_paragon.MailtoLink, {
    to: integrationSpecificEmail
  }, integrationSpecificEmail))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};

var _default = OnboardingErrorProctoredExamInstructions;
exports.default = _default;
//# sourceMappingURL=OnboardingErrorExamInstructions.js.map