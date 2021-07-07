"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _paragon = require("@edx/paragon");

var _i18n = require("@edx/frontend-platform/i18n");

var _emitter = _interopRequireDefault(require("../data/emitter"));

var _constants = require("../constants");

var _proctored_exam = require("./proctored_exam");

var _timed_exam = require("./timed_exam");

var _Footer = _interopRequireDefault(require("./proctored_exam/Footer"));

var _context = _interopRequireDefault(require("../context"));

var _events = require("../timer/events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SubmitExamInstructions = function SubmitExamInstructions() {
  var state = (0, _react.useContext)(_context.default);
  var exam = state.exam,
      continueExam = state.continueExam,
      activeAttempt = state.activeAttempt;
  var timeRemaining = activeAttempt.time_remaining_seconds;

  var _ref = exam || {},
      examType = _ref.type;

  var _useState = (0, _react.useState)(timeRemaining > 0),
      _useState2 = _slicedToArray(_useState, 2),
      canContinue = _useState2[0],
      setCanContinue = _useState2[1];

  var hideContinueButton = function hideContinueButton() {
    return setCanContinue(false);
  };

  (0, _react.useEffect)(function () {
    _emitter.default.once(_events.TIMER_REACHED_NULL, hideContinueButton);

    return function () {
      _emitter.default.off(_events.TIMER_REACHED_NULL, hideContinueButton);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_paragon.Container, {
    className: "border py-5 mb-4"
  }, examType === _constants.ExamType.TIMED ? /*#__PURE__*/_react.default.createElement(_timed_exam.SubmitTimedExamInstructions, null) : /*#__PURE__*/_react.default.createElement(_proctored_exam.SubmitProctoredExamInstructions, null), canContinue && /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    variant: "outline-primary",
    onClick: continueExam,
    "data-testid": "continue-exam-button"
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.SubmitExamInstructions.continueButton",
    defaultMessage: "No, I'd like to continue working"
  }))), examType !== _constants.ExamType.TIMED && /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};

var _default = SubmitExamInstructions;
exports.default = _default;
//# sourceMappingURL=SubmitInstructions.js.map