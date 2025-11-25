const loadPostsBtn = document.getElementById("loadPostsBtn");
const loadingMsg = document.getElementById("loadingMsg");
const postList = document.getElementById("postList");

function getPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    "Understanding JavaScript Closures",
                    "A Guide to Async/Await",
                    "CSS Grid vs Flexbox",
                    "Introduction to React Hooks",
                    "Writing Clean Code in JS"
                ]);
            } else {
                reject("Failed to load posts");
            }
        }, 2000);
    });
}

async function loadPosts() {
    loadingMsg.textContent = "Loading posts...";
    postList.innerHTML = "";
    try {
        const posts = await getPosts();
        posts.forEach(title => {
            const li = document.createElement("li");
            li.textContent = title;
            postList.appendChild(li);
        });
        loadingMsg.textContent = "";
    } catch (error) {
        loadingMsg.textContent = error + ". Click 'Load Posts' to retry.";
    }
}

loadPostsBtn.addEventListener("click", loadPosts);
