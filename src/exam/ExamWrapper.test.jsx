import '@testing-library/jest-dom';
import { Factory } from 'rosie';
import React from 'react';
import SequenceExamWrapper from './ExamWrapper';
import { store, getExamAttemptsData, startTimedExam } from '../data';
import { render } from '../setupTest';
import { ExamStateProvider } from '../index';
import { ExamType } from '../constants';

jest.mock('../data', () => ({
  store: {},
  getExamAttemptsData: jest.fn(),
  startTimedExam: jest.fn(),
}));
getExamAttemptsData.mockReturnValue(jest.fn());
startTimedExam.mockReturnValue(jest.fn());
store.subscribe = jest.fn();
store.dispatch = jest.fn();

describe('SequenceExamWrapper', () => {
  const sequence = {
    id: 'block-v1:test+test+test+type@sequential+block@5b1bb1aaf6d34e79b213aa37422b4743',
    isTimeLimited: true,
  };
  const courseId = 'course-v1:test+test+test';

  it('is successfully rendered and shows instructions', () => {
    store.getState = () => ({
      examState: Factory.build('examState'),
    });
    const { queryByTestId } = render(
      <ExamStateProvider>
        <SequenceExamWrapper sequence={sequence} courseId={courseId}>
          <div>children</div>
        </SequenceExamWrapper>
      </ExamStateProvider>,
      { store },
    );
    expect(queryByTestId('exam-instructions-title')).toHaveTextContent('Subsection is a Timed Exam (30 minutes)');
    expect(queryByTestId('exam-api-error-component')).not.toBeInTheDocument();
  });

  it('is successfully rendered and shows instructions for proctored exam', () => {
    store.getState = () => ({
      examState: Factory.build('examState', {
        exam: Factory.build('exam', {
          type: ExamType.PROCTORED,
        }),
      }),
    });
    const { queryByTestId } = render(
      <ExamStateProvider>
        <SequenceExamWrapper sequence={sequence} courseId={courseId}>
          <div>children</div>
        </SequenceExamWrapper>
      </ExamStateProvider>,
      { store },
    );
    expect(queryByTestId('proctored-exam-instructions-title')).toHaveTextContent('This exam is proctored');
  });

  it('shows loader if isLoading true', () => {
    store.getState = () => ({
      examState: Factory.build('examState', {
        isLoading: true,
      }),
    });
    const { queryByTestId } = render(
      <ExamStateProvider>
        <SequenceExamWrapper sequence={sequence} courseId={courseId}>
          <div>children</div>
        </SequenceExamWrapper>
      </ExamStateProvider>,
      { store },
    );
    expect(queryByTestId('spinner')).toBeInTheDocument();
  });

  it('shows exam api error component together with other content if there is an error', () => {
    store.getState = () => ({
      examState: Factory.build('examState', {
        apiErrorMsg: 'Something bad has happened.',
      }),
    });

    const { queryByTestId } = render(
      <ExamStateProvider>
        <SequenceExamWrapper sequence={sequence} courseId={courseId}>
          <div>children</div>
        </SequenceExamWrapper>
      </ExamStateProvider>,
      { store },
    );
    expect(queryByTestId('exam-instructions-title')).toHaveTextContent('Subsection is a Timed Exam (30 minutes)');
    expect(queryByTestId('exam-api-error-component')).toBeInTheDocument();
  });

  it('does not take any actions if sequence item is not exam', () => {
    const { getByTestId } = render(
      <ExamStateProvider>
        <SequenceExamWrapper sequence={{ ...sequence, isTimeLimited: false }} courseId={courseId}>
          <div data-testid="sequence-content">children</div>
        </SequenceExamWrapper>
      </ExamStateProvider>,
      { store },
    );
    expect(getByTestId('sequence-content')).toHaveTextContent('children');
  });

  it('does not take any actions if the sequence item is not an exam and the user is anonymous', () => {
    const appContext = {
      authenticatedUser: null,
    };
    const { getByTestId } = render(
      <ExamStateProvider>
        <SequenceExamWrapper sequence={{ ...sequence, isTimeLimited: false }} courseId={courseId}>
          <div data-testid="sequence-content">children</div>
        </SequenceExamWrapper>
      </ExamStateProvider>,
      { store, appContext },
    );
    expect(getByTestId('sequence-content')).toHaveTextContent('children');
  });
});
