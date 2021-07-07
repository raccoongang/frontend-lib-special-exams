"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExamAPIError;

var _react = _interopRequireWildcard(require("react"));

var _paragon = require("@edx/paragon");

var _icons = require("@edx/paragon/icons");

var _i18n = require("@edx/frontend-platform/i18n");

var _context = _interopRequireDefault(require("../context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ExamAPIError() {
  var state = (0, _react.useContext)(_context.default);
  var apiErrorMsg = state.apiErrorMsg,
      proctoringSettings = state.proctoringSettings;
  var contactUs = proctoringSettings.contact_us,
      platformName = proctoringSettings.platform_name;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showError = _useState2[0],
      setShowError = _useState2[1];

  var renderHeading = function renderHeading() {
    if (contactUs && platformName) {
      return /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
        id: "exam.apiError.text1",
        defaultMessage: 'A system error has occurred with your exam. ' + 'Please reach out to {supportLink} for assistance, ' + 'and return to the exam once you receive further instructions.',
        values: {
          supportLink: /*#__PURE__*/_react.default.createElement("a", {
            "data-testid": "support-link",
            href: contactUs,
            target: "_blank",
            rel: "noopener noreferrer"
          }, platformName, " Support")
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
      id: "exam.apiError.text2",
      defaultMessage: "A system error has occurred with your exam. Please reach out to support for assistance."
    });
  };

  return /*#__PURE__*/_react.default.createElement(_paragon.Alert, {
    variant: "danger",
    "data-testid": "exam-api-error-component"
  }, /*#__PURE__*/_react.default.createElement(_paragon.Icon, {
    src: _icons.Info,
    className: "alert-icon"
  }), /*#__PURE__*/_react.default.createElement(_paragon.Alert.Heading, {
    "data-testid": "heading"
  }, renderHeading()), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.apiError.details",
    defaultMessage: "Details"
  }), ":", /*#__PURE__*/_react.default.createElement("span", {
    className: "pl-2"
  }, /*#__PURE__*/_react.default.createElement(_paragon.Alert.Link, {
    onClick: function onClick() {
      return setShowError(!showError);
    },
    "data-testid": "show-button"
  }, showError ? /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.apiError.showLink",
    defaultMessage: "Hide"
  }) : /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.apiError.hideLink",
    defaultMessage: "Show"
  })))), showError && /*#__PURE__*/_react.default.createElement("p", {
    "data-testid": "error-details"
  }, apiErrorMsg));
}
//# sourceMappingURL=ExamAPIError.js.map