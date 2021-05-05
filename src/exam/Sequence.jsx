import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withExamStore } from "../hocs";
import { ExamStatus } from '../constants';
import { Exam } from "./Exam";
import { getExamAttemptsData } from '../data';

/**
 * ExamStoreWrapper is the component responsible for handling special exams.
 * @param children - Current course sequence item content (e.g. unit, navigation buttons etc.)
 * @param props
 * @returns {JSX.Element} - ExamInstructions | children
 */
let ExamStoreWrapper = ({ children, ...props }) => {
  const { sequence, courseId, getExamAttemptsData, ...examProps } = props;

  useEffect(() => {
    getExamAttemptsData(courseId, sequence.id);
  }, []);

  return <Exam isTimeLimited={sequence.isTimeLimited} {...examProps}>
    {children}
  </Exam>
};

ExamStoreWrapper = withExamStore(ExamStoreWrapper, null, { getExamAttemptsData });

/**
 * SequenceExamWrapper is the component responsible for handling special exams.
 * It takes control over rendering exam instructions unless exam is started only if
 * current sequence item is timed exam. Otherwise, renders any children elements passed.
 * @param children - Current course sequence item content (e.g. unit, navigation buttons etc.)
 * @param props - Current course sequence item
 * @returns {JSX.Element}
 * @example
 * <SequenceExamWrapper sequence={sequence} courseId={courseId}>
 *   {sequenceContent}
 * </SequenceExamWrapper>
 */
const SequenceExamWrapper = ({children, ...props}) => {
  return <ExamStoreWrapper {...props}>
      {children}
    </ExamStoreWrapper>
};

ExamStoreWrapper.propTypes = {
  sequence: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isTimeLimited: PropTypes.bool,
  }).isRequired,
  courseId: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

SequenceExamWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export { SequenceExamWrapper };
