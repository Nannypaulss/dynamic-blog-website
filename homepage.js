const postsDiv = document.getElementById("posts");

function getPosts() {
  const raw = localStorage.getItem("blogPosts");
  return raw ? JSON.parse(raw) : [];
}

function renderPosts() {
  const posts = getPosts();

  if (posts.length === 0) {
    postsDiv.innerHTML = `
      <div class="post-card">
        <h3>No posts yet</h3>
        <p>Click "New Post" to create your first post.</p>
      </div>
    `;
    return;
  }

  postsDiv.innerHTML = posts.map(post => `
    <div class="post-card">
      <h3>${post.title}</h3>
      <p>${post.content.substring(0, 120)}...</p>
      <a href="post.html?id=${post.id}">View</a>
    </div>
  `).join("");
}

renderPosts();