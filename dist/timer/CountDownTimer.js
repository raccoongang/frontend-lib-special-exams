"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _paragon = require("@edx/paragon");

var _icons = require("@edx/paragon/icons");

var _i18n = require("@edx/frontend-platform/i18n");

var _TimerProvider = require("./TimerProvider");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Display timer textual value. Display hide/show button.
 */
var CountDownTimer = (0, _i18n.injectIntl)(function (props) {
  var timer = (0, _react.useContext)(_TimerProvider.TimerContext);

  var _useToggle = (0, _paragon.useToggle)(true),
      _useToggle2 = _slicedToArray(_useToggle, 3),
      isShowTimer = _useToggle2[0],
      showTimer = _useToggle2[1],
      hideTimer = _useToggle2[2];

  var intl = props.intl;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "exam-timer-clock d-flex justify-content-between",
    style: {
      minWidth: isShowTimer ? '110px' : '32px'
    }
  }, isShowTimer && timer.getTimeString(), /*#__PURE__*/_react.default.createElement("span", {
    className: "pl-2 d-flex flex-column justify-content-center",
    id: "toggle_timer",
    "aria-pressed": isShowTimer ? 'false' : 'true',
    "aria-label": isShowTimer ? intl.formatMessage({
      id: 'exam.aria.hideTimer',
      defaultMessage: 'Hide Timer'
    }) : intl.formatMessage({
      id: 'exam.aria.showTimer',
      defaultMessage: 'Show Timer'
    })
  }, isShowTimer ? /*#__PURE__*/_react.default.createElement(_paragon.Icon, {
    "data-testid": "hide-timer",
    src: _icons.VisibilityOff,
    onClick: hideTimer
  }) : /*#__PURE__*/_react.default.createElement(_paragon.Icon, {
    "data-testid": "show-timer",
    src: _icons.Visibility,
    onClick: showTimer
  })));
});
var _default = CountDownTimer;
exports.default = _default;
//# sourceMappingURL=CountDownTimer.js.map