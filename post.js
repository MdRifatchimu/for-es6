const button = document.querySelector("#btn");
button.addEventListener("click", function () {
  function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => displayPost(data));
  }
  loadPosts();
});

function displayPost(posts) {
  const postContainer = document.querySelector("#posts");
  for (const post of posts) {
    console.log(post.title);
    const div = document.createElement("div");
    div.innerHTML = `
    <h1 style="padding: 16px; text-align: center; color:blue;">Title: ${post.title}</h1>
    <p style="padding: 16px; text-align: center; color:red;"> ${post.body}</p>
    `;
    postContainer.appendChild(div);
  }
}
