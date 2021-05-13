import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Icon } from '@edx/paragon';
import { Info } from '@edx/paragon/icons';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

export default function ExamAPIError({ details }) {
  return (
    <Alert variant="danger">
      <Icon src={Info} className="alert-icon" />
      <Alert.Heading>
        <FormattedMessage
          id="exam.apiError.text"
          defaultMessage="Oops, there was an error! Please contact the support."
        />
      </Alert.Heading>
      <p>Details: {details}</p>
    </Alert>
  );
}

ExamAPIError.propTypes = {
  details: PropTypes.string.isRequired,
};
