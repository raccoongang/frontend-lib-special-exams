"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@edx/frontend-platform/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Exam = _interopRequireDefault(require("./Exam"));

var _context2 = _interopRequireDefault(require("../context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Exam wrapper is responsible for triggering initial exam data fetching and rendering Exam.
 */
var ExamWrapper = function ExamWrapper(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var state = (0, _react.useContext)(_context2.default);

  var _useContext = (0, _react.useContext)(_react2.AppContext),
      authenticatedUser = _useContext.authenticatedUser;

  var sequence = props.sequence,
      courseId = props.courseId;
  var getExamAttemptsData = state.getExamAttemptsData,
      getAllowProctoringOptOut = state.getAllowProctoringOptOut;

  var loadInitialData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getExamAttemptsData(courseId, sequence.id);

            case 2:
              _context.next = 4;
              return getAllowProctoringOptOut(sequence.allowProctoringOptOut);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadInitialData() {
      return _ref2.apply(this, arguments);
    };
  }(); // if the user is browsing public content (not logged in) they cannot be in an exam
  // any requests for exam state will 403 so just short circuit this component here


  if (!authenticatedUser) {
    return children;
  }

  (0, _react.useEffect)(function () {
    loadInitialData();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Exam.default, {
    isTimeLimited: sequence.isTimeLimited
  }, children);
};

ExamWrapper.propTypes = {
  sequence: _propTypes.default.shape({
    id: _propTypes.default.string,
    isTimeLimited: _propTypes.default.bool,
    allowProctoringOptOut: _propTypes.default.bool
  }),
  courseId: _propTypes.default.string.isRequired,
  children: _propTypes.default.element.isRequired
};
ExamWrapper.defaultProps = {
  sequence: {}
};
var _default = ExamWrapper;
exports.default = _default;
//# sourceMappingURL=ExamWrapper.js.map