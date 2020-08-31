const app = "I don't do much.";

const token = 'bddcca1e1b912562de805dbbbd3c3c75961273f0';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
