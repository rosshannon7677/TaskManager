// Import required modules
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

// Enable Cross-Origin Resource Sharing (CORS) middleware
app.use(cors());

// CORS headers configuration
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Body parsing middleware for handling JSON and URL-encoded data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection setup using Mongoose
const mongoose = require('mongoose');

async function main() {
  // Connect to MongoDB using Mongoose
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.bypnyjt.mongodb.net/MyDB?retryWrites=true&w=majority');
  // Use the following connection string for local MongoDB with authentication
  // await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
}

// Define a simple route that responds with 'Hello World!' for GET requests to the root
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set up the server to listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
