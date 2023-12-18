// Import TaskItem component
import TaskItem from "./taskItem";

// Define the Tasks component. It takes 'props' as an argument.
function Tasks(props) {
    // Maps over the 'myTasks' array passed in through props. 
    // For each task, it renders a TaskItem component.
    return props.myTasks.map(
        (task) => {
            // The TaskItem component is passed individual task data, a unique key, and a Reload function.
            return <TaskItem myTask={task} key={task._id} Reload={() => { props.ReloadData(); }}></TaskItem>
        }
    );
}

// Export the Tasks component for use in other parts of the app.
export default Tasks;