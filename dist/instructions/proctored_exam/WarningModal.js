"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _paragon = require("@edx/paragon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WarningModal = function WarningModal(_ref) {
  var isOpen = _ref.isOpen,
      handleClose = _ref.handleClose,
      title = _ref.title,
      body = _ref.body;
  return /*#__PURE__*/_react.default.createElement(_paragon.Modal, {
    title: title,
    open: isOpen,
    onClose: function onClose() {},
    renderDefaultCloseButton: false,
    renderHeaderCloseButton: false,
    buttons: [/*#__PURE__*/_react.default.createElement(_paragon.Button, {
      variant: "tertiary",
      onClick: handleClose
    }, "Ok")],
    body: /*#__PURE__*/_react.default.createElement("p", null, body)
  });
};

WarningModal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  handleClose: _propTypes.default.func.isRequired,
  title: _propTypes.default.string.isRequired,
  body: _propTypes.default.string.isRequired
};
var _default = WarningModal;
exports.default = _default;
//# sourceMappingURL=WarningModal.js.map