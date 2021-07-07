"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExamAttemptsData = getExamAttemptsData;
exports.getProctoringSettings = getProctoringSettings;
exports.startTimedExam = startTimedExam;
exports.createProctoredExamAttempt = createProctoredExamAttempt;
exports.startProctoredExam = startProctoredExam;
exports.skipProctoringExam = skipProctoringExam;
exports.pollAttempt = pollAttempt;
exports.stopExam = stopExam;
exports.continueExam = continueExam;
exports.resetExam = resetExam;
exports.submitExam = submitExam;
exports.expireExam = expireExam;
exports.pingAttempt = pingAttempt;
exports.startProctoringSoftwareDownload = startProctoringSoftwareDownload;
exports.getVerificationData = getVerificationData;
exports.getExamReviewPolicy = getExamReviewPolicy;
exports.getAllowProctoringOptOut = getAllowProctoringOptOut;

var _logging = require("@edx/frontend-platform/logging");

var _api = require("./api");

var _helpers = require("../helpers");

var _slice = require("./slice");

var _constants = require("../constants");

var _handlers = require("./messages/handlers");

var _constants2 = _interopRequireDefault(require("./messages/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function handleAPIError(error, dispatch) {
  var message = error.message,
      detail = error.detail;
  dispatch((0, _slice.setApiError)({
    errorMsg: message || detail
  }));
}
/**
 * Fetch attempt data and update exam state after performing another action if it is provided.
 * It is assumed that action somehow modifies attempt in the backend, that's why the state needs
 * to be updated.
 * @param courseId - id of a course
 * @param sequenceId - id of a sequence
 * @param promiseToBeResolvedFirst - a promise that should get resolved before fetching attempt data
 * @param noLoading - if set to false shows spinner while executing the function
 */


function updateAttemptAfter(courseId, sequenceId) {
  var promiseToBeResolvedFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var noLoading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var response, attemptData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!noLoading) {
                dispatch((0, _slice.setIsLoading)({
                  isLoading: true
                }));
              }

              if (!promiseToBeResolvedFirst) {
                _context.next = 15;
                break;
              }

              _context.prev = 2;
              _context.next = 5;
              return promiseToBeResolvedFirst;

            case 5:
              response = _context.sent;

              if (!(!response || !response.exam_attempt_id)) {
                _context.next = 9;
                break;
              }

              if (!noLoading) {
                dispatch((0, _slice.setIsLoading)({
                  isLoading: false
                }));
              }

              return _context.abrupt("return");

            case 9:
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              handleAPIError(_context.t0, dispatch);

              if (!noLoading) {
                dispatch((0, _slice.setIsLoading)({
                  isLoading: false
                }));
              }

            case 15:
              _context.prev = 15;
              _context.next = 18;
              return (0, _api.fetchExamAttemptsData)(courseId, sequenceId);

            case 18:
              attemptData = _context.sent;
              dispatch((0, _slice.setExamState)({
                exam: attemptData.exam,
                activeAttempt: !(0, _helpers.isEmpty)(attemptData.active_attempt) ? attemptData.active_attempt : null
              }));
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t1 = _context["catch"](15);
              handleAPIError(_context.t1, dispatch);

            case 25:
              _context.prev = 25;

              if (!noLoading) {
                dispatch((0, _slice.setIsLoading)({
                  isLoading: false
                }));
              }

              return _context.finish(25);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11], [15, 22, 25, 28]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function getExamAttemptsData(courseId, sequenceId) {
  return updateAttemptAfter(courseId, sequenceId);
}

function getProctoringSettings() {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState) {
      var exam, proctoringSettings;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              exam = getState().examState.exam;

              if (exam.id) {
                _context2.next = 5;
                break;
              }

              (0, _logging.logError)('Failed to get exam settings. No exam id.');
              handleAPIError({
                message: 'Failed to fetch proctoring settings. No exam id was found.'
              }, dispatch);
              return _context2.abrupt("return");

            case 5:
              _context2.prev = 5;
              _context2.next = 8;
              return (0, _api.fetchProctoringSettings)(exam.id);

            case 8:
              proctoringSettings = _context2.sent;
              dispatch((0, _slice.setProctoringSettings)({
                proctoringSettings: proctoringSettings
              }));
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](5);
              handleAPIError(_context2.t0, dispatch);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 12]]);
    }));

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}
/**
 * Start a timed exam
 */


function startTimedExam() {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState) {
      var exam;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              exam = getState().examState.exam;

              if (exam.id) {
                _context3.next = 5;
                break;
              }

              (0, _logging.logError)('Failed to start exam. No exam id.');
              handleAPIError({
                message: 'Failed to start exam. No exam id was found.'
              }, dispatch);
              return _context3.abrupt("return");

            case 5:
              _context3.next = 7;
              return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.createExamAttempt)(exam.id))(dispatch);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
}

function createProctoredExamAttempt() {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState) {
      var exam;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              exam = getState().examState.exam;

              if (exam.id) {
                _context4.next = 4;
                break;
              }

              (0, _logging.logError)('Failed to create exam attempt. No exam id.');
              return _context4.abrupt("return");

            case 4:
              _context4.next = 6;
              return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.createExamAttempt)(exam.id, false, true))(dispatch);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }();
}
/**
 * Start a proctored exam (including onboarding and practice exams)
 */


function startProctoredExam() {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState) {
      var exam, _ref6, attempt, _ref7, workerUrl, useWorker;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              exam = getState().examState.exam;
              _ref6 = exam || {}, attempt = _ref6.attempt;

              if (exam.id) {
                _context5.next = 5;
                break;
              }

              (0, _logging.logError)('Failed to start proctored exam. No exam id.');
              return _context5.abrupt("return");

            case 5:
              _ref7 = attempt || {}, workerUrl = _ref7.desktop_application_js_url;
              useWorker = window.Worker && workerUrl;

              if (!useWorker) {
                _context5.next = 11;
                break;
              }

              (0, _handlers.workerPromiseForEventNames)(_constants2.default.start, exam.attempt.desktop_application_js_url)().then(function () {
                return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.continueAttempt)(attempt.attempt_id))(dispatch);
              }).catch(function () {
                return handleAPIError({
                  message: 'Something has gone wrong starting your exam. Please double-check that the application is running.'
                }, dispatch);
              });
              _context5.next = 13;
              break;

            case 11:
              _context5.next = 13;
              return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.continueAttempt)(attempt.attempt_id))(dispatch);

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x8, _x9) {
      return _ref5.apply(this, arguments);
    };
  }();
}

function skipProctoringExam() {
  return /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch, getState) {
      var exam, attemptId;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              exam = getState().examState.exam;

              if (exam.id) {
                _context6.next = 4;
                break;
              }

              (0, _logging.logError)('Failed to skip proctored exam. No exam id.');
              return _context6.abrupt("return");

            case 4:
              attemptId = exam.attempt.attempt_id;

              if (!attemptId) {
                _context6.next = 10;
                break;
              }

              _context6.next = 8;
              return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.declineAttempt)(attemptId))(dispatch);

            case 8:
              _context6.next = 12;
              break;

            case 10:
              _context6.next = 12;
              return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.createExamAttempt)(exam.id, true, false))(dispatch);

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x10, _x11) {
      return _ref8.apply(this, arguments);
    };
  }();
}
/**
 * Poll exam active attempt status.
 * @param url - poll attempt url
 */


function pollAttempt(url) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(dispatch, getState) {
      var currentAttempt, data, updatedAttempt;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              currentAttempt = getState().examState.activeAttempt; // If the learner is in a state where they've finished the exam
              // and the attempt can be submitted (i.e. they are "ready_to_submit"),
              // don't ping the proctoring app (which action could move
              // the attempt into an error state).

              if (!(currentAttempt && currentAttempt.attempt_status === _constants.ExamStatus.READY_TO_SUBMIT)) {
                _context7.next = 3;
                break;
              }

              return _context7.abrupt("return");

            case 3:
              _context7.prev = 3;
              _context7.next = 6;
              return (0, _api.pollExamAttempt)(url);

            case 6:
              data = _context7.sent;
              updatedAttempt = _objectSpread(_objectSpread({}, currentAttempt), {}, {
                time_remaining_seconds: data.time_remaining_seconds,
                accessibility_time_string: data.accessibility_time_string,
                attempt_status: data.status
              });
              dispatch((0, _slice.setActiveAttempt)({
                activeAttempt: updatedAttempt
              }));

              if (data.status === _constants.ExamStatus.SUBMITTED) {
                dispatch((0, _slice.expireExamAttempt)());
              }

              _context7.next = 15;
              break;

            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](3);
              handleAPIError(_context7.t0, dispatch);

            case 15:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[3, 12]]);
    }));

    return function (_x12, _x13) {
      return _ref9.apply(this, arguments);
    };
  }();
}

function stopExam() {
  return /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dispatch, getState) {
      var _getState$examState, exam, activeAttempt, attemptId, examUrl;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _getState$examState = getState().examState, exam = _getState$examState.exam, activeAttempt = _getState$examState.activeAttempt;

              if (activeAttempt) {
                _context8.next = 5;
                break;
              }

              (0, _logging.logError)('Failed to stop exam. No active attempt.');
              handleAPIError({
                message: 'Failed to stop exam. No active attempt was found.'
              }, dispatch);
              return _context8.abrupt("return");

            case 5:
              attemptId = activeAttempt.attempt_id, examUrl = activeAttempt.exam_url_path;

              if (!(!exam.attempt || attemptId !== exam.attempt.attempt_id)) {
                _context8.next = 17;
                break;
              }

              _context8.prev = 7;
              _context8.next = 10;
              return (0, _api.stopAttempt)(attemptId);

            case 10:
              window.location.href = examUrl;
              _context8.next = 16;
              break;

            case 13:
              _context8.prev = 13;
              _context8.t0 = _context8["catch"](7);
              handleAPIError(_context8.t0, dispatch);

            case 16:
              return _context8.abrupt("return");

            case 17:
              _context8.next = 19;
              return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.stopAttempt)(attemptId))(dispatch);

            case 19:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[7, 13]]);
    }));

    return function (_x14, _x15) {
      return _ref10.apply(this, arguments);
    };
  }();
}

function continueExam() {
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(dispatch, getState) {
      var exam, attemptId;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              exam = getState().examState.exam;
              attemptId = exam.attempt.attempt_id;

              if (attemptId) {
                _context9.next = 6;
                break;
              }

              (0, _logging.logError)('Failed to continue exam. No attempt id.');
              handleAPIError({
                message: 'Failed to continue exam. No attempt id was found.'
              }, dispatch);
              return _context9.abrupt("return");

            case 6:
              _context9.next = 8;
              return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.continueAttempt)(attemptId))(dispatch);

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x16, _x17) {
      return _ref11.apply(this, arguments);
    };
  }();
}

function resetExam() {
  return /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(dispatch, getState) {
      var exam, attemptId;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              exam = getState().examState.exam;
              attemptId = exam.attempt.attempt_id;

              if (attemptId) {
                _context10.next = 6;
                break;
              }

              (0, _logging.logError)('Failed to reset exam attempt. No attempt id.');
              handleAPIError({
                message: 'Failed to reset exam attempt. No attempt id was found.'
              }, dispatch);
              return _context10.abrupt("return");

            case 6:
              _context10.next = 8;
              return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.resetAttempt)(attemptId))(dispatch);

            case 8:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x18, _x19) {
      return _ref12.apply(this, arguments);
    };
  }();
}

function submitExam() {
  return /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(dispatch, getState) {
      var _getState$examState2, exam, activeAttempt, _ref14, workerUrl, useWorker, handleBackendProviderSubmission, attemptId, examUrl;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _getState$examState2 = getState().examState, exam = _getState$examState2.exam, activeAttempt = _getState$examState2.activeAttempt;
              _ref14 = activeAttempt || {}, workerUrl = _ref14.desktop_application_js_url;
              useWorker = window.Worker && activeAttempt && workerUrl;

              handleBackendProviderSubmission = function handleBackendProviderSubmission() {
                // if a backend provider is being used during the exam
                // send it a message that exam is being submitted
                if (useWorker) {
                  (0, _handlers.workerPromiseForEventNames)(_constants2.default.submit, workerUrl)().catch(function () {
                    return handleAPIError({
                      message: 'Something has gone wrong submitting your exam. Please double-check that the application is running.'
                    }, dispatch);
                  });
                }
              };

              if (activeAttempt) {
                _context11.next = 8;
                break;
              }

              (0, _logging.logError)('Failed to submit exam. No active attempt.');
              handleAPIError({
                message: 'Failed to submit exam. No active attempt was found.'
              }, dispatch);
              return _context11.abrupt("return");

            case 8:
              attemptId = activeAttempt.attempt_id, examUrl = activeAttempt.exam_url_path;

              if (!(!exam.attempt || attemptId !== exam.attempt.attempt_id)) {
                _context11.next = 21;
                break;
              }

              _context11.prev = 10;
              _context11.next = 13;
              return (0, _api.submitAttempt)(attemptId);

            case 13:
              window.location.href = examUrl;
              handleBackendProviderSubmission();
              _context11.next = 20;
              break;

            case 17:
              _context11.prev = 17;
              _context11.t0 = _context11["catch"](10);
              handleAPIError(_context11.t0, dispatch);

            case 20:
              return _context11.abrupt("return");

            case 21:
              _context11.next = 23;
              return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.submitAttempt)(attemptId))(dispatch);

            case 23:
              handleBackendProviderSubmission();

            case 24:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[10, 17]]);
    }));

    return function (_x20, _x21) {
      return _ref13.apply(this, arguments);
    };
  }();
}

function expireExam() {
  return /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(dispatch, getState) {
      var _getState$examState3, exam, activeAttempt, _ref16, workerUrl, attemptId, useWorker;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _getState$examState3 = getState().examState, exam = _getState$examState3.exam, activeAttempt = _getState$examState3.activeAttempt;
              _ref16 = activeAttempt || {}, workerUrl = _ref16.desktop_application_js_url, attemptId = _ref16.attempt_id;
              useWorker = window.Worker && activeAttempt && workerUrl;

              if (attemptId) {
                _context12.next = 7;
                break;
              }

              (0, _logging.logError)('Failed to expire exam. No attempt id.');
              handleAPIError({
                message: 'Failed to expire exam. No attempt id was found.'
              }, dispatch);
              return _context12.abrupt("return");

            case 7:
              _context12.next = 9;
              return updateAttemptAfter(activeAttempt.course_id, exam.content_id, (0, _api.submitAttempt)(attemptId))(dispatch);

            case 9:
              dispatch((0, _slice.expireExamAttempt)());

              if (useWorker) {
                (0, _handlers.workerPromiseForEventNames)(_constants2.default.submit, workerUrl)().catch(function () {
                  return handleAPIError({
                    message: 'Something has gone wrong submitting your exam. Please double-check that the application is running.'
                  }, dispatch);
                });
              }

            case 11:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x22, _x23) {
      return _ref15.apply(this, arguments);
    };
  }();
}
/**
 * Ping provider application (used for proctored exams).
 * @param timeoutInSeconds - time to wait for worker response before raising an error
 * @param workerUrl - location of the worker from the provider
 */


function pingAttempt(timeoutInSeconds, workerUrl) {
  return /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(dispatch, getState) {
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return (0, _handlers.pingApplication)(timeoutInSeconds, workerUrl).catch( /*#__PURE__*/function () {
                var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(error) {
                  var _getState$examState4, exam, activeAttempt, message;

                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          _getState$examState4 = getState().examState, exam = _getState$examState4.exam, activeAttempt = _getState$examState4.activeAttempt;
                          message = error ? error.message : 'Worker failed to respond.';
                          _context13.next = 4;
                          return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.endExamWithFailure)(activeAttempt.attempt_id, message))(dispatch);

                        case 4:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }));

                return function (_x26) {
                  return _ref18.apply(this, arguments);
                };
              }());

            case 2:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function (_x24, _x25) {
      return _ref17.apply(this, arguments);
    };
  }();
}

function startProctoringSoftwareDownload() {
  return /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(dispatch, getState) {
      var exam, attemptId;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              exam = getState().examState.exam;
              attemptId = exam.attempt.attempt_id;

              if (attemptId) {
                _context15.next = 6;
                break;
              }

              (0, _logging.logError)('Failed to start downloading proctoring software. No attempt id.');
              handleAPIError({
                message: 'Failed to start downloading proctoring software. No attempt id was found.'
              }, dispatch);
              return _context15.abrupt("return");

            case 6:
              _context15.next = 8;
              return updateAttemptAfter(exam.course_id, exam.content_id, (0, _api.softwareDownloadAttempt)(attemptId))(dispatch);

            case 8:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    return function (_x27, _x28) {
      return _ref19.apply(this, arguments);
    };
  }();
}

function getVerificationData() {
  return /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(dispatch) {
      var data;
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.prev = 0;
              _context16.next = 3;
              return (0, _api.fetchVerificationStatus)();

            case 3:
              data = _context16.sent;
              dispatch((0, _slice.setVerificationData)({
                verification: data
              }));
              _context16.next = 10;
              break;

            case 7:
              _context16.prev = 7;
              _context16.t0 = _context16["catch"](0);
              handleAPIError(_context16.t0, dispatch);

            case 10:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[0, 7]]);
    }));

    return function (_x29) {
      return _ref20.apply(this, arguments);
    };
  }();
}

function getExamReviewPolicy() {
  return /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(dispatch, getState) {
      var exam, data;
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              exam = getState().examState.exam;

              if (exam.id) {
                _context17.next = 5;
                break;
              }

              (0, _logging.logError)('Failed to fetch exam review policy. No exam id.');
              handleAPIError({
                message: 'Failed to fetch exam review policy. No exam id was found.'
              }, dispatch);
              return _context17.abrupt("return");

            case 5:
              _context17.prev = 5;
              _context17.next = 8;
              return (0, _api.fetchExamReviewPolicy)(exam.id);

            case 8:
              data = _context17.sent;
              dispatch((0, _slice.setReviewPolicy)({
                policy: data.review_policy
              }));
              _context17.next = 15;
              break;

            case 12:
              _context17.prev = 12;
              _context17.t0 = _context17["catch"](5);
              handleAPIError(_context17.t0, dispatch);

            case 15:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[5, 12]]);
    }));

    return function (_x30, _x31) {
      return _ref21.apply(this, arguments);
    };
  }();
}

function getAllowProctoringOptOut(allowProctoringOptOut) {
  return function (dispatch) {
    dispatch((0, _slice.setAllowProctoringOptOut)({
      allowProctoringOptOut: allowProctoringOptOut
    }));
  };
}
//# sourceMappingURL=thunks.js.map