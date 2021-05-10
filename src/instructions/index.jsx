import React from 'react';
import { ExamStatus } from '../constants';
import { StartExamInstructions } from './StartExamInstructions';
import { SubmitExamInstructions } from './SubmitExamInstructions';
import { SubmittedExamInstructions } from './SubmittedExamInstructions';
import { EntranceProctoredExamInstructions } from './proctored_exam/EntranceProctoredExamInstructions';
import { startExam, continueExam, submitExam } from "../data";
import { withExamStore } from "../hocs";
import { isEmpty } from "../helpers";

const Instructions = ({ attempt, examHasAttempt, children, isProctored }) => {
  console.log('isProctored', isProctored, attempt);
    if (isProctored) {
      switch (true) {
        case !examHasAttempt:
          return <EntranceProctoredExamInstructions />;
        default:
          return children;
      }
    } else {
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
    }
};

const mapExamStateToProps = (state) => {
  const { attempt, is_proctored } = state.examState.exam;
  return { attempt, examHasAttempt: !isEmpty(attempt), isProctored: is_proctored };
};

export default withExamStore(
    Instructions, mapExamStateToProps, { startExam, continueExam, submitExam }
);
