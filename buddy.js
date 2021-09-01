const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => displayBuddies(data));
};
loadBuddies();

let displayBuddies = (data) => {
  const buddies = data.results;
  const showBuddy = document.querySelector(".buddies");
  console.log(buddies);
  for (const buddy of buddies) {
    console.log(buddy);
    const div = document.createElement("div");

    div.innerHTML = `
    <img src="${buddy.picture.large}" style="padding: 16px; background : rgba(0, 128, 0, 0.3); border:10px solid green ; border-radius : 100px;"  >
    <h1> gender : ${buddy.gender}</h1>
    <h3> Name :${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h3>
    <h3> email : ${buddy.email}</h3>

    `;
    showBuddy.appendChild(div);
  }
};
//   for (let i = 0; i < 5; i++) {}
// style="padding: 16px; text-align: center; color:blue;"
