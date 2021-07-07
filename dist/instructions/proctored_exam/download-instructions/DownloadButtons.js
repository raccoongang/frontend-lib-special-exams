"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _paragon = require("@edx/paragon");

var _i18n = require("@edx/frontend-platform/i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DownloadButtons = function DownloadButtons(_ref) {
  var downloadUrl = _ref.downloadUrl,
      downloadClicked = _ref.downloadClicked,
      onDownloadClick = _ref.onDownloadClick,
      onStartExamClick = _ref.onStartExamClick;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, downloadUrl && /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    "data-testid": "exam.DownloadSoftwareProctoredExamInstructions-start-system-check-button",
    variant: downloadClicked ? 'outline-secondary' : 'primary',
    onClick: onDownloadClick
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DownloadSoftwareProctoredExamInstructions.startSystemCheckButton",
    defaultMessage: "Start System Check"
  })), "\xA0", /*#__PURE__*/_react.default.createElement(_paragon.Button, {
    "data-testid": "exam.DownloadSoftwareProctoredExamInstructions-start-exam-button",
    variant: downloadUrl && !downloadClicked ? 'outline-secondary' : 'primary',
    onClick: onStartExamClick
  }, /*#__PURE__*/_react.default.createElement(_i18n.FormattedMessage, {
    id: "exam.DownloadSoftwareProctoredExamInstructions.startExamButton",
    defaultMessage: "Start Exam"
  })));
};

DownloadButtons.propTypes = {
  downloadUrl: _propTypes.default.string.isRequired,
  downloadClicked: _propTypes.default.bool.isRequired,
  onDownloadClick: _propTypes.default.func.isRequired,
  onStartExamClick: _propTypes.default.func.isRequired
};
var _default = DownloadButtons;
exports.default = _default;
//# sourceMappingURL=DownloadButtons.js.map