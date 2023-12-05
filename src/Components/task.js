import React, { useState } from 'react';  // Import React and useState
import { Container, Form, FormControl, Button } from 'react-bootstrap';  // Import necessary Bootstrap components

const Task = () => {
  const [tasks, setTasks] = useState([]);  // 'tasks' stores the list of tasks, 'setTasks' is a function to update 'tasks'
  const [newTask, setNewTask] = useState('');  // 'newTask' stores the input for a new task, 'setNewTask' updates 'newTask'

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <h1>Task Manager</h1>
      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button variant="primary" onClick={addTask}>Add Task</Button>
        </Form>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <Button variant="danger" size="sm" onClick={() => removeTask(index)}>Remove</Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Task;
