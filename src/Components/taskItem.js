// Importing necessary modules and components
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// Define the TaskItem component
function TaskItem(props) {
    return (
        <div className="task-item-container">
            <Card className="task-card">
                {/* Displaying the task name */}
                <Card.Header className="task-card-header">
                    <strong>Task Name:</strong> {props.myTask.name}
                </Card.Header>

                {/* Card body containing the task description and priority */}
                <Card.Body className="task-card-body">
                    <blockquote className="task-blockquote">
                        <p className="task-description">
                            <strong>Task Description:</strong> {props.myTask.description}
                        </p>
                        <footer className="task-priority">
                            <strong>Task Priority:</strong> {props.myTask.priority}
                        </footer>
                    </blockquote>
                </Card.Body>

                {/* Edit and Delete buttons for the task */}
                <div className="task-card-actions">
                    {/* Link to the edit page for the task */}
                    <Link to={'/edit/' + props.myTask._id} className="btn btn-primary edit-button">
                        Edit
                    </Link>

                    {/* Delete button with an onClick event handler */}
                    <Button variant="danger" className="delete-button" onClick={(e) => {
                        e.preventDefault();
                        axios.delete('http://localhost:4000/api/task/' + props.myTask._id)
                            .then((res) => {
                                props.Reload();
                            })
                            .catch((error) => {                          
                            });
                    }}>
                        Delete
                    </Button>
                </div>
            </Card>
        </div>
    );
}

// Export the TaskItem component
export default TaskItem;
