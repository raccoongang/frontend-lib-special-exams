import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

export async function fetchExamAttemptsData(courseId, contentId) {
  const url = new URL(
    `${getConfig().LMS_BASE_URL}/api/edx_proctoring/v1/proctored_exam/exam_attempts/course_id/${courseId}/content_id/${contentId}`,
  );
  const { data } = await getAuthenticatedHttpClient().get(url.href);
  return data;
}

export async function updateAttempt(examId) {
  const url = new URL(`${getConfig().LMS_BASE_URL}/api/edx_proctoring/v1/proctored_exam/attempt`);
  const payload = {
    exam_id: examId,
    start_clock: 'true',
  };
  const { data } = await getAuthenticatedHttpClient().post(url.href, payload);
  return data;
}

export async function stopAttempt(attemptId) {
  const url = new URL(`${getConfig().LMS_BASE_URL}/api/edx_proctoring/v1/proctored_exam/attempt/${attemptId}`);
  const payload = {
    action: 'stop',
  };
  const { data } = await getAuthenticatedHttpClient().put(url.href, payload);
  return data;
}

export async function continueAttempt(attemptId) {
  const url = new URL(`${getConfig().LMS_BASE_URL}/api/edx_proctoring/v1/proctored_exam/attempt/${attemptId}`);
  const payload = {
    action: 'start',
  };
  const { data } = await getAuthenticatedHttpClient().put(url.href, payload);
  return data;
}

export async function submitAttempt(attemptId) {
  const url = new URL(`${getConfig().LMS_BASE_URL}/api/edx_proctoring/v1/proctored_exam/attempt/${attemptId}`);
  const payload = {
    action: 'submit',
  };
  const { data } = await getAuthenticatedHttpClient().put(url.href, payload);
  return data;
}
