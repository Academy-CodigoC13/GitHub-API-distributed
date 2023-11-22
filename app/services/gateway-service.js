// This is the gateway service that will combine the data from the user service and the repository service.

const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3002;

app.get("/user-with-repos/:username", async (req, res) => {
  const username = req.params.username;

  const userDataPromise = fetch(`http://localhost:3000/user/${username}`);
  const repoDataPromise = fetch(`http://localhost:3001/repos/${username}`);

  const [userData, repoData] = await Promise.all([
    userDataPromise,
    repoDataPromise,
  ]);

  if (!userData.ok || !repoData.ok) {
    res.status(500).json({ error: "Error fetching user or repository data" });
    return;
  }

  const combinedData = {
    user: await userData.json(),
    repos: await repoData.json(),
  };

  res.json(combinedData);
});

app.listen(port, () => {
  console.log(`Gateway service listening on port ${port}`);
});
