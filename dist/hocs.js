"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withExamStore = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _helpers = require("./helpers");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// eslint-disable-next-line import/prefer-default-export
var withExamStore = function withExamStore(WrappedComponent) {
  var mapStateToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var dispatchActions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var ConnectedComp = (0, _reactRedux.connect)(mapStateToProps, dispatchActions)(WrappedComponent);

  var retValue = function retValue(props) {
    return /*#__PURE__*/_react.default.createElement(ConnectedComp, _extends({
      store: _data.store
    }, props));
  };

  retValue.displayName = "WithExamStore(".concat((0, _helpers.getDisplayName)(WrappedComponent), ")");
  return retValue;
};

exports.withExamStore = withExamStore;
//# sourceMappingURL=hocs.js.map