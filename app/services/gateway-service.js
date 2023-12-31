// This is the gateway service that will combine the data from the user service and the repository service.

const express = require("express");
const fetch = require("node-fetch");

// cors is a module that allows us to make requests from the browser
const cors = require("cors");

const app = express();

// allow cross-origin requests from the browser
app.use(cors("*"));

// register the port the app will listen on
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
