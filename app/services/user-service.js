const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.get("/user/:username", async (req, res) => {
  const username = req.params.username;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    res.json(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});
