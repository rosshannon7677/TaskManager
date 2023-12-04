import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Container, Nav, Card } from 'react-bootstrap'; // Import Bootstrap components
import './App.css'; // You can create a separate CSS file for custom styling

function App() {
  // JSX structure representing the UI of the component
  return (
    <div>
      {/* Bootstrap Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Task Manager</Navbar.Brand>
          {/* Navigation links */}
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Tasks</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* About Us Section */}
      <Container className="my-4">
        <h2 className="text-center mb-4">About Us</h2>

        {/* Bootstrap Card for a visually appealing layout */}
        <Card>
          <Card.Body>
            <Card.Title>Welcome to Task Manager</Card.Title>
            <Card.Text>
              Your go-to application for managing your tasks efficiently. Whether you're organizing your day,
              planning projects, or simply keeping track of your to-do list, Task Manager is here to help you stay
              organized and productive.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Our Mission</Card.Title>
            <Card.Text>
              Our mission is to provide a simple and intuitive task management solution for individuals and teams.
              Feel free to explore the features and make the most out of your productivity with Task Manager.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

// Export the 'App' component as the default export of this module
export default App;
