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

        // Constructing the task object from state variables
        const task = {
            name: name,
            description: description,
            priority: priority
        };

        // Axios POST request to add the new task
        axios.post('http://localhost:4000/api/task', task)
            .then()
            .catch();
    }

    // Rendering the form to create a new task
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Task name input */}
                <div className="form-group">
                    <label>Add task Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>

                {/* Task description input */}
                <div className="form-group">
                    <label>Add task Description: </label>
                    <input type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>

                {/* Task priority input */}
                <div className="form-group">
                    <label>Add task Priority: </label>
                    <input type="text"
                        className="form-control"
                        value={priority}
                        onChange={(e) => { setPriority(e.target.value) }}
                    />
                </div>

                {/* Submit button */}
                <div>
                    <input type="submit" value="Add task" />
                </div>
            </form>
        </div>
    );
}

// Export the Create component for use in other parts of the app
export default Create;
