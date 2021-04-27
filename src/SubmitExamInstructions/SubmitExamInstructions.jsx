import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from '@edx/paragon';

const SubmitExamInstructions = ({ submitExam, continueExam }) => (
  <Container className="border py-5 mb-4">
    <h3 className="h3">
      Are you sure that you want to submit your timed exam?
    </h3>
    <p>
      Make sure that you have selected &#34;Submit&#34; for each problem before you submit your exam.
    </p>
    <p>
      After you submit your exam, your exam will be graded.
    </p>
    <Button
      variant="primary"
      onClick={submitExam}
    >
      Yes, submit my timed exam.
    </Button>{' '}
    <Button
      variant="outline-primary"
      onClick={continueExam}
    >
      No, I want to continue working.
    </Button>
  </Container>
);

SubmitExamInstructions.propTypes = {
  submitExam: PropTypes.func.isRequired,
  continueExam: PropTypes.func.isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export { SubmitExamInstructions };