import React from 'react';
import { Button, Container } from '@edx/paragon';

const SubmitExamInstructions = () => (
  <Container className="border py-5 mb-4">
    <div className="h3">
      Are you sure that you want to submit your timed exam?
    </div>
    <p>
      Make sure that you have selected &#34;Submit&#34; for each problem before you submit your exam.
    </p>
    <p>
      After you submit your exam, your exam will be graded.
    </p>
    <Button variant="primary">
      Yes, submit my timed exam.
    </Button>{' '}
    <Button variant="outline-primary">
      No, I want to continue working.
    </Button>
  </Container>
);

// eslint-disable-next-line import/prefer-default-export
export { SubmitExamInstructions };
