// This is the user service that will
// fetch user data from the GitHub API.
const express = require("express"); // express is a web framework for node.js
const fetch = require("node-fetch"); // node-fetch is a module that allows us to make HTTP requests from node.js

const app = express(); // create an express app
const port = 3000; // the port the app will listen on

// This function will fetch user data from the GitHub API
const getUserData = async (username) => {
  // make a request to the GitHub API
  const response = await fetch(`https://api.github.com/users/${username}`);
  const userData = await response.json(); // convert the response into JSON
  return userData;
};

// This is the route that will fetch user data
app.get("/user/:username", async (req, res) => {
  const username = req.params.username;

  // try/catch block to handle errors
  try {
    // Call the getUserData function and send the response
    const userData = await getUserData(username);
    res.json(userData);
  } catch (error) {
    // If there is an error, send an error response
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

// Start the app
app.listen(port, () => {
  console.log(`User service listening on port ${port}`);
});
