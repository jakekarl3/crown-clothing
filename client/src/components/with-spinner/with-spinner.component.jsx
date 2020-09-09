import React from 'react';

import {
  SpinnerContainer,
  SpinnereOverlay
} from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnereOverlay>
        <SpinnerContainer />
      </SpinnereOverlay>
    ) : (
      <WrappedComponent { ...otherProps} />
    );
  };
  return Spinner;
}

export default WithSpinner;