"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldRenderExpiredPage = exports.getDisplayName = exports.isEmpty = void 0;

var _constants = require("./constants");

var isEmpty = function isEmpty(obj) {
  if (!obj) {
    return true;
  }

  return Object.keys(obj).length === 0;
};

exports.isEmpty = isEmpty;

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

exports.getDisplayName = getDisplayName;

var shouldRenderExpiredPage = function shouldRenderExpiredPage(exam) {
  var examType = exam.type,
      passedDueDate = exam.passed_due_date,
      attempt = exam.attempt;

  if (!passedDueDate || examType === _constants.ExamType.PRACTICE) {
    return false;
  }

  return isEmpty(attempt) || !attempt.attempt_id || (0, _constants.IS_INCOMPLETE_STATUS)(attempt.attempt_status);
};

exports.shouldRenderExpiredPage = shouldRenderExpiredPage;
//# sourceMappingURL=helpers.js.map