import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Button } from '@openedx/paragon';
import { getConfig } from '@edx/frontend-platform';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

const SubmittedTimedExamInstructions = ({ courseId }) => {
  const { timeIsOver } = useSelector(state => state.specialExams);

  const handleReturnToOutline = () => {
    window.location.href = `${getConfig().LEARNING_BASE_URL}/course/${courseId}/home`;
  };

  return (
    <>
      <h3 className="h3" data-testid="exam.submittedExamInstructions.title">
        {timeIsOver
          ? (
            <FormattedMessage
              id="exam.submittedExamInstructions.overtimeTitle"
              defaultMessage="The time allotted for this exam has expired. Your exam has been submitted and any work you completed will be graded."
            />
          )
          : (
            <FormattedMessage
              id="exam.submittedExamInstructions.title"
              defaultMessage="You have submitted your timed exam."
            />
          )}
      </h3>
      <Button onClick={handleReturnToOutline} className="mt-2">
        <FormattedMessage
          id="exam.submittedExamInstructions.returnToOutline"
          defaultMessage="Return to the course outline"
        />
      </Button>
    </>
  );
};

SubmittedTimedExamInstructions.propTypes = {
  courseId: PropTypes.string.isRequired,
};

export default SubmittedTimedExamInstructions;
