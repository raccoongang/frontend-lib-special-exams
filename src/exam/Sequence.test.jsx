import '@testing-library/jest-dom';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { AppContext } from '@edx/frontend-platform/react';
import SequenceExamWrapper from './Sequence';
import { store, getExamAttemptsData, startExam } from '../data';

jest.mock('../data', () => ({
  store: {},
  getExamAttemptsData: jest.fn(),
  startExam: jest.fn(),
}));
getExamAttemptsData.mockReturnValue(jest.fn());
startExam.mockReturnValue(jest.fn());
store.subscribe = jest.fn();
store.dispatch = jest.fn();
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

const sequence = {
  id: 'block-v1:test+test+test+type@sequential+block@5b1bb1aaf6d34e79b213aa37422b4743',
  isTimeLimited: true,
};
const courseId = 'course-v1:test+test+test';

test('SequenceExamWrapper is successfully rendered', () => {
  const authenticatedUser = { userId: 1 };
  const { getByTestId } = render(
    <IntlProvider locale="en">
      <AppContext.Provider value={{ authenticatedUser }}>
        <Provider store={store}>
          <SequenceExamWrapper sequence={sequence} courseId={courseId}>
            <div>children</div>
          </SequenceExamWrapper>
        </Provider>
      </AppContext.Provider>
    </IntlProvider>,
  );
  expect(getByTestId('exam-instructions-title')).toHaveTextContent('Subsection is a Timed Exam (30 minutes)');
});

test('SequenceExamWrapper does not take any actions if sequence item is not exam', () => {
  const authenticatedUser = { userId: 1 };
  const { getByTestId } = render(
    <IntlProvider locale="en">
      <AppContext.Provider value={{ authenticatedUser }}>
        <Provider store={store}>
          <SequenceExamWrapper sequence={{ ...sequence, isTimeLimited: false }} courseId={courseId}>
            <div data-testid="sequence-content">children</div>
          </SequenceExamWrapper>
        </Provider>
      </AppContext.Provider>
    </IntlProvider>,
  );
  expect(getByTestId('sequence-content')).toHaveTextContent('children');
});
