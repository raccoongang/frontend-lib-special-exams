"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ExamWrapper = _interopRequireDefault(require("../exam/ExamWrapper"));

var _ExamStateProvider = _interopRequireDefault(require("./ExamStateProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SequenceExamWrapper is the component responsible for handling special exams.
 * It takes control over rendering exam instructions unless exam is started only if
 * current sequence item is timed exam. Otherwise, renders any children elements passed.
 * @param children - Current course sequence item content (e.g. unit, navigation buttons etc.)
 * @returns {JSX.Element}
 * @example
 * <SequenceExamWrapper sequence={sequence} courseId={courseId}>
 *   {sequenceContent}
 * </SequenceExamWrapper>
 */
var SequenceExamWrapper = function SequenceExamWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(_ExamStateProvider.default, null, /*#__PURE__*/_react.default.createElement(_ExamWrapper.default, props));
};

var _default = SequenceExamWrapper;
exports.default = _default;
//# sourceMappingURL=SequenceExamWrapper.js.map