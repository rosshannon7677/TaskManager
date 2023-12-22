// Importing necessary hooks and modules
import { useEffect, useState } from "react";
import axios from "axios";
import Tasks from "./tasks";

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
        }, [] 
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
    
    // Render the Tasks component with the fetched data
    // Passing 'data' as 'myTasks' prop to the Tasks component
    // Passing 'Reload' as 'ReloadData' prop to the Tasks component for refreshing the tasks list
    return (
        <div>
            <Tasks myTasks={data} ReloadData={Reload}></Tasks>
        </div>
    );
}

export default List;
