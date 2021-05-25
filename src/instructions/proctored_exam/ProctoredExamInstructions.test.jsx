import '@testing-library/jest-dom';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Instructions from '../index';
import { store, getExamAttemptsData, startExam } from '../../data';
import { ExamStateProvider } from '../../index';

jest.mock('../../data', () => ({
  store: {},
  getExamAttemptsData: jest.fn(),
  startExam: jest.fn(),
}));
getExamAttemptsData.mockReturnValue(jest.fn());
startExam.mockReturnValue(jest.fn());
store.subscribe = jest.fn();
store.dispatch = jest.fn();

test('Start exam instructions can be successfully rendered', () => {
  store.getState = () => ({
    examState: {
      isLoading: false,
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
          <Instructions><div>Sequence</div></Instructions>
        </ExamStateProvider>
      </Provider>
    </IntlProvider>,
  );
  expect(getByTestId('exam-instructions-title')).toHaveTextContent('This exam is proctored');
});

test('Instructions are not shown when exam is started', () => {
  store.getState = () => ({
    examState: {
      isLoading: false,
      activeAttempt: {
        attempt_status: 'started',
      },
      exam: {
        is_proctored: true,
        time_limit_mins: 30,
        attempt: {
          attempt_status: 'started',
        },
      },
    },
  });

  const { getByTestId } = render(
    <IntlProvider locale="en">
      <Provider store={store}>
        <ExamStateProvider>
          <Instructions>
            <div data-testid="sequence-content">Sequence</div>
          </Instructions>
        </ExamStateProvider>
      </Provider>
    </IntlProvider>,
  );
  expect(getByTestId('sequence-content')).toHaveTextContent('Sequence');
});

test('Instructions are shown when attempt status is created', () => {
  store.getState = () => ({
    examState: {
      isLoading: false,
      activeAttempt: {
        attempt_status: 'created',
      },
      exam: {
        is_proctored: true,
        time_limit_mins: 30,
        attempt: {
          attempt_status: 'created',
        },
      },
    },
  });

  const { getByTestId } = render(
    <IntlProvider locale="en">
      <Provider store={store}>
        <ExamStateProvider>
          <Instructions>
            <div>Sequence</div>
          </Instructions>
        </ExamStateProvider>
      </Provider>
    </IntlProvider>,
  );
  expect(getByTestId('exam-instructions-title')).toHaveTextContent('Complete your verification before starting the proctored exam.');
});

test('Instructions are shown when attempt status is submitted', () => {
  store.getState = () => ({
    examState: {
      isLoading: false,
      activeAttempt: {
        attempt_status: 'submitted',
      },
      exam: {
        is_proctored: true,
        time_limit_mins: 30,
        attempt: {
          attempt_status: 'submitted',
        },
      },
    },
  });

  const { getByTestId } = render(
    <IntlProvider locale="en">
      <Provider store={store}>
        <ExamStateProvider>
          <Instructions>
            <div>Sequence</div>
          </Instructions>
        </ExamStateProvider>
      </Provider>
    </IntlProvider>,
  );
  expect(getByTestId('exam-instructions-title')).toHaveTextContent('You have submitted this proctored exam for review');
});

test('Instructions are shown when attempt status is ready_to_submit', () => {
  store.getState = () => ({
    examState: {
      isLoading: false,
      activeAttempt: {
        attempt_status: 'ready_to_submit',
      },
      exam: {
        is_proctored: true,
        time_limit_mins: 30,
        attempt: {
          attempt_status: 'ready_to_submit',
        },
      },
    },
  });

  const { getByTestId } = render(
    <IntlProvider locale="en">
      <Provider store={store}>
        <ExamStateProvider>
          <Instructions>
            <div>Sequence</div>
          </Instructions>
        </ExamStateProvider>
      </Provider>
    </IntlProvider>,
  );
  expect(getByTestId('exam-instructions-title')).toHaveTextContent('Are you sure you want to end your proctored exam?');
});

test('Instructions are shown when attempt status is verified', () => {
  store.getState = () => ({
    examState: {
      isLoading: false,
      activeAttempt: {
        attempt_status: 'verified',
      },
      exam: {
        is_proctored: true,
        time_limit_mins: 30,
        attempt: {
          attempt_status: 'verified',
        },
      },
    },
  });

  const { getByTestId } = render(
    <IntlProvider locale="en">
      <Provider store={store}>
        <ExamStateProvider>
          <Instructions>
            <div>Sequence</div>
          </Instructions>
        </ExamStateProvider>
      </Provider>
    </IntlProvider>,
  );
  expect(getByTestId('exam-instructions-title')).toHaveTextContent('Your proctoring session was reviewed successfully.');
});

test('Instructions are shown when attempt status is rejected', () => {
  store.getState = () => ({
    examState: {
      isLoading: false,
      activeAttempt: {
        attempt_status: 'rejected',
      },
      exam: {
        is_proctored: true,
        time_limit_mins: 30,
        attempt: {
          attempt_status: 'rejected',
        },
      },
    },
  });

  const { getByTestId } = render(
    <IntlProvider locale="en">
      <Provider store={store}>
        <ExamStateProvider>
          <Instructions>
            <div>Sequence</div>
          </Instructions>
        </ExamStateProvider>
      </Provider>
    </IntlProvider>,
  );
  expect(getByTestId('exam-instructions-title'))
    .toHaveTextContent('Your proctoring session was reviewed, but did not pass all requirements');
});
