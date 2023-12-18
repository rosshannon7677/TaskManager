// Importing necessary modules and components
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Components/createTask';
import Edit from './Components/editTask';
import AboutUs from './Components/aboutUs';
import Footer from './Components/footer';
import List from './Components/list';

// Define the App component
function App() {
  // The JSX returned by the component
  return (
    
    <BrowserRouter>
      <div className="App">
        {/* Navbar setup using react-bootstrap components */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Task Manager</Navbar.Brand>
            <Nav className="me-auto">
              {/* Navigation links */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/list">List</Nav.Link>
              <Nav.Link href="/aboutUs">About Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Routes setup for different pages in the application */}
        <Routes>
          {/* Route for the home page */}
          <Route path='/' element={<Navbar></Navbar>}></Route>
          {/* Route for listing tasks */}
          <Route path='/list' element={<List></List>}></Route>
          {/* Route for creating a new task */}
          <Route path='/create' element={<Create></Create>}></Route>
          {/* Route for editing a task */}
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
          {/* Route for the About Us page */}
          <Route path='/aboutUs/' element={<AboutUs></AboutUs>}></Route>
        </Routes>
        
        {/* Footer component displayed on all pages */}
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

// Export the App component
export default App;
