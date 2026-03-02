const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let posts = JSON.parse(localStorage.getItem("blogPosts"));
if (!posts) {
  posts = [];
}

let post = null;

for (let i = 0; i < posts.length; i++) {
  if (String(posts[i].id) === String(id)) {
    post = posts[i];
  }
}

const titleText = document.getElementById("titleText");
const contentText = document.getElementById("contentText");

const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

const editBox = document.getElementById("editBox");
const titleInput = document.getElementById("titleInput");
const contentInput = document.getElementById("contentInput");

const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

if (post == null) {
  titleText.textContent = "Post not found";
  editBtn.style.display = "none";
  deleteBtn.style.display = "none";
} else {
  titleText.textContent = post.title;
  contentText.textContent = post.content;
}

editBtn.onclick = function () {
  editBox.style.display = "block";
  titleInput.value = post.title;
  contentInput.value = post.content;
};

cancelBtn.onclick = function () {
  editBox.style.display = "none";
};

saveBtn.onclick = function () {
  post.title = titleInput.value;
  post.content = contentInput.value;

  localStorage.setItem("blogPosts", JSON.stringify(posts));

  titleText.textContent = post.title;
  contentText.textContent = post.content;

  editBox.style.display = "none";
};

deleteBtn.onclick = function () {
  let newPosts = [];

  for (let i = 0; i < posts.length; i++) {
    if (String(posts[i].id) !== String(id)) {
      newPosts.push(posts[i]);
    }
  }

  localStorage.setItem("blogPosts", JSON.stringify(newPosts));

  window.location.href = "index.html";
};