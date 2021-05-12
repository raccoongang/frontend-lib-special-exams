import { logError } from '@edx/frontend-platform/logging';
import {
  fetchExamAttemptsData,
  createExamAttempt,
  stopAttempt,
  continueAttempt,
  submitAttempt,
  pollExamAttempt,
} from './api';
import { isEmpty } from '../helpers';
import {
  setIsLoading,
  setExamState,
  expireExamAttempt,
  setActiveAttempt,
} from './slice';

function updateAttemptAfter(courseId, sequenceId, promise = null, noLoading = false) {
  return async (dispatch) => {
    let data;
    if (!noLoading) { dispatch(setIsLoading({ isLoading: true })); }
    if (promise) {
      data = await promise;
      if (!data || !data.exam_attempt_id) {
        if (!noLoading) { dispatch(setIsLoading({ isLoading: false })); }
        return;
      }
    }

    const attemptData = await fetchExamAttemptsData(courseId, sequenceId);
    dispatch(setExamState({
      exam: attemptData.exam,
      activeAttempt: !isEmpty(attemptData.active_attempt) ? attemptData.active_attempt : null,
    }));
    if (!noLoading) { dispatch(setIsLoading({ isLoading: false })); }
  };
}

export function getExamAttemptsData(courseId, sequenceId) {
  return updateAttemptAfter(courseId, sequenceId);
}

export function startExam() {
  return async (dispatch, getState) => {
    const { exam } = getState().examState;
    if (!exam.id) {
      logError('Failed to start exam. No exam id.');
      return;
    }
    await updateAttemptAfter(
      exam.course_id, exam.content_id, createExamAttempt(exam.id),
    )(dispatch);
  };
}

export function pollAttempt(url) {
  return async (dispatch, getState) => {
    const currentAttempt = getState().examState.activeAttempt;
    const attempt = await pollExamAttempt(url);
    const updatedAttempt = Object.assign(
      {}, currentAttempt, {
        time_remaining_seconds: attempt.time_remaining_seconds,
        accessibility_time_string: attempt.accessibility_time_string,
        attempt_status: attempt.status,
      }
    );
    dispatch(setActiveAttempt({
      activeAttempt: updatedAttempt
    }));
  };
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
      exam.course_id, exam.content_id, stopAttempt(attemptId), true,
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
      exam.course_id, exam.content_id, continueAttempt(attemptId), true,
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
      exam.course_id, exam.content_id, submitAttempt(attemptId),
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
      exam.course_id, exam.content_id, submitAttempt(attemptId),
    )(dispatch);
    dispatch(expireExamAttempt());
  };
}
