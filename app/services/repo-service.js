const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3001;

app.get("/repos/:username", async (req, res) => {
  const username = req.params.username;

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const repoData = await response.json();
    res.json(repoData);
  } catch (error) {
    console.error("Error fetching repository data:", error);
    res.status(500).json({ error: "Error fetching repository data" });
  }
});

app.listen(port, () => {
  console.log(`Repo service listening at http://localhost:${port}`);
});
