import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button, Container } from '@edx/paragon';
import { withExamStore } from '../hocs';
import { startExam } from '../data';

const StartExamInstructions = ({ examDuration, startExamAttempt }) => (
  <div>
    <Container className="border py-5 mb-4">
      <div className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.startExamInstructions.title"
          defaultMessage="Subsection is a Timed Exam ({examDuration} minutes)"
          values={{ examDuration }}
        />
      </div>
      <p>
        <FormattedMessage
          id="exam.startExamInstructions.text1"
          defaultMessage="This exam has a time limit associated with it. "
        />
        <strong>
          <FormattedMessage
            id="exam.startExamInstructions.text2"
            defaultMessage="To pass this exam, you must complete the problems in the time allowed. "
          />
        </strong>
        <FormattedMessage
          id="exam.startExamInstructions.text3"
          defaultMessage={'After you select "I am ready to start this timed exam", '
            + 'you will have {examDuration} minutes to complete and submit the exam.'}
          values={{ examDuration }}
        />
      </p>
      <Button
        data-testid="start-exam-button"
        variant="outline-primary"
        onClick={startExamAttempt}
      >
        <FormattedMessage
          id="exam.startExamInstructions.startExamButtonText"
          defaultMessage="I am ready to start this timed exam."
        />
      </Button>
    </Container>

    <div className="footer-sequence">
      <div className="h4">
        <FormattedMessage
          id="exam.startExamInstructions.footerTitle"
          defaultMessage="Can I request additional time to complete my exam?"
        />
      </div>
      <p>
        <FormattedMessage
          id="exam.startExamInstructions.footerText"
          defaultMessage={'If you have disabilities, '
              + 'you might be eligible for an additional time allowance on timed exams. '
              + 'Ask your course team for information about additional time allowances.'}
        />
      </p>
    </div>
  </div>
);

const mapExamStateToProps = (state) => {
  const { examState } = state;
  return { examDuration: examState.exam.time_limit_mins };
};

StartExamInstructions.propTypes = {
  examDuration: PropTypes.number.isRequired,
  startExamAttempt: PropTypes.func.isRequired,
};

export default withExamStore(
  StartExamInstructions, mapExamStateToProps, { startExamAttempt: startExam },
);
