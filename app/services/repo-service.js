const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3001;

const getRepoData = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const repoData = await response.json();
  return repoData;
};

app.get("/repos/:username", async (req, res) => {
  const username = req.params.username;

  try {
    const repoData = await getRepoData(username);
    res.json(repoData);
  } catch (error) {
    console.error("Error fetching repository data:", error);
    res.status(500).json({ error: "Error fetching repository data" });
  }
});

app.listen(port, () => {
  console.log(`Repo service listening on port ${port}`);
});
