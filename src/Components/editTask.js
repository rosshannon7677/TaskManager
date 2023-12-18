import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Define a functional component named Edit
export default function Edit(props) {
    // Extracting the task ID from the URL parameters
    let { id } = useParams();

    // State variables for task details
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    // Hook to programmatically navigate to different routes
    const navigate = useNavigate();

    // useEffect to fetch task details once on component mount
    useEffect(() => {
        axios.get('http://localhost:4000/api/task/' + id)
            .then((response) => {
                // Updating state with fetched task data
                setName(response.data.name);
                setDescription(response.data.description);
                setPriority(response.data.priority);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [id]); // Dependency array with 'id' to re-run effect if 'id' changes

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Updated task data
        const newTask = {
            id: id,
            name: name,
            description: description,
            priority: priority
        };

        // PUT request to update the task
        axios.put('http://localhost:4000/api/task/' + id, newTask)
            .then((res) => {
                console.log(res.data);
                // Navigate to the list of tasks after successful update
                navigate('/list');
            });
    }

    // JSX for the task edit form
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Task name input field */}
                <div className="form-group">
                    <label>Edit Task Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {/* Description input field */}
                <div className="form-group">
                    <label>Edit Description: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                {/* Priority input field */}
                <div className="form-group">
                    <label>Edit Priority: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    />
                </div>
                {/* Submit button */}
                <div className="form-group">
                    <input type="submit" value="Edit Task" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}
