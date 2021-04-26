import { logError } from '@edx/frontend-platform/logging';
import {
  fetchExamAttemptsData,
  updateAttempt,
  stopAttempt,
} from './api';
import {
  setIsLoading,
  updateExamAttempts,
} from './slice';

export function getExamAttemptsData(courseId, contentId) {
  return async (dispatch) => {
    dispatch(setIsLoading({ isLoading: true }));
    const data = await fetchExamAttemptsData(courseId, contentId);
    dispatch(
      updateExamAttempts({
        exam: data.exam,
        activeAttempt: data.active_attempt,
      }),
    );
    dispatch(setIsLoading({ isLoading: false }));
  };
}

export function endExam() {
  return async (dispatch, getState) => {
    const { exam } = getState().exam;
    const attemptId = exam.attempt.attempt_id;
    if (!attemptId) {
      logError('Failed to stop exam. No attempt id.');
      return;
    }
    dispatch(setIsLoading({ isLoading: true }));
    const data = await stopAttempt(attemptId);
    if (data && data.exam_attempt_id) {
      const attemptData = await fetchExamAttemptsData(exam.course_id, exam.content_id);
      dispatch(
        updateExamAttempts({
          exam: attemptData.exam,
          activeAttempt: attemptData.active_attempt,
        }),
      );
    }
    dispatch(setIsLoading({ isLoading: false }));
  };
}

export function startExam() {
  return async (dispatch, getState) => {
    const { exam } = getState().exam;
    if (!exam.id) {
      logError('Failed to start exam. No exam id.');
      return;
    }
    dispatch(setIsLoading({ isLoading: true }));
    const data = await updateAttempt(exam.id);
    if (data && data.exam_attempt_id) {
      const attemptData = await fetchExamAttemptsData(exam.course_id, exam.content_id);
      dispatch(
        updateExamAttempts({
          exam: attemptData.exam,
          activeAttempt: attemptData.active_attempt,
        }),
      );
    }
    dispatch(setIsLoading({ isLoading: false }));
  };
}
