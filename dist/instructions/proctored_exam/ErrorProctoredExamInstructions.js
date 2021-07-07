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

var ErrorProctoredExamInstructions = function ErrorProctoredExamInstructions() {
  var state = (0, _react.useContext)(_context.default);

  var _ref = state.proctoringSettings || {},
      linkUrls = _ref.link_urls,
      platformName = _ref.platform_name,
      proctoringEscalationEmail = _ref.proctoring_escalation_email;

  var contactUsUrl = linkUrls && linkUrls.contact_us;

  var renderBody = function renderBody() {
    if (proctoringEscalationEmail) {
      return /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
        id: "exam.ErrorProctoredExamInstructions.text1",
        defaultMessage: 'A system error has occurred with your proctored exam. ' + 'Please reach out to your course team at {supportLink} for assistance, ' + 'and return to the exam once you receive further instructions.',
        values: {
          supportLink: /*#__PURE__*/_react.default.createElement(_paragon.MailtoLink, {
            to: proctoringEscalationEmail
          }, proctoringEscalationEmail)
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
      id: "exam.ErrorProctoredExamInstructions.text2",
      defaultMessage: 'A system error has occurred with your proctored exam. ' + 'Please reach out to {supportLink} for assistance, and return to ' + 'the exam once you receive further instructions.',
      values: {
        supportLink: /*#__PURE__*/_react.default.createElement(_paragon.Hyperlink, {
          href: contactUsUrl,
          target: "_blank"
        }, platformName, " Support")
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "h3"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ErrorProctoredExamInstructions.title",
    defaultMessage: "Error with proctored exam"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-0"
  }, renderBody()));
};

var _default = ErrorProctoredExamInstructions;
exports.default = _default;
//# sourceMappingURL=ErrorProctoredExamInstructions.js.map