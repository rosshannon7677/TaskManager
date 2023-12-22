// Importing the useState hook from React and axios for making HTTP requests
import { useState } from "react";
import axios from "axios";

// Define the Create component
function Create() {
    // State variables to store the name, description, and priority of the task
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submit action

        console.log(
            "Name: " + name +
            " Description: " + description +
            " Priority: " + priority
        );

         // Check if the priority is within the range of 1 to 10
        if (priority < 1 || priority > 10) {
        window.alert('Please enter a priority number between 1 and 10.');
        return; // Exit the function if the priority is not valid
        }

        // Constructing the task object from state variables
        const task = {
            name: name,
            description: description,
            priority: priority
        };

        // Axios POST request to add the new task
        axios.post('http://localhost:4000/api/task', task)
            .then(()=>{
                window.alert('Task added to list page');
            })
            .catch((error) => {
                // You can handle server errors here, if necessary
                console.error('Error adding the task:', error);
            });
    }

    // Rendering the form to create a new task
    return (
        <div className="create-task-container">
             {/* Task name input */}
            <form onSubmit={handleSubmit} className="task-form">
                <div className="form-group task-name-input">
                    <label>Add task Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                 {/* Task description input */}
                <div className="form-group task-description-input">
                    <label>Add task Description: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                {/* Task priority input */}
                <div className="form-group task-priority-input">
                    <label>Add task Priority(1-10): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    />
                </div>
                {/* Submit button */}
                <div className="submit-button-container">
                    <input type="submit" value="Add task" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

// Export the Create component for use in other parts of the app
export default Create;
