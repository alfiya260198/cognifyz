document.getElementById("loadData").addEventListener("click", fetchPost);
function fetchPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            const randomPost = data[Math.floor(Math.random() * data.length)];
            document.getElementById("postContainer").innerHTML = `
                <h2>${randomPost.title}</h2>
                <p>${randomPost.body}</p>
            `;
        })
        .catch(error => console.error("Error fetching data:", error));
}
