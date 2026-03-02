let form = document.getElementById("postForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("content").value.trim();

    if (title === "" || content === "") {
        alert("Please fill in all fields");
        return;
    }

    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    posts.push({
        id: Date.now(),
        title: title,
        content: content
    });

    localStorage.setItem("blogPosts", JSON.stringify(posts));

    window.location.href = "index.html";
});