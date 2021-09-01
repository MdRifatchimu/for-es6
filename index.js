const loadData = document.querySelector("#load-data");
loadData.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
});
function loadData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => displayApi(json));
}

loadData();

const loadPost = document.querySelector("#load-post");
loadPost.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => displayPost(json));
});

// function displayUsers(data) {
//   const display = document.getElementById("display");
//   // console.log(data);
//   for (const user of data) {
//     console.log(user);
//     const p = document.createElement("p");
//     p.innerHTML = `<h1>name: ${user.name} </h1> email: ${user.email} <br> <span style='color: red;'>username: ${user.username}</span> `;
//     display.appendChild(p);
//   }
// }
// function displayPost(data) {
//   const display = document.getElementById("display");
//   // console.log(data);
//   for (const user of data) {
//     console.log(user);
//     const h1 = document.createElement("h1");
//     h1.innerText = `title :${user.title} `;
//     const p = document.createElement("p");
//     p.innerHTML = `<h1>hi</h1> body: ${user.body} `;
//     display.appendChild(h1);
//     display.appendChild(p);
//   }
// }
const display = document.getElementById("display");

const displayApi = (data) => {
  for (user of data) {
    const h1 = document.createElement("h1");
    h1.classList.add("color-red");
    h1.innerHTML = `title :${user.name} `;
    display.appendChild(h1);
  }
};
