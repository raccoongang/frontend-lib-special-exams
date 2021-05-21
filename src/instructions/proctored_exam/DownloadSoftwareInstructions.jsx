import React, { useContext, useState } from 'react';
import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Button, Container } from '@edx/paragon';
import ExamStateContext from '../../context';
import { ExamStatus } from '../../constants';
import WarningModal from './WarningModal';
import { pollExamAttempt } from '../../data/api';
import messages from './messages';

const DownloadSoftwareProctoredExamInstructions = ({ intl }) => {
  const state = useContext(ExamStateContext);
  const {
    proctoringSettings,
    startProctoringSoftwareDownload,
    exam,
    continueExam,
  } = state;
  const { attempt } = exam;
  const {
    platform_name: platformName,
    contact_us: contactInfo,
    exam_proctoring_backend: proctoringBackend,
  } = proctoringSettings;
  const { download_url: downloadUrl, instructions } = proctoringBackend || {};
  const [systemCheckStatus, setSystemCheckStatus] = useState('');

  const handleDownloadClick = () => {
    pollExamAttempt(`${attempt.exam_started_poll_url}?sourceid=instructions`)
      .then((data) => {
        if (data.status === ExamStatus.READY_TO_START) {
          setSystemCheckStatus('success');
        } else {
          startProctoringSoftwareDownload();
          window.open(downloadUrl, '_blank');
        }
      });
  };

  const handleStartExamClick = () => {
    pollExamAttempt(`${attempt.exam_started_poll_url}?sourceid=instructions`)
      .then((data) => (data.status === ExamStatus.READY_TO_START ? continueExam() : setSystemCheckStatus('failure')));
  };

  return (
    <div>
      <Container className="border py-5 mb-4">
        <WarningModal
          id="system-check-not-passed"
          isOpen={systemCheckStatus === 'failure'}
          title={intl.formatMessage(messages.cannotStartModalTitle)}
          body={intl.formatMessage(messages.cannotStartModalBody)}
          handleClose={() => setSystemCheckStatus('')}
        />
        <WarningModal
          id="system-check-passed"
          isOpen={systemCheckStatus === 'success'}
          title={intl.formatMessage(messages.softwareLoadedModalTitle)}
          body={intl.formatMessage(messages.softwareLoadedModalBody)}
          handleClose={() => setSystemCheckStatus('')}
        />
        <div className="h3" data-testid="exam-instructions-title">
          <FormattedMessage
            id="exam.DownloadSoftwareProctoredExamInstructions.title"
            defaultMessage="Set up and start your proctored exam."
          />
        </div>
        <p>
          <FormattedMessage
            id="exam.DownloadSoftwareProctoredExamInstructions.text1"
            defaultMessage={'Note: As part of the proctored exam setup, you '
            + 'will be asked to verify your identity. Before you begin, make '
            + 'sure you are on a computer with a webcam, and that you have a '
            + 'valid form of photo identification such as a driver’s license or passport.'}
          />
        </p>
        <ol>
          {instructions && instructions.map((item, index) => (
            <li key={index.toString()}>
              {item}
            </li>
          ))}
        </ol>
        <p>
          <FormattedMessage
            id="exam.DownloadSoftwareProctoredExamInstructions.supportText"
            defaultMessage={'If you have issues relating to proctoring, you can '
            + 'contact {platformName} technical support by emailing {contactInfo}.'}
            values={{
              platformName,
              contactInfo,
            }}
          />
        </p>
        <Button
          data-testid="exam.DownloadSoftwareProctoredExamInstructions-start-system-check-button"
          variant="primary"
          onClick={handleDownloadClick}
        >
          <FormattedMessage
            id="exam.DownloadSoftwareProctoredExamInstructions.startSystemCheckButton"
            defaultMessage="Start System Check"
          />
        </Button>
        &nbsp;
        <Button
          data-testid="exam.DownloadSoftwareProctoredExamInstructions-start-exam-button"
          variant="outline-secondary"
          onClick={handleStartExamClick}
        >
          <FormattedMessage
            id="exam.DownloadSoftwareProctoredExamInstructions.startExamButton"
            defaultMessage="Start Exam"
          />
        </Button>
      </Container>
      <div className="footer-sequence">
        <Button
          data-testid="request-exam-time-button"
          variant="link"
          onClick={() => {}}
        >
          <FormattedMessage
            id="exam.startExamInstructions.footerButton"
            defaultMessage="About Proctored Exams"
          />
        </Button>
      </div>
    </div>
  );
};

DownloadSoftwareProctoredExamInstructions.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(DownloadSoftwareProctoredExamInstructions);
