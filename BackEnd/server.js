const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


// Enabling CORS for cross-origin requests
app.use(cors());

// Additional CORS configuration
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Configuring body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://datarep:F0Ps2tT2XWn4j2UP@cluster1.eph68ut.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("Connected"))
    .catch(err => console.log(err));

// Defining a schema for tasks
const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    priority: Number
});

// Creating a model for tasks
const taskModel = mongoose.model('my_tasks', taskSchema);

// Define a PUT route for updating tasks
app.put('/api/task/:id', async (req, res) => {
    console.log('Update: ' + req.params.id);

    let task = await taskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(task);
});

// Define a DELETE route for removing tasks
app.delete('/api/task/:id', async (req, res) => {
    console.log("Delete: " + req.params.id);

    let task = await taskModel.findByIdAndDelete(req.params.id);
    res.send(task);
});

// Define a POST route for creating new tasks
app.post('/api/task', (req, res) => {
    console.log(req.body);

    // Convert the priority value from the request body to an integer
    const priority = parseInt(req.body.priority, 10);

    // Check if the priority is not a number or outside the range of 1 to 10
    if (isNaN(priority) || priority < 1 || priority > 10) {
        // Respond with a 400 Bad Request status code and an error message
        return res.status(400).send("Priority must be a number between 1 and 10.");
    }

    // Create the task if the priority is valid
    taskModel.create({
        name: req.body.name,
        description: req.body.description,
        priority: priority // Use the parsed priority
    })
        .then(() => res.status(201).send("Task Created"))
        .catch((error) => {
            console.log(error);
            res.status(500).send("Task NOT Created");
        });
});


// Define a GET route for the root of the server
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define a GET route for retrieving all tasks, sorted by priority, with priority between 1 and 10
app.get('/api/tasks', async (req, res) => {
    try {
        let tasks = await taskModel.find({ priority: { $gte: 1, $lte: 10 } }).sort({ priority: 1 });
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error retrieving tasks");
    }
});


// Define a GET route for retrieving a single task by ID
app.get('/api/task/:identifier', async (req, res) => {
    console.log(req.params.identifier);
    let task = await taskModel.findById(req.params.identifier);
    res.send(task);
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
