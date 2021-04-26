import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from '@edx/paragon';
import { ExamInstructions } from '../ExamInstructions';
import { SubmitExamInstructions } from '../SubmitExamInstructions';
import { ExamTimer } from '../ExamTimer';
import {
  getExamAttemptsData,
  startExam,
  endExam,
  store,
} from './data';

const mapCoursewareStateToProps = (state) => {
  const { courseware } = state;
  return { courseId: courseware.courseId };
};

const READY_TO_SUBMIT = 'ready_to_submit';

/**
 * ExamStoreWrapperComp is the component responsible for handling special exams.
 * @param sequence - Current course sequence item
 * @param courseId - Course id string
 * @param children - Current course sequence item content (e.g. unit, navigation buttons etc.)
 * @returns {JSX.Element} - ExamInstructions | children
 * @description As generic approach using nested <Provider store={}> cannot be used with
 * learning app (parent) store provider ATM (by example https://react-redux.js.org/using-react-redux/accessing-store#multiple-stores).
 * The reason is: external learning app Provider component does not have custom context prop specified
 * and uses auto created one. That means children elements (passed in props) will always be using
 * exam nested store context (will not be able to access learning app store anymore).
 * Workaround is to avoid using nested Provider and use state update event on exam store.
 */
const StoreWrapperComp = ({ sequence, courseId, children }) => {
  const [examState, setExamState] = useState(store.getState());
  const { isLoading, exam, activeAttempt } = examState.exam;

  const storeListener = () => {
    setExamState(store.getState());
  };

  const startExamHandler = () => startExam()(store.dispatch, store.getState);
  const endExamHandler = () => endExam()(store.dispatch, store.getState);

  useEffect(() => {
    store.subscribe(storeListener);
    getExamAttemptsData(courseId, sequence.id)(store.dispatch);
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column my-5 py-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  let content;
  if (sequence.isTimeLimited && exam.attempt.attempt_status === READY_TO_SUBMIT) {
    content = <SubmitExamInstructions />;
  } else if (sequence.isTimeLimited && Object.keys(exam.attempt).length === 0) {
    content = <ExamInstructions startExam={startExamHandler} examDuration={exam.time_limit_mins} />;
  } else {
    content = children;
  }

  return (
    <div>
      {
        Object.keys(activeAttempt).length !== 0
        && <ExamTimer activeAttempt={activeAttempt} endExamHandler={endExamHandler} />
      }
      { content }
    </div>
  );
};
const StoreWrapper = connect(mapCoursewareStateToProps, {})(StoreWrapperComp);

/**
 * SequenceExamWrapper is the component responsible for handling special exams.
 * It takes control over rendering exam instructions unless exam is started only if
 * current sequence item is timed exam. Otherwise, renders any children elements passed.
 * @param children - Current course sequence item content (e.g. unit, navigation buttons etc.)
 * @param props - Current course sequence item
 * @returns {JSX.Element}
 * @example
 * <SequenceExamWrapper sequence={sequence}>
 *   {sequenceContent}
 * </SequenceExamWrapper>
 */
const SequenceExamWrapper = ({ children, ...props }) => (
  <StoreWrapper {...props}>
    {children}
  </StoreWrapper>
);

StoreWrapperComp.propTypes = {
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
