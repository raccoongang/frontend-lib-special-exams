import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Container, Hyperlink } from '@edx/paragon';
import ExamStateContext from '../../context';
import Footer from './Footer';

const ErrorProctoredExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { link_urls: linkUrls, platform_name: platformName } = state.proctoringSettings;
  const contactUsUrl = linkUrls && linkUrls.contact_us;

  return (
    <div>
      <Container className="border py-5 mb-4">
        <div className="h3">
          <FormattedMessage
            id="exam.ErrorProctoredExamInstructions.title"
            defaultMessage="Error with proctored exam"
          />
        </div>
        <p className="mb-0">
          <FormattedMessage
            id="exam.ErrorProctoredExamInstructions.text"
            defaultMessage={'A system error has occurred with your proctored exam. '
            + 'Please reach out to '}
          />
          <Hyperlink href={contactUsUrl}>
            {platformName}
          </Hyperlink>
          <FormattedMessage
            id="exam.ErrorProctoredExamInstructions.text"
            defaultMessage={' for assistance, and return to the exam once you receive '
            + 'further instructions'}
          />
        </p>
      </Container>
      <Footer />
    </div>
  );
};

export default ErrorProctoredExamInstructions;