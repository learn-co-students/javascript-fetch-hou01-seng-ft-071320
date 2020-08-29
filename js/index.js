const app = "I don't do much.";

const token = 'a31e875fbcdd3d735486f355f69ab7e7070e9074';

fetch('https://api.github.com/user/repos/',{
    headers: {
    Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));