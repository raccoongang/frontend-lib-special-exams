import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Exam from './Exam';
import ExamStateContext from '../context';

/**
 * Exam wrapper is responsible for triggering initial exam data fetching and rendering Exam.
 */
const ExamWrapper = ({ children, ...props }) => {
  const state = useContext(ExamStateContext);
  const { sequence, courseId } = props;
  const { getExamAttemptsData, isInitialDataLoaded, activeAttempt } = state;
  const loadInitialData = async () => {
    await getExamAttemptsData(courseId, sequence.id);
  };

  useEffect(() => {
    if (sequence.isTimeLimited || !isInitialDataLoaded || activeAttempt) {
      loadInitialData();
    }
  }, []);

  return (
    <Exam isTimeLimited={sequence.isTimeLimited}>
      {children}
    </Exam>
  );
};

ExamWrapper.propTypes = {
  sequence: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isTimeLimited: PropTypes.bool,
  }).isRequired,
  courseId: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ExamWrapper;
