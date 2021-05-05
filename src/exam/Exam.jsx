import React from 'react';
import { Spinner } from '@edx/paragon';
import { ExamStatus } from "../constants";
import { ExamTimerBlock } from "../timer";
import { withExamStore } from "../hocs";
import Instructions from "../instructions";

/**
 * Exam component is intended to render exam instructions before and after exam.
 * It is also responsible for rendering exam timer block/component during the exam.
 * If children do not relate to exam sequence, render them directly.
 * @param isLoading - boolean indicating fetching exam attempt data is in progress
 * @param exam - exam data object
 * @param showTimer - boolean indicating if timer block  should be shown or not
 * @param isTimeLimited - boolean used to identify if we need to process sequence as an exam
 * @param children - sequence content
 * @returns {JSX.Element}
 * @constructor
 */
let Exam = ({ isLoading, showTimer, isTimeLimited, children }) => {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column my-5 py-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column justify-content-center">
      {showTimer && <ExamTimerBlock />}
      {isTimeLimited
        ? <Instructions>{children}</Instructions>
        : children
      }
    </div>
  );
};

const mapExamStateToProps = (state) => {
  const { isLoading, activeAttempt } = state.examState;
  return {
    isLoading,
    activeAttempt,
    showTimer: activeAttempt && [ExamStatus.STARTED, ExamStatus.READY_TO_SUBMIT].includes(activeAttempt.attempt_status)
  };
};

Exam = withExamStore(Exam, mapExamStateToProps);

export { Exam };
