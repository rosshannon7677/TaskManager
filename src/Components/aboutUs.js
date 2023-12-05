// AboutUs.js
import React from 'react';
import './aboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>

        <div className="info-card">
          <img src="https://via.placeholder.com/150" alt="Welcome" className="info-image" />
          <div className="info-text">
            <h3>Welcome to Task Manager</h3>
            <p>
              Your go-to application for managing your tasks efficiently. Whether you're organizing your day,
              planning projects, or simply keeping track of your to-do list, Task Manager is here to help you stay
              organized and productive.
            </p>
          </div>
        </div>

        <div className="info-card">
          <img src="https://via.placeholder.com/150" alt="Mission" className="info-image" />
          <div className="info-text">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide a simple and intuitive task management solution for individuals and teams.
              Feel free to explore the features and make the most out of your productivity with Task Manager.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
