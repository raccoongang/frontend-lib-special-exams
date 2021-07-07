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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SubmittedOnboardingExamInstructions = function SubmittedOnboardingExamInstructions() {
  var _useToggle = (0, _paragon.useToggle)(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      isConfirm = _useToggle2[0],
      confirm = _useToggle2[1];

  var state = (0, _react.useContext)(_context.default);
  var proctoringSettings = state.proctoringSettings,
      resetExam = state.resetExam;

  var _ref = proctoringSettings || {},
      learnerNotificationFromEmail = _ref.learner_notification_from_email,
      integrationSpecificEmail = _ref.integration_specific_email;

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "h3",
    "data-testid": "exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedOnboardingExamInstructions.title",
    defaultMessage: "You have submitted this onboarding exam"
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.text1",
    defaultMessage: 'If you do not have an onboarding profile with the system, Verificient ' + 'will review your submission and create an onboarding profile to grant you access to ' + 'proctored exams. Onboarding profile review can take 2+ business days.'
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.text2",
    defaultMessage: 'Once your profile has been reviewed, you will receive an email with ' + 'review results. The email will come from '
  }), /*#__PURE__*/_react.default.createElement(_paragon.MailtoLink, {
    to: learnerNotificationFromEmail
  }, learnerNotificationFromEmail), /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.text3",
    defaultMessage: ', so make sure this email has been added ' + 'to your inbox filter.'
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.text4",
    defaultMessage: 'If you do not have an onboarding profile with the system, Verificient ' + 'will review your submission and create an onboarding profile to grant you access to ' + 'proctored exams. Onboarding profile review can take 2+ business days.'
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.text5",
    defaultMessage: 'If you already have an onboarding profile approved through another course, ' + 'this submission will not be reviewed. You may retry this exam at any time to validate that ' + 'your setup still meets the requirements for proctoring.'
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    variant: "link",
    onClick: confirm
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.confirm",
    defaultMessage: "I understand and want to reset this onboarding exam."
  }))), /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    "data-testid": "retry-exam-button",
    variant: "primary",
    onClick: resetExam,
    disabled: !isConfirm
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.ErrorOnboardingExamInstructions.retryExamButton",
    defaultMessage: "Retry my exam"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "mt-4"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.text6",
    defaultMessage: "Please contact "
  }), /*#__PURE__*/_react.default.createElement(_paragon.MailtoLink, {
    to: integrationSpecificEmail
  }, integrationSpecificEmail), /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmittedProctoredExamInstructions.text7",
    defaultMessage: " if you have questions."
  })));
};

var _default = SubmittedOnboardingExamInstructions;
exports.default = _default;
//# sourceMappingURL=SubmittedOnboardingExamInstructions.js.map