# GitHub-API-distributed

This project demonstrates a simple microservices architecture for fetching and
combining GitHub user and repository data using Node.js and Express. It
comprises three microservices

## How to run:

Make sure to install the required dependencies by running:

```bash
    npm install express node-fetch
```

This example includes three services:

1. User Service: Responsible for fetching user data from the GitHub API.
2. Repository Service: Responsible for fetching repository data for a given user
   from the GitHub API.
3. Gateway Service: Acts as a gateway that fetches data from the User Service
   and Repository Service and combines them before sending a response.

## Usage

To run this example, you would start each service in a separate terminal window:

```bash
    node user-service.js
    node repository-service.js
    node gateway-service.js
```

or use the concurrently package to run all three services at once:

```bash
    npm install concurrently
```

then run:

```bash
    npm run start
```

Then, you can access the combined user and repository data by making a request
to the Gateway Service:

```bash
    curl http://localhost:3002/user-with-repos/{github-username}

```

Replace `{github-username}` with an actual GitHub username. This is a simplified
example, and in a real-world scenario, you would need to consider issues like
authentication, error handling, and scalability.
