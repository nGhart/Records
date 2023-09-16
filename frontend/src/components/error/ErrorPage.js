import React from 'react';
import Alert from 'react-bootstrap/Alert';
import MainScreen from '../mainScreen/MainScreen';

const ErrorPage = ({ variant = 'info', children }) => {
  return (
    <>
      {/* <div>ErrorPage</div> */}

      <MainScreen title="Error">
        <Alert className="errorContainer">
          <h1>{children}</h1>
        </Alert>
      </MainScreen>
    </>
  );
};

export default ErrorPage;
