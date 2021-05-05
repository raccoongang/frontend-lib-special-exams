import React from 'react';
import { ExamStatus } from '../constants';
import { StartExamInstructions } from './StartExamInstructions';
import { SubmitExamInstructions } from './SubmitExamInstructions';
import { SubmittedExamInstructions } from './SubmittedExamInstructions';
import { startExam, continueExam, submitExam } from "../data";
import { withExamStore } from "../hocs";
import { isEmpty } from "../helpers";

const Instructions = ({ attempt, examHasAttempt, children }) => {
    switch (true) {
      case !examHasAttempt:
        return <StartExamInstructions />;
      case attempt.attempt_status === ExamStatus.READY_TO_SUBMIT:
        return <SubmitExamInstructions />;
      case attempt.attempt_status === ExamStatus.SUBMITTED:
        return <SubmittedExamInstructions />;
      default:
        return children;
    }
};

const mapExamStateToProps = (state) => {
  const { attempt } = state.examState.exam;
  return { attempt, examHasAttempt: !isEmpty(attempt) };
};

export default withExamStore(
    Instructions, mapExamStateToProps, { startExam, continueExam, submitExam }
);
