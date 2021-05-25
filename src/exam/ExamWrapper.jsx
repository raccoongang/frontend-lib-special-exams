import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import Exam from './Exam';
import ExamStateContext from '../context';

/**
 * Exam wrapper is responsible for triggering initial exam data fetching and rendering Exam.
 */
const ExamWrapper = ({ children, ...props }) => {
  const state = useContext(ExamStateContext);
  const { sequence, courseId } = props;
  const allowProctoringExam = getConfig().ENABLE_PROCTORING_EXAM;

  const loadInitialData = async () => {
    await state.getExamAttemptsData(courseId, sequence.id);
    state.getProctoringSettings();
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <Exam
      isTimeLimited={sequence.isTimeLimited}
      legacyWebUrl={sequence.legacyWebUrl}
      allowProctoringExam={allowProctoringExam}
    >
      {children}
    </Exam>
  );
};

ExamWrapper.propTypes = {
  sequence: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isTimeLimited: PropTypes.bool,
    legacyWebUrl: PropTypes.string,
  }).isRequired,
  courseId: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ExamWrapper;
