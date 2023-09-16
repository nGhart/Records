import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className="loadingSection">
      <Spinner animation="border" variant="success" className="spinner" />
    </div>
  );
};

export default Loading;
