"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _proctored_exam = require("./proctored_exam");

var _helpers = require("../helpers");

var _constants = require("../constants");

var _context = _interopRequireDefault(require("../context"));

var _EntranceInstructions = _interopRequireDefault(require("./EntranceInstructions"));

var _SubmitInstructions = _interopRequireDefault(require("./SubmitInstructions"));

var _RejectedInstructions = _interopRequireDefault(require("./RejectedInstructions"));

var _ErrorInstructions = _interopRequireDefault(require("./ErrorInstructions"));

var _SubmittedInstructions = _interopRequireDefault(require("./SubmittedInstructions"));

var _VerifiedInstructions = _interopRequireDefault(require("./VerifiedInstructions"));

var _ExpiredInstructions = _interopRequireDefault(require("./ExpiredInstructions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Instructions = function Instructions(_ref) {
  var children = _ref.children;
  var state = (0, _react.useContext)(_context.default);
  var exam = state.exam,
      verification = state.verification;

  var _ref2 = exam || {},
      attempt = _ref2.attempt,
      examType = _ref2.type,
      prerequisitesData = _ref2.prerequisite_status;

  var prerequisitesPassed = prerequisitesData ? prerequisitesData.are_prerequisites_satisifed : true;
  var verificationStatus = verification.status || '';

  var _ref3 = attempt || {},
      verificationUrl = _ref3.verification_url;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      skipProctoring = _useState2[0],
      toggleSkipProctoring = _useState2[1];

  var toggleSkipProctoredExam = function toggleSkipProctoredExam() {
    return toggleSkipProctoring(!skipProctoring);
  };

  var expired = (0, _helpers.shouldRenderExpiredPage)(exam);

  if (expired) {
    return /*#__PURE__*/_react.default.createElement(_ExpiredInstructions.default, null);
  }

  var renderEmptyAttemptInstructions = function renderEmptyAttemptInstructions() {
    var component = /*#__PURE__*/_react.default.createElement(_EntranceInstructions.default, {
      examType: examType,
      skipProctoredExam: toggleSkipProctoredExam
    });

    if (examType === _constants.ExamType.PROCTORED && !prerequisitesPassed) {
      component = /*#__PURE__*/_react.default.createElement(_proctored_exam.PrerequisitesProctoredExamInstructions, {
        skipProctoredExam: toggleSkipProctoredExam
      });
    }

    return component;
  }; // The API does not explicitly return 'expired' status, so we have to check manually.
  // expires attribute is returned only for approved status, so it is safe to do this
  // (meaning we won't override 'must_reverify' status for example)


  if (verification.expires && new Date() > new Date(verification.expires)) {
    verificationStatus = _constants.VerificationStatus.EXPIRED;
  }

  switch (true) {
    case examType === _constants.ExamType.PROCTORED && skipProctoring:
      return /*#__PURE__*/_react.default.createElement(_proctored_exam.SkipProctoredExamInstruction, {
        cancelSkipProctoredExam: toggleSkipProctoredExam
      });

    case (0, _helpers.isEmpty)(attempt) || !attempt.attempt_id:
      return renderEmptyAttemptInstructions();

    case attempt.attempt_status === _constants.ExamStatus.CREATED:
      return examType === _constants.ExamType.PROCTORED && verificationStatus !== _constants.VerificationStatus.APPROVED ? /*#__PURE__*/_react.default.createElement(_proctored_exam.VerificationProctoredExamInstructions, {
        status: verificationStatus,
        verificationUrl: verificationUrl
      }) : /*#__PURE__*/_react.default.createElement(_proctored_exam.DownloadSoftwareProctoredExamInstructions, {
        skipProctoredExam: toggleSkipProctoredExam
      });

    case attempt.attempt_status === _constants.ExamStatus.DOWNLOAD_SOFTWARE_CLICKED:
      return /*#__PURE__*/_react.default.createElement(_proctored_exam.DownloadSoftwareProctoredExamInstructions, null);

    case attempt.attempt_status === _constants.ExamStatus.READY_TO_START:
      return /*#__PURE__*/_react.default.createElement(_proctored_exam.ReadyToStartProctoredExamInstructions, null);

    case attempt.attempt_status === _constants.ExamStatus.READY_TO_SUBMIT:
      return /*#__PURE__*/_react.default.createElement(_SubmitInstructions.default, null);

    case attempt.attempt_status === _constants.ExamStatus.SUBMITTED:
      return /*#__PURE__*/_react.default.createElement(_SubmittedInstructions.default, {
        examType: examType
      });

    case attempt.attempt_status === _constants.ExamStatus.VERIFIED:
      return /*#__PURE__*/_react.default.createElement(_VerifiedInstructions.default, {
        examType: examType
      });

    case attempt.attempt_status === _constants.ExamStatus.REJECTED:
      return /*#__PURE__*/_react.default.createElement(_RejectedInstructions.default, {
        examType: examType
      });

    case attempt.attempt_status === _constants.ExamStatus.ERROR:
      return /*#__PURE__*/_react.default.createElement(_ErrorInstructions.default, {
        examType: examType
      });

    case attempt.attempt_status === _constants.ExamStatus.READY_TO_RESUME:
      return /*#__PURE__*/_react.default.createElement(_EntranceInstructions.default, {
        examType: examType,
        skipProctoredExam: toggleSkipProctoredExam
      });

    case examType === _constants.ExamType.PROCTORED && (0, _constants.IS_ONBOARDING_ERROR)(attempt.attempt_status):
      return /*#__PURE__*/_react.default.createElement(_proctored_exam.OnboardingErrorProctoredExamInstructions, null);

    default:
      return children;
  }
};

Instructions.propTypes = {
  children: _propTypes.default.element.isRequired
};
var _default = Instructions;
exports.default = _default;
//# sourceMappingURL=index.js.map