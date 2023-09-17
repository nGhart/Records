import React from 'react';
import Alert from 'react-bootstrap/Alert';
import MainScreen from '../mainScreen/MainScreen';

const ErrorPage = ({ children }) => {
  return (
    <>
      <Alert variant="danger" className="errorContainer">
        <p>{children}</p>
      </Alert>
    </>
  );
};

export default ErrorPage;
