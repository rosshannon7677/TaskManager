// Importing necessary modules and components
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// Define the TaskItem component
function TaskItem(props) {
    // The JSX returned by the component
    return (
        <div>
            <Card>
                {/* Displaying the task name in the card header */}
                <Card.Header>{props.myTask.name}</Card.Header>
                
                {/* Card body containing the task description and priority */}
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        {props.myTask.description}
                        <footer>
                            {props.myTask.priority}
                        </footer>
                    </blockquote>
                </Card.Body>

                {/* Edit and Delete buttons for the task */}
                {/* Link to the edit page for the task */}
                <Link to={'/edit/'+props.myTask._id} className='btn btn-primary'>Edit</Link>
                
                {/* Delete button with an onClick event handler */}
                <Button variant='danger' onClick={(e) => {
                    e.preventDefault();

                    // Axios DELETE request to remove the task
                    axios.delete('http://localhost:4000/api/task/' + props.myTask._id)
                        .then((res) => {
                            // Calling the Reload function passed from parent component
                            props.Reload();
                        })
                        .catch((error) => {
                            // Error handling logic here
                        });
                }}>Delete</Button>
            </Card>
        </div>
    );
}

// Export the TaskItem component
export default TaskItem;
