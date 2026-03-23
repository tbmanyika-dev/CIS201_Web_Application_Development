// import express
const express = require('express');

//Initialize express
const app = express();

//define the port
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.json(users);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// To run this server, save the code in a file named 'server.js', and then execute 'node server.js' in your terminal. You can access the server by navigating to 'http://localhost:3000' in your web browser.

// This code sets up a basic Express server that listens on port 3000. When you access the root URL ('/'), it responds with 'Hello World!'.

// You can expand this server by adding more routes, handling different HTTP methods (like POST, PUT, DELETE), and integrating with databases or other services as needed.

//list of users
const users = [
    { id: 1, name: 'Alice', email: 'alice@gmail.com' },
    { id: 2, name: 'Bob', email: 'bob@gmail.com' }
];

// For example, you could add a new route to handle a POST request like this:

// This route allows you to add a new user by sending a POST request to '/users' with a JSON body containing the user's details. The new user will be added to the 'users' array, and the server will respond with the newly created user object.
