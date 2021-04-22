import { logError } from '@edx/frontend-platform/logging';
import {
  fetchExamAttemptsData,
  updateAttempt,
} from './api';
import {
  setExamStarted,
  setIsLoading,
  updateExamAttempts,
} from './slice';

export function getExamAttemptsData(courseId, contentId) {
  return async (dispatch) => {
    dispatch(setIsLoading({ isLoading: true }));
    const data = await fetchExamAttemptsData(courseId, contentId);
    console.log(data);
    dispatch(
      updateExamAttempts({
        exam: data.exam,
        activeAttempt: data.active_attempts,
      }),
    );
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
    dispatch(setIsLoading({ isLoading: false }));
    if (data && data.exam_attempt_id) {
      dispatch(setExamStarted({ examStarted: true }));
    }
  };
}
