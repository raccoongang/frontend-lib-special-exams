import { logError } from '@edx/frontend-platform/logging';
import {
  fetchExamAttemptsData,
  createExamAttempt,
  stopAttempt,
  continueAttempt,
  submitAttempt,
  timeOutAttempt,
  endExamWithFailure,
} from './api';
import { isEmpty } from '../helpers';
import { setIsLoading, updateExamAttempts, expireExamAttempt } from './slice';

function updateAttemptAfter(courseId, sequenceId, promise=null) {
  return async (dispatch) => {
    let data;
    dispatch(setIsLoading({ isLoading: true }));
    if (promise) {
      data = await promise;
      if (!data || !data.exam_attempt_id) {
        dispatch(setIsLoading({ isLoading: false }));
        return;
      }
    }

    const attemptData = await fetchExamAttemptsData(courseId, sequenceId);
    dispatch(
      updateExamAttempts({
        exam: attemptData.exam,
        activeAttempt: !isEmpty(attemptData.active_attempt) ? attemptData.active_attempt : null
      }),
    );
    dispatch(setIsLoading({ isLoading: false }));
  };
}

export function getExamAttemptsData(courseId, sequenceId) {
  return updateAttemptAfter(courseId, sequenceId);
}

export function stopExam() {
  return async (dispatch, getState) => {
    const { exam } = getState().examState;
    const attemptId = exam.attempt.attempt_id;
    if (!attemptId) {
      logError('Failed to stop exam. No attempt id.');
      return;
    }
    await updateAttemptAfter(
        exam.course_id, exam.content_id, stopAttempt(attemptId)
    )(dispatch);
  };
}

export function endExamForFailureState(error) {
  return async (dispatch, getState) => {
    const { exam } = getState().examState;
    const attemptId = exam.attempt.attempt_id;
    if (!attemptId) {
      logError('Failed to stop exam. No attempt id.');
      return;
    }
    await updateAttemptAfter(
        exam.course_id, exam.content_id, endExamWithFailure(attemptId, error)
    )(dispatch);
  };
}

export function startExam() {
  return async (dispatch, getState) => {
    const { exam } = getState().examState;
    if (!exam.id) {
      logError('Failed to start exam. No exam id.');
      return;
    }
    await updateAttemptAfter(
        exam.course_id, exam.content_id, createExamAttempt(exam.id)
    )(dispatch);
  };
}

export function continueExam() {
  return async (dispatch, getState) => {
    const { exam } = getState().examState;
    const attemptId = exam.attempt.attempt_id;
    if (!attemptId) {
      logError('Failed to continue exam. No attempt id.');
      return;
    }
    await updateAttemptAfter(
        exam.course_id, exam.content_id, continueAttempt(attemptId)
    )(dispatch);
  };
}

export function submitExam() {
  return async (dispatch, getState) => {
    const { exam } = getState().examState;
    const attemptId = exam.attempt.attempt_id;
    if (!attemptId) {
      logError('Failed to submit exam. No attempt id.');
      return;
    }
    await updateAttemptAfter(
        exam.course_id, exam.content_id, submitAttempt(attemptId)
    )(dispatch);
  };
}

export function expireExam() {
  return async (dispatch, getState) => {
    const { exam } = getState().examState;
    const attemptId = exam.attempt.attempt_id;
    if (!attemptId) {
      logError('Failed to expire exam. No attempt id.');
      return;
    }
    await updateAttemptAfter(
        exam.course_id, exam.content_id, timeOutAttempt(attemptId)
    )(dispatch);
    dispatch(expireExamAttempt());
  };
}

// http://localhost:18000/api/edx_proctoring/v1/proctored_exam/attempt/19?sourceid=in_exam&proctored=false
