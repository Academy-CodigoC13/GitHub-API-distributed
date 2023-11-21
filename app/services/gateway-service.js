// This is the gateway service that will combine the data from the user service and the repository service.
const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3002;

app.get("/user-with-repos/:username", async (req, res) => {
  const username = req.params.username;

  try {
    // Fetch user data
    const userResponse = await fetch(`http://localhost:3000/user/${username}`);
    const userData = await userResponse.json();

    // Fetch user's repositories
    const repoResponse = await fetch(`http://localhost:3001/repos/${username}`);
    const repoData = await repoResponse.json();

    // Combine user and repository data
    const result = {
      user: userData,
      repositories: repoData,
    };

    res.json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(port, () => {
  console.log(`Gateway service listening at http://localhost:${port}`);
});
