/* eslint-disable import/prefer-default-export */
export const ExamStatus = Object.freeze({
  CREATED: 'created',
  STARTED: 'started',
  READY_TO_SUBMIT: 'ready_to_submit',
  SUBMITTED: 'submitted',
  TIMED_OUT: 'timed_out',
});

export const IS_STARTED_STATUS = (status) => [ExamStatus.STARTED, ExamStatus.READY_TO_SUBMIT].includes(status);

// Available actions are taken from
// https://github.com/edx/edx-proctoring/blob/1444ca40a43869fb4e2731cea4862888c5b5f286/edx_proctoring/views.py#L765
export const ExamAction = Object.freeze({
  START: 'start',
  STOP: 'stop',
  PING: 'ping',
  SUBMIT: 'submit',
  ERROR: 'error',
});
