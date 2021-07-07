"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchExamAttemptsData = fetchExamAttemptsData;
exports.pollExamAttempt = pollExamAttempt;
exports.createExamAttempt = createExamAttempt;
exports.updateAttemptStatus = updateAttemptStatus;
exports.stopAttempt = stopAttempt;
exports.continueAttempt = continueAttempt;
exports.submitAttempt = submitAttempt;
exports.resetAttempt = resetAttempt;
exports.endExamWithFailure = endExamWithFailure;
exports.softwareDownloadAttempt = softwareDownloadAttempt;
exports.declineAttempt = declineAttempt;
exports.fetchExamReviewPolicy = fetchExamReviewPolicy;
exports.fetchProctoringSettings = fetchProctoringSettings;
exports.fetchVerificationStatus = fetchVerificationStatus;

var _frontendPlatform = require("@edx/frontend-platform");

var _auth = require("@edx/frontend-platform/auth");

var _constants = require("../constants");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BASE_API_URL = '/api/edx_proctoring/v1/proctored_exam/attempt';

function fetchExamAttemptsData(_x, _x2) {
  return _fetchExamAttemptsData.apply(this, arguments);
}

function _fetchExamAttemptsData() {
  _fetchExamAttemptsData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(courseId, sequenceId) {
    var url, _yield$getAuthenticat, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(BASE_API_URL, "/course_id/").concat(courseId));

            if (sequenceId) {
              url.searchParams.append('content_id', sequenceId);
            }

            url.searchParams.append('is_learning_mfe', true);
            _context.next = 5;
            return (0, _auth.getAuthenticatedHttpClient)().get(url.href);

          case 5:
            _yield$getAuthenticat = _context.sent;
            data = _yield$getAuthenticat.data;
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchExamAttemptsData.apply(this, arguments);
}

function pollExamAttempt(_x3) {
  return _pollExamAttempt.apply(this, arguments);
}

function _pollExamAttempt() {
  _pollExamAttempt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
    var _yield$getAuthenticat2, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _auth.getAuthenticatedHttpClient)().get("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(url));

          case 2:
            _yield$getAuthenticat2 = _context2.sent;
            data = _yield$getAuthenticat2.data;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _pollExamAttempt.apply(this, arguments);
}

function createExamAttempt(_x4) {
  return _createExamAttempt.apply(this, arguments);
}

function _createExamAttempt() {
  _createExamAttempt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(examId) {
    var startClock,
        attemptProctored,
        url,
        payload,
        _yield$getAuthenticat3,
        data,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            startClock = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : true;
            attemptProctored = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : false;
            url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(BASE_API_URL));
            payload = {
              exam_id: examId,
              start_clock: startClock.toString(),
              attempt_proctored: attemptProctored.toString()
            };
            _context3.next = 6;
            return (0, _auth.getAuthenticatedHttpClient)().post(url.href, payload);

          case 6:
            _yield$getAuthenticat3 = _context3.sent;
            data = _yield$getAuthenticat3.data;
            return _context3.abrupt("return", data);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createExamAttempt.apply(this, arguments);
}

function updateAttemptStatus(_x5, _x6) {
  return _updateAttemptStatus.apply(this, arguments);
}

function _updateAttemptStatus() {
  _updateAttemptStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(attemptId, action) {
    var detail,
        url,
        payload,
        _yield$getAuthenticat4,
        data,
        _args4 = arguments;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            detail = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : null;
            url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(BASE_API_URL, "/").concat(attemptId));
            payload = {
              action: action
            };

            if (detail) {
              payload.detail = detail;
            }

            _context4.next = 6;
            return (0, _auth.getAuthenticatedHttpClient)().put(url.href, payload);

          case 6:
            _yield$getAuthenticat4 = _context4.sent;
            data = _yield$getAuthenticat4.data;
            return _context4.abrupt("return", data);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateAttemptStatus.apply(this, arguments);
}

function stopAttempt(_x7) {
  return _stopAttempt.apply(this, arguments);
}

function _stopAttempt() {
  _stopAttempt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(attemptId) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.STOP));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _stopAttempt.apply(this, arguments);
}

function continueAttempt(_x8) {
  return _continueAttempt.apply(this, arguments);
}

function _continueAttempt() {
  _continueAttempt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(attemptId) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.START));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _continueAttempt.apply(this, arguments);
}

function submitAttempt(_x9) {
  return _submitAttempt.apply(this, arguments);
}

function _submitAttempt() {
  _submitAttempt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(attemptId) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.SUBMIT));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _submitAttempt.apply(this, arguments);
}

function resetAttempt(_x10) {
  return _resetAttempt.apply(this, arguments);
}

function _resetAttempt() {
  _resetAttempt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(attemptId) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.RESET));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _resetAttempt.apply(this, arguments);
}

function endExamWithFailure(_x11, _x12) {
  return _endExamWithFailure.apply(this, arguments);
}

function _endExamWithFailure() {
  _endExamWithFailure = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(attemptId, error) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.ERROR, error));

          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _endExamWithFailure.apply(this, arguments);
}

function softwareDownloadAttempt(_x13) {
  return _softwareDownloadAttempt.apply(this, arguments);
}

function _softwareDownloadAttempt() {
  _softwareDownloadAttempt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(attemptId) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.CLICK_DOWNLOAD_SOFTWARE));

          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _softwareDownloadAttempt.apply(this, arguments);
}

function declineAttempt(_x14) {
  return _declineAttempt.apply(this, arguments);
}

function _declineAttempt() {
  _declineAttempt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(attemptId) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.DECLINE));

          case 1:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _declineAttempt.apply(this, arguments);
}

function fetchExamReviewPolicy(_x15) {
  return _fetchExamReviewPolicy.apply(this, arguments);
}

function _fetchExamReviewPolicy() {
  _fetchExamReviewPolicy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(examId) {
    var url, _yield$getAuthenticat5, data;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL, "/api/edx_proctoring/v1/proctored_exam/review_policy/exam_id/").concat(examId, "/"));
            _context12.next = 3;
            return (0, _auth.getAuthenticatedHttpClient)().get(url.href);

          case 3:
            _yield$getAuthenticat5 = _context12.sent;
            data = _yield$getAuthenticat5.data;
            return _context12.abrupt("return", data);

          case 6:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _fetchExamReviewPolicy.apply(this, arguments);
}

function fetchProctoringSettings(_x16) {
  return _fetchProctoringSettings.apply(this, arguments);
}

function _fetchProctoringSettings() {
  _fetchProctoringSettings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(examId) {
    var url, _yield$getAuthenticat6, data;

    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL, "/api/edx_proctoring/v1/proctored_exam/settings/exam_id/").concat(examId, "/"));
            _context13.next = 3;
            return (0, _auth.getAuthenticatedHttpClient)().get(url.href);

          case 3:
            _yield$getAuthenticat6 = _context13.sent;
            data = _yield$getAuthenticat6.data;
            return _context13.abrupt("return", data);

          case 6:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _fetchProctoringSettings.apply(this, arguments);
}

function fetchVerificationStatus() {
  return _fetchVerificationStatus.apply(this, arguments);
}

function _fetchVerificationStatus() {
  _fetchVerificationStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
    var url, _yield$getAuthenticat7, data;

    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL, "/verify_student/status/"));
            _context14.next = 3;
            return (0, _auth.getAuthenticatedHttpClient)().get(url.href);

          case 3:
            _yield$getAuthenticat7 = _context14.sent;
            data = _yield$getAuthenticat7.data;
            return _context14.abrupt("return", data);

          case 6:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _fetchVerificationStatus.apply(this, arguments);
}
//# sourceMappingURL=api.js.map