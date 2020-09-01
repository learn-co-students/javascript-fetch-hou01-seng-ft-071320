const app = "I don't do much.";

const thatsSoFetch = () => {
    fetch('https://api.github.com/repos/jquery/jquery/commits')
    .then(res => res.json())
    .then(console.log)
}

thatsSoFetch()