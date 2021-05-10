import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { ExamAction } from '../constants';

export async function fetchExamAttemptsData(courseId, sequenceId) {
  const url = new URL(
    `${getConfig().LMS_BASE_URL}/api/edx_proctoring/v1/proctored_exam/exam_attempts/course_id/${courseId}/content_id/${sequenceId}`,
  );
  const { data } = await getAuthenticatedHttpClient().get(url.href);
  return data;
}

export async function createExamAttempt(examId) {
  const url = new URL(`${getConfig().LMS_BASE_URL}/api/edx_proctoring/v1/proctored_exam/attempt`);
  const payload = {
    exam_id: examId,
    start_clock: 'true',
  };
  const { data } = await getAuthenticatedHttpClient().post(url.href, payload);
  return data;
}

export async function updateAttemptStatus(attemptId, action, detail = null) {
  const url = new URL(`${getConfig().LMS_BASE_URL}/api/edx_proctoring/v1/proctored_exam/attempt/${attemptId}`);
  const payload = { action };
  if (detail) {
    payload.detail = detail;
  }
  const { data } = await getAuthenticatedHttpClient().put(url.href, payload);
  return data;
}

export async function stopAttempt(attemptId) {
  return updateAttemptStatus(attemptId, ExamAction.STOP);
}

export async function continueAttempt(attemptId) {
  return updateAttemptStatus(attemptId, ExamAction.START);
}

export async function submitAttempt(attemptId) {
  return updateAttemptStatus(attemptId, ExamAction.SUBMIT);
}

export async function endExamWithFailure(attemptId, error) {
  return updateAttemptStatus(attemptId, ExamAction.ERROR, error);
}

export async function fetchProctoringSettings() {
  return {
    'proctorint_settings': {
      'link_urls': {
        'contact_us': 'https://example.com/contact_us/',
        'faq': 'https://example.com/faq/',
        'online_proctoring_rules': 'https://example.com/online_proctoring_rules/',
        'tech_requirements': 'https://example.com/tech_requirements/'
      }
    },
    'proctoring_backends': {
      'software_secure': {
        'exam_register_endpoint': '{add endpoint to SoftwareSecure}',
        'exam_sponsor': '{add SoftwareSecure sponsor}',
        'organization': '{add SoftwareSecure organization}',
        'software_download_url': '{add SoftwareSecure download url}'
      },
      'default': 'software_secure'
    },
  }
}
