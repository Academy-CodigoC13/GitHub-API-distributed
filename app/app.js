const express = require("express");
const cors = require("cors");
const userService = require("./services/user-service");
const repoService = require("./services/repo-service");
const gatewayService = require("./services/gateway-service");

const app = express();
const port = 3003;

app.use(cors("*"));

// Define routes for user service
app.use("/user", userService);

// Define routes for repo service
app.use("/repos", repoService);

// Define routes for gateway service
app.use("/user-with-repos", gatewayService);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
