import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Alert,
  Icon,
  useToggle,
} from '@edx/paragon';
import {
  Visibility,
  VisibilityOff,
} from '@edx/paragon/icons';

const ExamTimer = ({ activeAttempt, endExamHandler }) => {
  const [isShowMore, showMore, showLess] = useToggle(false);
  const [isShowTimer, showTimer, hideTimer] = useToggle(true);

  return (
    <Alert variant="info">
      <div className="d-flex justify-content-between flex-column flex-lg-row align-items-start">
        <div>
          You are taking &#34;<Alert.Link href="">{activeAttempt.exam_display_name}</Alert.Link>&#34;
          as a timed exam. {
            isShowMore
              ? (
                <span>
                  The timer on the right shows the time remaining in the exam.
                  To receive credit for problems, you must select &#34;Submit&#34;
                  for each problem before you select &#34;End My Exam&#34;.{' '}
                  <Alert.Link onClick={showLess}>Show Less</Alert.Link>
                </span>
              )
              : (<Alert.Link onClick={showMore}>Show More</Alert.Link>)
          }
        </div>
        <div className="d-flex align-items-center flex-shrink-0 ml-lg-3 mt-2 mt-lg-0">
          <Button className="mr-3" variant="outline-primary" onClick={endExamHandler}>End My Exam</Button>
          {
            isShowTimer
              ? <><span>0:29:45</span> <Button className="ml-3" variant="outline-primary" onClick={hideTimer}><Icon src={Visibility} /></Button></>
              : <Button variant="outline-primary" onClick={showTimer}><Icon src={VisibilityOff} /></Button>
          }
        </div>
      </div>
    </Alert>
  );
};

ExamTimer.propTypes = {
  activeAttempt: PropTypes.shape({
    exam_display_name: PropTypes.number.isRequired,
  }).isRequired,
  endExamHandler: PropTypes.func.isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export { ExamTimer };