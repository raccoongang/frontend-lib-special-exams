import React, { useContext, useState } from 'react';
import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Container } from '@edx/paragon';
import ExamStateContext from '../../../context';
import { ExamStatus } from '../../../constants';
import WarningModal from '../WarningModal';
import { pollExamAttempt, softwareDownloadAttempt } from '../../../data/api';
import messages from '../messages';
import ProviderInstructions from './ProviderInstructions';
import DefaultInstructions from './DefaultInstructions';
import DownloadButtons from './DownloadButtons';
import Footer from '../Footer';

const DownloadSoftwareProctoredExamInstructions = ({ intl }) => {
  const state = useContext(ExamStateContext);
  const {
    proctoringSettings,
    exam,
    continueExam,
  } = state;
  const { attempt, external_id: examExternalId } = exam;
  const {
    exam_started_poll_url: pollUrl,
    external_id: attemptExternalId,
    attempt_code: examCode,
    attempt_id: attemptId,
  } = attempt;
  const {
    platform_name: platformName,
    contact_us: contactInfo,
    exam_proctoring_backend: proctoringBackend,
  } = proctoringSettings;
  const { download_url: downloadUrl, instructions } = proctoringBackend || {};
  const [systemCheckStatus, setSystemCheckStatus] = useState('');
  const [downloadClicked, setDownloadClicked] = useState(false);
  const withProviderInstructions = instructions && instructions.length > 0;
  // const withProviderInstructions = false;

  const handleDownloadClick = () => {
    pollExamAttempt(`${pollUrl}?sourceid=instructions`)
      .then((data) => {
        if (data.status === ExamStatus.READY_TO_START) {
          setSystemCheckStatus('success');
        } else {
          softwareDownloadAttempt(attemptId);
          const newUrl = `${downloadUrl.split('?')[0]}?attempt=${attemptExternalId}&exam=${examExternalId}`;
          window.open(newUrl, '_blank');
        }
      });
    setDownloadClicked(true);
  };

  const handleStartExamClick = () => {
    pollExamAttempt(`${attempt.exam_started_poll_url}?sourceid=instructions`)
      .then((data) => (data.status === ExamStatus.READY_TO_START ? continueExam() : setSystemCheckStatus('failure')));
  };

  return (
    <div>
      <Container className="border py-5 mb-4">
        <WarningModal
          isOpen={Boolean(systemCheckStatus)}
          title={
            systemCheckStatus === 'failure'
              ? intl.formatMessage(messages.cannotStartModalTitle)
              : intl.formatMessage(messages.softwareLoadedModalTitle)
          }
          body={
            systemCheckStatus === 'failure'
              ? intl.formatMessage(messages.cannotStartModalBody)
              : intl.formatMessage(messages.softwareLoadedModalBody)
          }
          handleClose={() => setSystemCheckStatus('')}
        />
        <div className="h3" data-testid="exam-instructions-title">
          <FormattedMessage
            id="exam.DownloadSoftwareProctoredExamInstructions.title"
            defaultMessage="Set up and start your proctored exam."
          />
        </div>
        {withProviderInstructions
          ? <ProviderInstructions platformName={platformName} contactInfo={contactInfo} instructions={instructions} />
          : <DefaultInstructions code={examCode} />}
        <DownloadButtons
          downloadUrl={downloadUrl}
          onDownloadClick={handleDownloadClick}
          onStartExamClick={handleStartExamClick}
          downloadClicked={downloadClicked}
        />
        {!withProviderInstructions && (
          <p className="pt-3">
            <div className="h4">
              <FormattedMessage
                id="exam.DefaultDownloadSoftwareProctoredExamInstructions.step3.title"
                defaultMessage="Step 3."
              />
            </div>
            <p>
              <FormattedMessage
                id="exam.DefaultDownloadSoftwareProctoredExamInstructions.step3.body"
                defaultMessage={'For security and exam integrity reasons, '
                + 'we ask you to sign in to your edX account. Then we will '
                + 'direct you to the RPNow proctoring experience.'}
              />
            </p>
          </p>
        )}
      </Container>
      <Footer />
    </div>
  );
};

DownloadSoftwareProctoredExamInstructions.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(DownloadSoftwareProctoredExamInstructions);
