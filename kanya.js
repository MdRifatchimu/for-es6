const button = document.querySelector("#btn");
button.addEventListener("click", function () {
  function loadQuotes() {
    fetch("https://api.kanye.rest/")
      .then((res) => res.json())
      .then((data) => displayQuotes(data));
  }
  loadQuotes();
});

// function displayPost(quote) {
//   const postContainer = document.querySelector("#quote");
//   //   const quotes = quotes;
//   console.log(quote);
//   const div = document.createElement("div");
//   div.innerHTML = `
//     <h1 style="padding: 16px; text-align: center; color:blue;">Title: ${quote.quote}</h1>

//     `;

//   //   div.innerText = "";
//   postContainer.appendChild(div);
// }

const displayQuotes = (quote) => {
  const quoteDisplay = document.querySelector("#quote");
  quoteDisplay.innerText = quote.quote;
};
