"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18n = require("@edx/frontend-platform/i18n");

var _paragon = require("@edx/paragon");

var _constants = require("../../constants");

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerificationProctoredExamInstructions = function VerificationProctoredExamInstructions(_ref) {
  var status = _ref.status,
      verificationUrl = _ref.verificationUrl;

  var renderVerificationMessage = function renderVerificationMessage() {
    switch (status) {
      case _constants.VerificationStatus.PENDING:
        return /*#__PURE__*/_react.default.createElement("p", {
          "data-testid": "verification-status-pending"
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.VerificationPendingMessage",
          defaultMessage: 'Your verification is pending. Results should ' + 'be available 2-3 days after you submit your verification.'
        }));

      case _constants.VerificationStatus.MUST_REVERIFY:
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
          "data-testid": "verification-status-must_reverify"
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.VerificationMustReverifyMessage",
          defaultMessage: 'Your verification attempt failed. Please read ' + 'our guidelines to make sure you understand the requirements ' + 'for successfully completing verification, then try again.'
        })), /*#__PURE__*/_react.default.createElement(_paragon.Button, {
          "data-testid": "verification-button",
          variant: "link",
          href: verificationUrl,
          target: "_blank"
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.VerificationProctoredExamInstructions.retryButton",
          defaultMessage: "Retry Verification"
        })));

      case _constants.VerificationStatus.EXPIRED:
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
          "data-testid": "verification-status-expired"
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.VerificationExpiredMessage",
          defaultMessage: 'Your verification has expired. You must successfully complete ' + 'a new identity verification before you can start the proctored exam.'
        })), /*#__PURE__*/_react.default.createElement(_paragon.Button, {
          "data-testid": "verification-button",
          href: verificationUrl,
          target: "_blank"
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.VerificationProctoredExamInstructions.continueButton",
          defaultMessage: "Continue to Verification"
        })));

      default:
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
          "data-testid": "verification-status-none"
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.VerificationDefaultMessage",
          defaultMessage: 'Make sure you are on a computer with a webcam, ' + 'and that you have valid photo identification such as a driver\'s ' + 'license or passport, before you continue.'
        })), /*#__PURE__*/_react.default.createElement(_paragon.Button, {
          "data-testid": "verification-button",
          href: verificationUrl,
          target: "_blank"
        }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
          id: "exam.VerificationProctoredExamInstructions.continueButton",
          defaultMessage: "Continue to Verification"
        })));
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_paragon.Container, {
    className: "border py-5 mb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "h3",
    "data-testid": "exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.VerificationProctoredExamInstructions.title",
    defaultMessage: "Complete your verification before starting the proctored exam."
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.VerificationProctoredExamInstructions.text1",
    defaultMessage: "You must successfully complete identity verification before you can start the proctored exam."
  })), renderVerificationMessage()), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};

VerificationProctoredExamInstructions.propTypes = {
  status: _propTypes.default.string.isRequired,
  verificationUrl: _propTypes.default.string
};
VerificationProctoredExamInstructions.defaultProps = {
  verificationUrl: ''
};
var _default = VerificationProctoredExamInstructions;
exports.default = _default;
//# sourceMappingURL=VerificationProctoredExamInstructions.js.map