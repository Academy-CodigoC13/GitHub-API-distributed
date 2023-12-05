async function getUserData() {
  const username = document.getElementById("username").value;
  const response = await fetch(`http://localhost:3000/user/${username}`);
  const userData = await response.json();
  document.getElementById("userData").innerHTML = JSON.stringify(userData);
}

async function getRepoData() {
  const repoUsername = document.getElementById("repoUsername").value;
  const response = await fetch(`http://localhost:3001/repos/${repoUsername}`);
  const repoData = await response.json();
  document.getElementById("repoData").innerHTML = JSON.stringify(repoData);
}

async function getCombinedData() {
  const combinedUsername = document.getElementById("combinedUsername").value;
  const response = await fetch(
    `http://localhost:3002/user-with-repos/${combinedUsername}`
  );
  const combinedData = await response.json();
  document.getElementById("combinedData").innerHTML =
    JSON.stringify(combinedData);
}
