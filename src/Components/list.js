import React, { useEffect, useState } from 'react';
import axios from 'axios';

function List() {
  // State to hold the tasks data
  const [tasks, setTasks] = useState([]);

  // useEffect to fetch tasks when the component mounts
  useEffect(() => {
    // Fetch tasks when the component mounts
    fetchTasks();
  }, []);

  // Function to fetch tasks from the backend
  const fetchTasks = () => {
    // Backend endpoint for fetching tasks is 'http://localhost:4000/api/tasks'
    axios.get('http://localhost:4000/api/tasks')
      .then(response => {
        // Update the tasks state with the fetched data
        setTasks(response.data);
      })
      .catch(error => {
        // Handle errors 
        console.error('Error fetching tasks:', error);
      });
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {/* Display task information here */}
            <p>Task Name: {task.name}</p>
            <p>Description: {task.description}</p>
            <p>Priority: {task.priority}</p>     
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
