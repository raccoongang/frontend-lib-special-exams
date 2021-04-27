import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Container } from '@edx/paragon';

const SubmittedExamInstructions = () => (
  <Container className="border py-5 mb-4">
    <h3 className="h3">
      <FormattedMessage
        id="exam.submittedExamInstructions.title"
        defaultMessage="You have submitted your timed exam."
      />
    </h3>
    <p>
      <FormattedMessage
        id="exam.submittedExamInstructions.text"
        defaultMessage={'After the due date has passed, you can review the exam,'
        + ' but you cannot change your answers.'}
      />
    </p>
  </Container>
);

// eslint-disable-next-line import/prefer-default-export
export { SubmittedExamInstructions };
