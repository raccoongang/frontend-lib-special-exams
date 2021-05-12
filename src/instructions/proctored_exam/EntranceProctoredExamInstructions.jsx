import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button, Container } from '@edx/paragon';
import { withExamStore } from '../../hocs';
import { startProctoringExam } from '../../data';

const EntranceProctoredExamInstructions = ({ startExamAttempt }) => (
  <div>
    <Container className="border py-5 mb-4">
      <div className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.EntranceProctoredExamInstructions.title"
          defaultMessage="This exam is proctored"
        />
      </div>
      <p>
        <FormattedMessage
          id="exam.EntranceProctoredExamInstructions.text1"
          defaultMessage={'To be eligible for credit or the program credential associated with this course, '
            + 'you must pass the proctoring review for this exam.'}
        />
      </p>
      <p className="mt-4 pl-md-4">
        <FormattedMessage
          id="exam.EntranceProctoredExamInstructions.text2"
          defaultMessage="You will be guided through steps to set up online proctoring software and verify your identity."
        />
      </p>
      <p className="pl-md-4">
        <Button
          data-testid="start-exam-button"
          variant="primary"
          onClick={startExamAttempt}
        >
          <FormattedMessage
            id="exam.startExamInstructions.startExamButtonText"
            defaultMessage="Continue to my proctored exam."
          />
        </Button>
      </p>
      <p className="mt-4 pl-md-4">
        <Button
          data-testid="start-exam-without-proctoring-button"
          variant="outline-secondary"
          onClick={() => {}}
        >
          <FormattedMessage
            id="exam.startExamInstructions.startExamButtonText"
            defaultMessage="Take this exam without proctoring."
          />
        </Button>
      </p>
    </Container>

    <div className="footer-sequence">
      <p>
        <Button
          data-testid="request-exam-time-button"
          variant="link"
          onClick={() => {}}
        >
          <FormattedMessage
            id="exam.startExamInstructions.footerButton"
            defaultMessage="Can I request additional time to complete my exam?"
          />
        </Button>
      </p>
    </div>
  </div>
);

EntranceProctoredExamInstructions.propTypes = {
  startExamAttempt: PropTypes.func.isRequired,
};

export default withExamStore(
  EntranceProctoredExamInstructions, null, { startExamAttempt: startProctoringExam },
);
