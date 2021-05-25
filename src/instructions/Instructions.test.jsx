import '@testing-library/jest-dom';
import React from 'react';
import Instructions from './index';
import { store, getExamAttemptsData, startExam } from '../data';
import { render, screen } from '../setupTest';
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

describe('SequenceExamWrapper', () => {
  it('Start exam instructions can be successfully rendered', () => {
    store.getState = () => ({
      examState: {
        isLoading: false,
        activeAttempt: null,
        verification: {
          status: 'none',
          can_verify: true,
        },
        exam: {
          time_limit_mins: 30,
          attempt: {},
        },
      },
    });

    const { getByTestId } = render(
      <ExamStateProvider>
        <Instructions>
          <div data-testid="sequence-content">Sequence</div>
        </Instructions>
      </ExamStateProvider>,
      { store },
    );
    expect(getByTestId('start-exam-button')).toHaveTextContent('I am ready to start this timed exam.');
  });

  it('Instructions are not shown when exam is started', () => {
    store.getState = () => ({
      examState: {
        isLoading: false,
        verification: {
          status: 'none',
          can_verify: true,
        },
        activeAttempt: {
          attempt_status: 'started',
        },
        exam: {
          time_limit_mins: 30,
          attempt: {
            attempt_status: 'started',
          },
        },
      },
    });

    const { getByTestId } = render(
      <ExamStateProvider>
        <Instructions>
          <div data-testid="sequence-content">Sequence</div>
        </Instructions>
      </ExamStateProvider>,
      { store },
    );
    expect(getByTestId('sequence-content')).toHaveTextContent('Sequence');
  });

  it('Shows failed prerequisites page if user has failed prerequisites for the exam', () => {
    store.getState = () => ({
      examState: {
        isLoading: false,
        timeIsOver: true,
        proctoringSettings: {
          platform_name: 'Your Platform',
        },
        activeAttempt: {},
        exam: {
          is_proctored: true,
          time_limit_mins: 30,
          attempt: {},
          prerequisite_status: {
            failed_prerequisites: [
              {
                test: 'failed',
              },
            ],
          },
        },
        verification: {},
      },
    });

    const { getByTestId } = render(
      <ExamStateProvider>
        <Instructions>
          <div>Sequence</div>
        </Instructions>
      </ExamStateProvider>,
      { store },
    );

    expect(getByTestId('failed-prerequisites')).toBeInTheDocument();
  });

  it('Shows pending prerequisites page if user has failed prerequisites for the exam', () => {
    store.getState = () => ({
      examState: {
        isLoading: false,
        timeIsOver: true,
        proctoringSettings: {
          platform_name: 'Your Platform',
        },
        activeAttempt: {},
        exam: {
          is_proctored: true,
          time_limit_mins: 30,
          attempt: {},
          prerequisite_status: {
            pending_prerequisites: [
              {
                test: 'failed',
              },
            ],
          },
        },
        verification: {},
      },
    });

    const { getByTestId } = render(
      <ExamStateProvider>
        <Instructions>
          <div>Sequence</div>
        </Instructions>
      </ExamStateProvider>,
      { store },
    );

    expect(getByTestId('pending-prerequisites')).toBeInTheDocument();
  });

  it('Instructions for error status', () => {
    store.getState = () => ({
      examState: {
        isLoading: false,
        proctoringSettings: {
          link_urls: '',
        },
        verification: {
          status: 'none',
          can_verify: true,
        },
        activeAttempt: {
          attempt_status: 'error',
        },
        exam: {
          time_limit_mins: 30,
          attempt: {
            attempt_status: 'error',
          },
        },
      },
    });

    render(
      <ExamStateProvider>
        <Instructions>
          <div data-testid="sequence-content">Sequence</div>
        </Instructions>
      </ExamStateProvider>,
      { store },
    );
    expect(screen.getByText('Error with proctored exam')).toBeInTheDocument();
  });

  it('Instructions for ready to resume status', () => {
    store.getState = () => ({
      examState: {
        isLoading: false,
        proctoringSettings: {
          link_urls: '',
          platform_name: 'Platform Name',
        },
        verification: {
          status: 'none',
          can_verify: true,
        },
        activeAttempt: {
          attempt_status: 'ready_to_resume',
        },
        exam: {
          time_limit_mins: 30,
          attempt: {
            attempt_status: 'ready_to_resume',
          },
        },
      },
    });

    render(
      <ExamStateProvider>
        <Instructions>
          <div data-testid="sequence-content">Sequence</div>
        </Instructions>
      </ExamStateProvider>,
      { store },
    );
    expect(screen.getByText('Your exam is ready to be resumed.')).toBeInTheDocument();
    expect(screen.getByTestId('start-exam-button')).toHaveTextContent('Continue to my proctored exam.');
  });

  it('Instructions are shown when attempt status is ready_to_submit', () => {
    store.getState = () => ({
      examState: {
        isLoading: false,
        activeAttempt: {
          attempt_status: 'ready_to_submit',
        },
        exam: {
          time_limit_mins: 30,
          attempt: {
            attempt_status: 'ready_to_submit',
          },
        },
      },
    });

    const { getByTestId } = render(
      <ExamStateProvider>
        <Instructions>
          <div>Sequence</div>
        </Instructions>
      </ExamStateProvider>,
      { store },
    );
    expect(getByTestId('exam-instructions-title')).toHaveTextContent('Are you sure that you want to submit your timed exam?');
  });

  it('Instructions are shown when attempt status is submitted', () => {
    store.getState = () => ({
      examState: {
        isLoading: false,
        timeIsOver: false,
        activeAttempt: {
          attempt_status: 'submitted',
        },
        exam: {
          time_limit_mins: 30,
          attempt: {
            attempt_status: 'submitted',
          },
        },
      },
    });

    const { getByTestId } = render(
      <ExamStateProvider>
        <Instructions>
          <div>Sequence</div>
        </Instructions>
      </ExamStateProvider>,
      { store },
    );
    expect(getByTestId('exam.submittedExamInstructions.title')).toHaveTextContent('You have submitted your timed exam.');
  });

  it('Instructions are shown when exam time is over', () => {
    store.getState = () => ({
      examState: {
        isLoading: false,
        timeIsOver: true,
        activeAttempt: {
          attempt_status: 'submitted',
        },
        exam: {
          time_limit_mins: 30,
          attempt: {
            attempt_status: 'submitted',
          },
        },
      },
    });

    const { getByTestId } = render(
      <ExamStateProvider>
        <Instructions>
          <div>Sequence</div>
        </Instructions>
      </ExamStateProvider>,
      { store },
    );
    expect(getByTestId('exam.submittedExamInstructions.title')).toHaveTextContent('The time allotted for this exam has expired.');
  });
});
