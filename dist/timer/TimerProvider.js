"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TimerContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _paragon = require("@edx/paragon");

var _data = require("../data");

var _events = require("./events");

var _hocs = require("../hocs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* give an extra 5 seconds where the timer holds at 00:00 before page refreshes */
var GRACE_PERIOD_SECS = 5;
var POLL_INTERVAL = 60;

var TimerContext = /*#__PURE__*/_react.default.createContext({});

exports.TimerContext = TimerContext;

var mapStateToProps = function mapStateToProps(state) {
  var activeAttempt = state.examState.activeAttempt;
  return {
    attempt: activeAttempt
  };
};

var getFormattedRemainingTime = function getFormattedRemainingTime(timeLeft) {
  return {
    hours: Math.floor(timeLeft / (60 * 60)),
    minutes: Math.floor(timeLeft / 60 % 60),
    seconds: Math.floor(timeLeft % 60)
  };
};

var TimerServiceProvider = function TimerServiceProvider(_ref) {
  var children = _ref.children,
      attempt = _ref.attempt,
      pollHandler = _ref.pollHandler,
      pingHandler = _ref.pingHandler;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      timeState = _useState2[0],
      setTimeState = _useState2[1];

  var _useToggle = (0, _paragon.useToggle)(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      limitReached = _useToggle2[0],
      setLimitReached = _useToggle2[1];

  var workerUrl = attempt.desktop_application_js_url,
      pingInterval = attempt.ping_interval,
      timeRemaining = attempt.time_remaining_seconds,
      criticalLowTime = attempt.critically_low_threshold_sec,
      lowTime = attempt.low_threshold_sec;
  var startValue = Math.floor(timeRemaining);
  var LIMIT = GRACE_PERIOD_SECS ? 0 - GRACE_PERIOD_SECS : 0;

  var getTimeString = function getTimeString() {
    return Object.values(timeState).map(function (item) {
      // Do not show timer negative value.
      // User will see 00:00:00 during grace period if any.
      var value = item < 0 ? 0 : item;
      return value < 10 ? "0".concat(value) : value;
    }).join(':');
  };

  var pollExam = function pollExam() {
    var url = attempt.exam_started_poll_url;
    var queryString = "?sourceid=in_exam&proctored=".concat(attempt.taking_as_proctored);
    pollHandler(url + queryString);
  };

  var processTimeLeft = function processTimeLeft(timer, secondsLeft) {
    if (secondsLeft <= criticalLowTime) {
      _data.Emitter.emit(_events.TIMER_IS_CRITICALLY_LOW);
    } else if (secondsLeft <= lowTime) {
      _data.Emitter.emit(_events.TIMER_IS_LOW);
    } // Used to hide continue exam button on submit exam pages.
    // Since TIME_LIMIT_REACHED is fired after the grace period we
    // need to emit separate event when timer reaches 00:00


    if (secondsLeft <= 0) {
      _data.Emitter.emit(_events.TIMER_REACHED_NULL);
    }

    if (!limitReached && secondsLeft < LIMIT) {
      clearInterval(timer);
      setLimitReached();

      _data.Emitter.emit(_events.TIMER_LIMIT_REACHED);
    }
  };

  (0, _react.useEffect)(function () {
    var secondsLeft = startValue;
    var timerTick = 0;
    var interval = setInterval(function () {
      secondsLeft -= 1;
      timerTick += 1;
      setTimeState(getFormattedRemainingTime(secondsLeft));
      processTimeLeft(interval, secondsLeft); // no polling during grace period

      if (timerTick % POLL_INTERVAL === 0 && secondsLeft >= 0) {
        pollExam();
      } // if exam is proctored ping provider app also


      if (workerUrl && timerTick % pingInterval === pingInterval / 2) {
        pingHandler(pingInterval, workerUrl);
      }
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(TimerContext.Provider, {
    value: {
      timeState: timeState,
      getTimeString: getTimeString
    }
  }, children);
};

TimerServiceProvider.propTypes = {
  attempt: _propTypes.default.shape({
    time_remaining_seconds: _propTypes.default.number.isRequired,
    critically_low_threshold_sec: _propTypes.default.number.isRequired,
    low_threshold_sec: _propTypes.default.number.isRequired,
    exam_started_poll_url: _propTypes.default.string,
    desktop_application_js_url: _propTypes.default.string,
    ping_interval: _propTypes.default.number,
    taking_as_proctored: _propTypes.default.bool,
    attempt_status: _propTypes.default.string.isRequired
  }).isRequired,
  children: _propTypes.default.element.isRequired,
  pollHandler: _propTypes.default.func,
  pingHandler: _propTypes.default.func
};
TimerServiceProvider.defaultProps = {
  pollHandler: function pollHandler() {},
  pingHandler: function pingHandler() {}
};

var _default = (0, _hocs.withExamStore)(TimerServiceProvider, mapStateToProps);

exports.default = _default;
//# sourceMappingURL=TimerProvider.js.map