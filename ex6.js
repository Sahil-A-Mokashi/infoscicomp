//This should have a function that takes a GitHub username 
//and outputs their repo with the most forks.

//https://api.github.com/
async function mostForkedRepo(username) {
  const repos = await fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json());

  let max = repos[0];

  for (let repo of repos) {
    if (repo.forks_count > max.forks_count) {
      max = repo;
    }
  }

  console.log(max.name);
}

// mostForkedRepo("sahil-a-mokashi");

async function runEx6() {

    let username = document.getElementById("githubUser").value;

    const repos = await fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json());

    let max = repos[0];

    for (let repo of repos) {

        if (repo.forks_count > max.forks_count) {
            max = repo;
        }
    }

    alert(
        "Repository: " + max.name +
        "\nForks: " + max.forks_count
    );
}
