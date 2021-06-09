import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button, Container } from '@edx/paragon';
import { ExamStatus } from '../../constants';
import ExamStateContext from '../../context';
import Footer from './Footer';
import SkipProctoredExamButton from './SkipProctoredExamButton';

const EntranceProctoredExamInstructions = ({ skipProctoredExam }) => {
  const state = useContext(ExamStateContext);
  const { exam, startProctoringExam } = state;
  const { attempt, allow_proctoring_opt_out: allowProctoringOptOut } = exam || {};
  const { total_time: totalTime = 0 } = attempt;

  return (
    <div>
      <Container className="border py-5 mb-4">
        { exam.attempt.attempt_status === ExamStatus.READY_TO_RESUME ? (
          <div>
            <div className="h3" data-testid="proctored-exam-instructions-title">
              <FormattedMessage
                id="exam.ReadyToResumeProctoredExamInstructions.title"
                defaultMessage="Your exam is ready to be resumed."
              />
            </div>
            <p>
              <FormattedMessage
                id="exam.ReadyToResumeProctoredExamInstructions.text"
                defaultMessage="You will have {totalTime} to complete your exam."
                values={{ totalTime }}
              />
            </p>
          </div>
        ) : (
          <div className="h3" data-testid="proctored-exam-instructions-title">
            <FormattedMessage
              id="exam.EntranceProctoredExamInstructions.title"
              defaultMessage="This exam is proctored"
            />
          </div>
        )}
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
            onClick={startProctoringExam}
          >
            <FormattedMessage
              id="exam.startExamInstructions.startExamButtonText"
              defaultMessage="Continue to my proctored exam."
            />
          </Button>
        </p>
        {allowProctoringOptOut && <SkipProctoredExamButton handleClick={skipProctoredExam} />}
      </Container>
      <Footer />
    </div>
  );
};

EntranceProctoredExamInstructions.propTypes = {
  skipProctoredExam: PropTypes.func.isRequired,
};

export default EntranceProctoredExamInstructions;
