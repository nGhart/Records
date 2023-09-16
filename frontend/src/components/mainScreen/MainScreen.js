import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const MainScreen = ({ title, children }) => {
  return (
    <>
      <Container>
        <Row>
          <div className="mainSection">
            {title && (
              <>
                <h1 className="title">{title}</h1>
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MainScreen;
