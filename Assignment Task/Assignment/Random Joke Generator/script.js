const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const nextJokeBtn = document.getElementById("nextJokeBtn");
const loader = document.getElementById("loader");

function fetchJoke() {
    nextJokeBtn.disabled = true;
    loader.style.display = "block";
    setup.textContent = "";
    punchline.textContent = "";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(joke => {
            setup.textContent = joke.setup;
            punchline.textContent = joke.punchline;
        })
        .catch(() => {
            setup.textContent = "Failed to fetch joke. Try again.";
            punchline.textContent = "";
        })
        .finally(() => {
            nextJokeBtn.disabled = false;
            loader.style.display = "none";
        });
}

nextJokeBtn.addEventListener("click", fetchJoke);

fetchJoke();
