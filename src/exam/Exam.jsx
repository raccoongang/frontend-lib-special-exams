import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@edx/paragon';
import { ExamTimerBlock } from '../timer';
import Instructions from '../instructions';
import ExamStateContext from '../context';

/**
 * Exam component is intended to render exam instructions before and after exam.
 * It is also responsible for rendering exam timer block/component during the exam.
 * If children do not relate to exam sequence, render them directly.
 * @param isTimeLimited - boolean used to identify if we need to process sequence as an exam
 * @param legacyWebUrl - string used to get url to the legacy website
 * @param allowProctoringExam - string used to get access to show proctored exam
 * @param children - sequence content
 * @returns {JSX.Element}
 * @constructor
 */
const Exam = ({
  isTimeLimited, legacyWebUrl, allowProctoringExam, children,
}) => {
  const state = useContext(ExamStateContext);
  const {
    isLoading, activeAttempt, showTimer,
    stopExam, expireExam, pollAttempt, exam,
  } = state;

  const PageLoading = () => (
    <div className="d-flex justify-content-center align-items-center flex-column my-5 py-5" data-testid="page-loading">
      <Spinner animation="border" variant="primary" />
    </div>
  );

  /**
   * Check the micro-frontend allows viewing proctored exams without redirecting to the legacy experience.
   * It controls by the environment variable `ALLOW_PROCTORING_EXAM` from the frontend-learning-app.
   */
  if (!allowProctoringExam && exam.is_proctored && legacyWebUrl !== undefined) {
    global.location.assign(legacyWebUrl);
    return <PageLoading />;
  }

  if (isLoading) {
    return <PageLoading />;
  }

  const sequenceContent = <>{children}</>;

  return (
    <div className="d-flex flex-column justify-content-center">
      {showTimer && (
        <ExamTimerBlock
          attempt={activeAttempt}
          stopExamAttempt={stopExam}
          expireExamAttempt={expireExam}
          pollExamAttempt={pollAttempt}
        />
      )}
      {isTimeLimited
        ? <Instructions>{sequenceContent}</Instructions>
        : sequenceContent}
    </div>
  );
};

Exam.propTypes = {
  allowProctoringExam: PropTypes.bool.isRequired,
  isTimeLimited: PropTypes.bool.isRequired,
  legacyWebUrl: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Exam;
