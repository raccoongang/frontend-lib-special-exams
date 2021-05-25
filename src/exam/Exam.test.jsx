import '@testing-library/jest-dom';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import SequenceExam from './Exam';
import { store, getExamAttemptsData, startExam } from '../data';
import { ExamStateProvider } from '../index';

jest.mock('../data', () => ({
  store: {},
  getExamAttemptsData: jest.fn(),
  startExam: jest.fn(),
}));
getExamAttemptsData.mockReturnValue(jest.fn());
startExam.mockReturnValue(jest.fn());
store.subscribe = jest.fn();
store.dispatch = jest.fn();

const sequence = {
  legacyWebUrl: 'http://localhost:18000/courses/course-v1:edX+DemoX+Demo_Course/jump_to/block-v1:test+test+test+type@sequential+block@5b1bb1aaf6d34e79b213aa37422b4743?experience=legacy',
  isTimeLimited: true,
};

test('SequenceExam is successfully rendered', () => {
  store.getState = () => ({
    examState: {
      isLoading: false,
      activeAttempt: null,
      exam: {
        time_limit_mins: 30,
        attempt: {},
      },
    },
  });

  const { getByTestId } = render(
    <IntlProvider locale="en">
      <Provider store={store}>
        <ExamStateProvider>
          <SequenceExam
            isTimeLimited={sequence.isTimeLimited}
            legacyWebUrl={sequence.legacyWebUrl}
            allowProctoringExam={Boolean(true)}
          >
            <div>children</div>
          </SequenceExam>
        </ExamStateProvider>
      </Provider>
    </IntlProvider>,
  );
  expect(getByTestId('exam-instructions-title')).toHaveTextContent('Subsection is a Timed Exam (30 minutes)');
});

test('SequenceExamWrapper shows loader when sequence is not ready', () => {
  store.getState = () => ({
    examState: {
      isLoading: true,
      activeAttempt: null,
      exam: {
        is_proctored: true,
        time_limit_mins: 30,
        attempt: {},
      },
    },
  });

  const { getByTestId } = render(
    <IntlProvider locale="en">
      <Provider store={store}>
        <ExamStateProvider>
          <SequenceExam
            isTimeLimited={sequence.isTimeLimited}
            legacyWebUrl={sequence.legacyWebUrl}
            allowProctoringExam={Boolean(true)}
          >
            <div>children</div>
          </SequenceExam>
        </ExamStateProvider>
      </Provider>
    </IntlProvider>,
  );
  expect(getByTestId('page-loading')).not.toBeEmptyDOMElement();
});
