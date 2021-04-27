import '@testing-library/jest-dom';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { AppContext } from '@edx/frontend-platform/react';
import {
  getExamAttemptsData,
  startExam,
  store,
} from './data';
import { SequenceExamWrapper } from './Sequence';

jest.mock('./data', () => ({
  store: {},
  startExam: jest.fn(),
  getExamAttemptsData: jest.fn(),
}));
startExam.mockReturnValue(jest.fn());
getExamAttemptsData.mockReturnValue(jest.fn());

store.subscribe = jest.fn();
store.dispatch = jest.fn();
store.getState = () => ({
  exam: {
    isLoading: false,
    activeAttempt: {},
    exam: {
      id: 6,
      course_id: 'course-v1:test+test+test',
      content_id: 'block-v1:test+test+test+type@sequential+block@5b1bb1aaf6d34e79b213aa37422b4743',
      external_id: null,
      exam_name: 'Subsection',
      time_limit_mins: 30,
      is_proctored: false,
      is_practice_exam: false,
      is_active: true,
      due_date: '2025-04-22T00:00:00Z',
      hide_after_due: false,
      backend: 'null',
      attempt: {},
    },
  },
});

test('Positive case for ExamInstructions', () => {
  const sequence = {
    id: 'block-v1:test+test+test+type@sequential+block@5b1bb1aaf6d34e79b213aa37422b4743',
    isTimeLimited: true,
  };
  const authenticatedUser = {
    userId: 1,
  };
  const coursewareSliceMock = createSlice({
    name: 'courseware',
    initialState: {
      courseId: 'course-v1:test+test+test',
    },
  });
  const appLearningStoreMock = configureStore({
    reducer: {
      courseware: coursewareSliceMock.reducer,
    },
  });
  const { getByTestId } = render(
    <IntlProvider locale="en">
      <AppContext.Provider value={{ authenticatedUser }}>
        <Provider store={appLearningStoreMock}>
          <SequenceExamWrapper sequence={sequence}>
            <div>children</div>
          </SequenceExamWrapper>
        </Provider>
      </AppContext.Provider>
    </IntlProvider>,
  );
  expect(getByTestId('exam-instructions-title')).toHaveTextContent('Subsection is a Timed Exam (30 minutes)');
});
