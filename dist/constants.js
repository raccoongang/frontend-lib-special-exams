"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExamType = exports.VerificationStatus = exports.ExamAction = exports.IS_ONBOARDING_ERROR = exports.IS_INCOMPLETE_STATUS = exports.IS_STARTED_STATUS = exports.ONBOARDING_ERRORS = exports.INCOMPLETE_STATUSES = exports.ExamStatus = void 0;

/* eslint-disable import/prefer-default-export */
var ExamStatus = Object.freeze({
  ELIGIBLE: 'eligible',
  CREATED: 'created',
  DOWNLOAD_SOFTWARE_CLICKED: 'download_software_clicked',
  READY_TO_START: 'ready_to_start',
  STARTED: 'started',
  READY_TO_SUBMIT: 'ready_to_submit',
  SUBMITTED: 'submitted',
  TIMED_OUT: 'timed_out',
  VERIFIED: 'verified',
  REJECTED: 'rejected',
  ERROR: 'error',
  READY_TO_RESUME: 'ready_to_resume',
  ONBOARDING_MISSING: 'onboarding_missing',
  ONBOARDING_PENDING: 'onboarding_pending',
  ONBOARDING_FAILED: 'onboarding_failed',
  ONBOARDING_EXPIRED: 'onboarding_expired',
  DECLINED: 'declined'
});
exports.ExamStatus = ExamStatus;
var INCOMPLETE_STATUSES = [ExamStatus.ELIGIBLE, ExamStatus.CREATED, ExamStatus.DOWNLOAD_SOFTWARE_CLICKED, ExamStatus.READY_TO_START, ExamStatus.STARTED, ExamStatus.READY_TO_SUBMIT];
exports.INCOMPLETE_STATUSES = INCOMPLETE_STATUSES;
var ONBOARDING_ERRORS = [ExamStatus.ONBOARDING_EXPIRED, ExamStatus.ONBOARDING_FAILED, ExamStatus.ONBOARDING_MISSING, ExamStatus.ONBOARDING_PENDING];
exports.ONBOARDING_ERRORS = ONBOARDING_ERRORS;

var IS_STARTED_STATUS = function IS_STARTED_STATUS(status) {
  return [ExamStatus.STARTED, ExamStatus.READY_TO_SUBMIT].includes(status);
};

exports.IS_STARTED_STATUS = IS_STARTED_STATUS;

var IS_INCOMPLETE_STATUS = function IS_INCOMPLETE_STATUS(status) {
  return INCOMPLETE_STATUSES.includes(status);
};

exports.IS_INCOMPLETE_STATUS = IS_INCOMPLETE_STATUS;

var IS_ONBOARDING_ERROR = function IS_ONBOARDING_ERROR(status) {
  return ONBOARDING_ERRORS.includes(status);
}; // Available actions are taken from
// https://github.com/edx/edx-proctoring/blob/1444ca40a43869fb4e2731cea4862888c5b5f286/edx_proctoring/views.py#L765


exports.IS_ONBOARDING_ERROR = IS_ONBOARDING_ERROR;
var ExamAction = Object.freeze({
  START: 'start',
  STOP: 'stop',
  PING: 'ping',
  SUBMIT: 'submit',
  ERROR: 'error',
  RESET: 'reset_attempt',
  CLICK_DOWNLOAD_SOFTWARE: 'click_download_software',
  DECLINE: 'decline'
});
exports.ExamAction = ExamAction;
var VerificationStatus = Object.freeze({
  PENDING: 'pending',
  MUST_REVERIFY: 'must_reverify',
  APPROVED: 'approved',
  EXPIRED: 'expired',
  NONE: 'none'
});
exports.VerificationStatus = VerificationStatus;
var ExamType = Object.freeze({
  ONBOARDING: 'onboarding',
  PRACTICE: 'practice',
  PROCTORED: 'proctored',
  TIMED: 'timed'
});
exports.ExamType = ExamType;
//# sourceMappingURL=constants.js.map