import React from 'react';
import { ExamStatus } from '../constants';
import StartExamInstructions from './StartExamInstructions';
import SubmitExamInstructions from './SubmitExamInstructions';
import SubmittedExamInstructions from './SubmittedExamInstructions';
import EntranceProctoredExamInstructions from './proctored_exam/EntranceProctoredExamInstructions';
import VerificationProctoredExamInstructions from './proctored_exam/VerificationProctoredExamInstructions';
import { startExam, continueExam, submitExam } from '../data';
import { withExamStore } from '../hocs';
import { isEmpty } from '../helpers';

const Instructions = ({
  attempt, examHasAttempt, isProctored, children,
}) => {
  switch (true) {
    case !examHasAttempt:
      return isProctored
        ? <EntranceProctoredExamInstructions />
        : <StartExamInstructions />;
    case attempt.attempt_status === ExamStatus.CREATED:
      return <VerificationProctoredExamInstructions />;
    case attempt.attempt_status === ExamStatus.READY_TO_SUBMIT:
      return <SubmitExamInstructions />;
    case attempt.attempt_status === ExamStatus.SUBMITTED:
      return <SubmittedExamInstructions />;
    default:
      return children;
  }
};

const mapExamStateToProps = (state) => {
  const { attempt, is_proctored: isProctored } = state.examState.exam;
  return { attempt, examHasAttempt: !isEmpty(attempt), isProctored };
};

export default withExamStore(
  Instructions, mapExamStateToProps, { startExam, continueExam, submitExam },
);
