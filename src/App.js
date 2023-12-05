import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Container, Nav } from 'react-bootstrap'; // Import Bootstrap components
import './App.css'; // You can create a separate CSS file for custom styling
import AboutUs from './Components/aboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Task from './Components/task';

// ... (previous imports)

function App() {
  // JSX structure representing the UI of the component
  return (
    <Router>
      <div className="App">
        {/* Bootstrap Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Task Manager</Navbar.Brand>
            {/* Navigation links */}
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/task">Tasks</Nav.Link>
              <Nav.Link href="/aboutUs">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/task" element={<Task />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

// Export the 'App' component as the default export of this module
export default App;
