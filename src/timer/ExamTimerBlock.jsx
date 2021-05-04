import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button, Alert, useToggle } from '@edx/paragon';
import { CountDownTimer } from "./CountDownTimer";
import { stopExam, expireExam }  from "../data";
import { withExamStore } from "../hocs";

let ExamTimerBlock = ({ activeAttempt, stopExam }) => {
  const [isShowMore, showMore, showLess] = useToggle(false);
  const [timeIsLow, setTimeIsLow] = useToggle(false);

  return (
    <Alert variant={timeIsLow ? 'warning' : 'info'}>
      <div className="d-flex justify-content-between flex-column flex-lg-row align-items-start">
        <div>
          <FormattedMessage
            id="exam.examTimer.text"
            defaultMessage='You are taking "{exam_link}" as a timed exam. '
            values={{
              exam_link: <Alert.Link href={activeAttempt.exam_url_path}>{activeAttempt.exam_display_name}</Alert.Link>
            }}
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
          <Button className="mr-3" variant="outline-primary" onClick={stopExam}>
            <FormattedMessage
              id="exam.examTimer.endExamBtn"
              defaultMessage="End My Exam"
            />
          </Button>
          <CountDownTimer
            timeLeft={activeAttempt['time_remaining_seconds']}
            onLowTime={setTimeIsLow}
            onLimitReached={expireExam}
          />

        </div>
      </div>
    </Alert>
  );
};

const mapExamStateToProps = (state) => {
  const { examState } = state;
  return { activeAttempt: examState.activeAttempt };
};

ExamTimerBlock = withExamStore(ExamTimerBlock, mapExamStateToProps, { stopExam, expireExam });

// eslint-disable-next-line import/prefer-default-export
export { ExamTimerBlock };
