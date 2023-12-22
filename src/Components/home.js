import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div className="bg-primary text-white text-center py-5">
        <h1>Welcome to Task Manager</h1> 
        <p>Organize your tasks efficiently and effortlessly.</p>
        
        {/* button for users to start creating tasks */}
        <Button href="/create" variant="light" className="me-2">Get Started</Button>
        
        {/* button linking to a youtube vid */}
        <Button href="https://www.youtube.com/watch?v=R5i8alK5hPo" variant="secondary" target="_blank" rel="noopener noreferrer">Video on Productiveness</Button>
        
        {/* button for navigating to the news list page */}
        <Button href="/newsList" variant="light" className="me-2">Daily News</Button>
      </div>

      <Container className="my-5">
        <Row className="g-4"> 
          {/* Each column is a container for a feature card */}
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
              <h2>Get insights</h2> 
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Export the Home component 
export default Home;