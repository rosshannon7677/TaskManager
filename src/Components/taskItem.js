// Importing necessary modules and components
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// Define the TaskItem component
function TaskItem(props) {
    return (
        <div style={{ width: '30%',margin:'auto', marginBottom: '20px', marginTop: '10px'}}>
            <Card style={{ border: '3px solid black' }}>
                {/* Displaying the task name */}
                <Card.Header style={{ backgroundColor: 'lightgray', border: '1px solid black' }}>
                    <strong>Task Name:</strong> {props.myTask.name}
                </Card.Header>
                
                {/* Card body containing the task description and priority */}
                <Card.Body style={{ border: '1px solid black' }}>
                    <blockquote>
                        <p style={{ border: '1px solid black', padding: '5px' }}>
                            <strong>Task Description:</strong> {props.myTask.description}
                        </p>
                        <footer style={{width: '30%', margin:'auto', border: '1px solid black', padding: '5px' }}>
                            <strong>Task Priority:</strong> {props.myTask.priority}
                        </footer>
                    </blockquote>
                </Card.Body>

                {/* Edit and Delete buttons for the task */}
                <div style={{ padding: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                    {/* Link to the edit page for the task */}
                    <Link to={'/edit/' + props.myTask._id} className='btn btn-primary' style={{ marginRight: '10px' }}>
                        Edit
                    </Link>
                    
                    {/* Delete button with an onClick event handler */}
                    <Button variant='danger' onClick={(e) => {
                        e.preventDefault();
                        axios.delete('http://localhost:4000/api/task/' + props.myTask._id)
                            .then((res) => {
                                props.Reload();
                            })
                            .catch((error) => {
                                // Error handling logic here
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
