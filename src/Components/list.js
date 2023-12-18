// Importing necessary hooks and modules
import { useEffect, useState } from "react";
import axios from "axios";
import Tasks from "./tasks";

// Define the List component
function List() {
    // State 'data' to store the tasks
    const [data, setData] = useState([]);

    // useEffect hook to fetch tasks data when the component mounts
    useEffect(
        () => {
            // Axios GET request to your API endpoint
            axios.get('http://localhost:4000/api/tasks')
                .then(
                    (response) => {
                        // Update the state with the response data
                        setData(response.data)
                    }
                )
                .catch(
                    (error) => {
                        // Log any errors to the console
                        console.log(error);
                    }
                )
        }, [] // Empty dependency array means this effect runs only once after the initial render
    );

    // Function to reload tasks data
    const Reload = () => {
        axios.get('http://localhost:4000/api/tasks')
            .then(
                (response) => {
                    // Update the state with the new tasks data
                    setData(response.data)
                }
            )
            .catch(
                (error) => {
                    // Log any errors to the console
                    console.log(error);
                }
            )
    }

    // Rendering the Tasks component and passing the tasks data and Reload function as props
    return (
        <div>
            <Tasks myTasks={data} ReloadData={Reload}></Tasks>
        </div>
    );
}

// Export the List component for use in other parts of the app
export default List;
