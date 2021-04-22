import React from 'react';
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

const ExamTimer = () => {
  const [isShowMore, showMore, showLess] = useToggle(false);
  const [isShowTimer, showTimer, hideTimer] = useToggle(true);

  return (
    <Alert variant="info">
      <div className="row">
        <div className="col col-8">
          You are taking &#34;<Alert.Link href="#">Subsection</Alert.Link>&#34;
          as a timed exam. {
            isShowMore
              ? (
                <span>
                  The timer on the right shows the time remaining in the exam.
                  To receive credit for problems, you must select &#34;Submit&#34;
                  for each problem before you select &#34;End My Exam&#34;.
                  <Alert.Link onClick={showLess}>Show Less</Alert.Link>
                </span>
              )
              : (<Alert.Link onClick={showMore}>Show More</Alert.Link>)
          }
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <Button variant="outline-primary">End My Exam</Button>
            </div>
            {
              isShowTimer
                ? <div className="col-6">0:29:45 <Button variant="outline-primary" onClick={hideTimer}><Icon src={Visibility} /></Button></div>
                : <div className="col-6"><Button variant="outline-primary" onClick={showTimer}><Icon src={VisibilityOff} /></Button></div>
            }
          </div>
        </div>
      </div>
    </Alert>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { ExamTimer };
