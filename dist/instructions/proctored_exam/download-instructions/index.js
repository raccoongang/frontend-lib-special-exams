"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18n = require("@edx/frontend-platform/i18n");

var _paragon = require("@edx/paragon");

var _context = _interopRequireDefault(require("../../../context"));

var _constants = require("../../../constants");

var _WarningModal = _interopRequireDefault(require("../WarningModal"));

var _api = require("../../../data/api");

var _messages = _interopRequireDefault(require("../messages"));

var _ProviderInstructions = _interopRequireDefault(require("./ProviderInstructions"));

var _DefaultInstructions = _interopRequireDefault(require("./DefaultInstructions"));

var _DownloadButtons = _interopRequireDefault(require("./DownloadButtons"));

var _Footer = _interopRequireDefault(require("../Footer"));

var _SkipProctoredExamButton = _interopRequireDefault(require("../SkipProctoredExamButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DownloadSoftwareProctoredExamInstructions = function DownloadSoftwareProctoredExamInstructions(_ref) {
  var intl = _ref.intl,
      skipProctoredExam = _ref.skipProctoredExam;
  var state = (0, _react.useContext)(_context.default);
  var proctoringSettings = state.proctoringSettings,
      exam = state.exam,
      getExamAttemptsData = state.getExamAttemptsData,
      allowProctoringOptOut = state.allowProctoringOptOut;
  var attempt = exam.attempt,
      courseId = exam.course_id,
      sequenceId = exam.content_id;
  var pollUrl = attempt.exam_started_poll_url,
      examCode = attempt.attempt_code,
      attemptId = attempt.attempt_id,
      downloadUrl = attempt.software_download_url;
  var providerName = proctoringSettings.provider_name,
      supportEmail = proctoringSettings.provider_tech_support_email,
      supportPhone = proctoringSettings.provider_tech_support_phone,
      proctoringBackend = proctoringSettings.exam_proctoring_backend;

  var _ref2 = proctoringBackend || {},
      instructions = _ref2.instructions;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      systemCheckStatus = _useState2[0],
      setSystemCheckStatus = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      downloadClicked = _useState4[0],
      setDownloadClicked = _useState4[1];

  var withProviderInstructions = instructions && instructions.length > 0;

  var handleDownloadClick = function handleDownloadClick() {
    (0, _api.pollExamAttempt)("".concat(pollUrl, "?sourceid=instructions")).then(function (data) {
      if (data.status === _constants.ExamStatus.READY_TO_START) {
        setSystemCheckStatus('success');
      } else {
        (0, _api.softwareDownloadAttempt)(attemptId);
        window.open(downloadUrl, '_blank');
      }
    });
    setDownloadClicked(true);
  };

  var handleStartExamClick = function handleStartExamClick() {
    (0, _api.pollExamAttempt)("".concat(attempt.exam_started_poll_url, "?sourceid=instructions")).then(function (data) {
      return data.status === _constants.ExamStatus.READY_TO_START ? getExamAttemptsData(courseId, sequenceId) : setSystemCheckStatus('failure');
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_paragon.Container, {
    className: "border py-5 mb-4"
  }, /*#__PURE__*/_react.default.createElement(_WarningModal.default, {
    isOpen: Boolean(systemCheckStatus),
    title: systemCheckStatus === 'success' ? intl.formatMessage(_messages.default.softwareLoadedModalTitle) : intl.formatMessage(_messages.default.cannotStartModalTitle),
    body: systemCheckStatus === 'success' ? intl.formatMessage(_messages.default.softwareLoadedModalBody) : intl.formatMessage(_messages.default.cannotStartModalBody),
    handleClose: function handleClose() {
      return setSystemCheckStatus('');
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "h3",
    "data-testid": "exam-instructions-title"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DownloadSoftwareProctoredExamInstructions.title",
    defaultMessage: "Set up and start your proctored exam."
  })), withProviderInstructions ? /*#__PURE__*/_react.default.createElement(_ProviderInstructions.default, {
    providerName: providerName,
    supportEmail: supportEmail,
    supportPhone: supportPhone,
    instructions: instructions
  }) : /*#__PURE__*/_react.default.createElement(_DefaultInstructions.default, {
    code: examCode
  }), /*#__PURE__*/_react.default.createElement(_DownloadButtons.default, {
    downloadUrl: downloadUrl,
    onDownloadClick: handleDownloadClick,
    onStartExamClick: handleStartExamClick,
    downloadClicked: downloadClicked
  }), !withProviderInstructions && /*#__PURE__*/_react.default.createElement("p", {
    className: "pt-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "h4"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step3.title",
    defaultMessage: "Step 3."
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step3.body",
    defaultMessage: 'For security and exam integrity reasons, ' + 'we ask you to sign in to your edX account. Then we will ' + 'direct you to the RPNow proctoring experience.'
  })))), allowProctoringOptOut && /*#__PURE__*/_react.default.createElement(_SkipProctoredExamButton.default, {
    handleClick: skipProctoredExam
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};

DownloadSoftwareProctoredExamInstructions.propTypes = {
  intl: _i18n.intlShape.isRequired,
  skipProctoredExam: _propTypes.default.func.isRequired
};

var _default = (0, _i18n.injectIntl)(DownloadSoftwareProctoredExamInstructions);

exports.default = _default;
//# sourceMappingURL=index.js.map