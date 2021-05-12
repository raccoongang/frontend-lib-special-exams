import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withExamStore } from '../hocs';
import Exam from './Exam';
import { getExamAttemptsData, getProctoringSettings } from '../data';

/**
 * SequenceExamWrapper is the component responsible for handling special exams.
 * It takes control over rendering exam instructions unless exam is started only if
 * current sequence item is timed exam. Otherwise, renders any children elements passed.
 * @param children - Current course sequence item content (e.g. unit, navigation buttons etc.)
 * @returns {JSX.Element}
 * @example
 * <SequenceExamWrapper sequence={sequence} courseId={courseId}>
 *   {sequenceContent}
 * </SequenceExamWrapper>
 */
const SequenceExamWrapper = ({ children, ...props }) => {
  const {
    sequence, courseId, loadExamData, loadProctoringSettings, ...examProps
  } = props;

  const loadInitialData = async () => {
    await loadProctoringSettings();
    loadExamData(courseId, sequence.id);
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <Exam isTimeLimited={sequence.isTimeLimited} {...examProps}>
      {children}
    </Exam>
  );
};

SequenceExamWrapper.propTypes = {
  sequence: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isTimeLimited: PropTypes.bool,
  }).isRequired,
  loadExamData: PropTypes.func.isRequired,
  loadProctoringSettings: PropTypes.func.isRequired,
  courseId: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default withExamStore(SequenceExamWrapper, null, {
  loadExamData: getExamAttemptsData,
  loadProctoringSettings: getProctoringSettings,
});
