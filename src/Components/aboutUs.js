// AboutUs.js
// Import necessary components from react-bootstrap library
import { Container, Card } from 'react-bootstrap';

// Define the functional component 'AboutUs'
function AboutUs() {
  // JSX structure representing the UI of the component
  return (
    <Container className="my-4">
      {/* Heading for the About Us section */}
      <h2 className="text-center mb-4">About Us</h2>

      {/* Bootstrap Card for a visually appealing layout */}
      {/* Card containing information about the application */}
      <Card>
        <Card.Body>
          {/* Title for the card */}
          <Card.Title>Welcome to Task Manager</Card.Title>
          {/* Text content describing the purpose of the application */}
          <Card.Text>
            Your go-to application for managing your tasks efficiently. Whether you're organizing your day,
            planning projects, or simply keeping track of your to-do list, Task Manager is here to help you stay
            organized and productive.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Another Card for additional information */}
      <Card className="mt-4">
        <Card.Body>
          {/* Title for the card */}
          <Card.Title>Our Mission</Card.Title>
          {/* Text content describing the mission of the application */}
          <Card.Text>
            Our mission is to provide a simple and intuitive task management solution for individuals and teams.
            Feel free to explore the features and make the most out of your productivity with Task Manager.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

// Export the 'AboutUs' component as the default export of this module
export default AboutUs;
