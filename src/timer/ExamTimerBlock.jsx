import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button, Alert, useToggle } from '@edx/paragon';
import CountDownTimer from './CountDownTimer';
import { stopExam, expireExam } from '../data';
import { withExamStore } from '../hocs';

const ExamTimerBlock = ({ activeAttempt, stopExamAttempt, expireExamAttempt }) => {
  const [isShowMore, showMore, showLess] = useToggle(false);
  const [timeIsLow, setTimeIsLow] = useToggle(false);

  return (
    <Alert variant={timeIsLow ? 'warning' : 'info'}>
      <div className="d-flex justify-content-between flex-column flex-lg-row align-items-start">
        <div>
          <FormattedMessage
            id="exam.examTimer.text"
            defaultMessage='You are taking &#34;'
          />
          <Alert.Link href={activeAttempt.exam_url_path}>{activeAttempt.exam_display_name}</Alert.Link>
          <FormattedMessage
            id="exam.examTimer.text"
            defaultMessage='&#34; as a timed exam. '
          />
          {
            isShowMore
              ? (
                <span>
                  <FormattedMessage
                    id="exam.examTimer.showLess"
                    defaultMessage={'The timer on the right shows the time remaining in the exam. '
                      + 'To receive credit for problems, you must select "Submit" '
                      + 'for each problem before you select "End My Exam" '}
                  />
                  <Alert.Link onClick={showLess}>
                    <FormattedMessage
                      id="exam.examTimer.showLessLink"
                      defaultMessage="Show Less"
                    />
                  </Alert.Link>
                </span>
              )
              : (
                <Alert.Link onClick={showMore}>
                  <FormattedMessage
                    id="exam.examTimer.showMoreLink"
                    defaultMessage="Show more"
                  />
                </Alert.Link>
              )
          }
        </div>
        <div className="d-flex align-items-center flex-shrink-0 ml-lg-3 mt-2 mt-lg-0">
          <Button className="mr-3" variant="outline-primary" onClick={stopExamAttempt}>
            <FormattedMessage
              id="exam.examTimer.endExamBtn"
              defaultMessage="End My Exam"
            />
          </Button>
          <CountDownTimer
            timeLeft={activeAttempt.time_remaining_seconds}
            onLowTime={setTimeIsLow}
            onLimitReached={expireExamAttempt}
          />
        </div>
      </div>
    </Alert>
  );
};

ExamTimerBlock.propTypes = {
  activeAttempt: PropTypes.shape({
    exam_url_path: PropTypes.string.isRequired,
    exam_display_name: PropTypes.string.isRequired,
    time_remaining_seconds: PropTypes.number.isRequired,
  }).isRequired,
  stopExamAttempt: PropTypes.func.isRequired,
  expireExamAttempt: PropTypes.func.isRequired,
};

const mapExamStateToProps = (state) => {
  const { examState } = state;
  return { activeAttempt: examState.activeAttempt };
};

export default withExamStore(
  ExamTimerBlock, mapExamStateToProps, {
    stopExamAttempt: stopExam,
    expireExamAttempt: expireExam,
  },
);
