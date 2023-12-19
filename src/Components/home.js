import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1>Welcome to Task Manager</h1>
        <p>Organize your tasks efficiently and effortlessly.</p>
        <Button href="/create" variant="light" className="me-2">Get Started</Button>
        <Button href="https://www.youtube.com/watch?v=R5i8alK5hPo" variant="secondary" target="_blank" rel="noopener noreferrer">Video on productiveness</Button>
      </div>

      {/* Services Section */}
      <Container className="my-5">
        <Row className="g-4">
          <Col sm={12} md={6} lg={3}>
            <div className="bg-success text-white p-4 text-center h-100">
              <h2>Manage your tasks</h2>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-success text-white p-4 text-center h-100">
              <h2>Monitor your progress</h2>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-success text-white p-4 text-center h-100">
              <h2>Collaborate with team</h2>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="bg-success text-white p-4 text-center h-100">
              <h2>Get insights       </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
