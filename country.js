const loadCountry = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
loadCountry();

const countryContainer = document.querySelector("#country");
// const displayCountry = (countries) => {
//   for (country of countries) {
//     console.log(country);
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <img src="${country.flag}" style="padding: 16px; background : rgba(0, 128, 0, 0.3); border:10px solid green ; width:200px; "  >
//     <h1> Country Name: ${country.name} </h1>
//     <p>capital: ${country.capital} </p>
//     <p>currency: ${country.currencies[0].name} </p>
//     <p>currency symbol: ${country.currencies[0].symbol} </p>
//     <p>Population: ${country.population} </p>
//     `;
//     countryContainer.appendChild(div);
//   }
// };
const displayCountry = (countries) => {
  countries.forEach((country) => {
    console.log(country);
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${country.flag}" style="padding: 16px; background : silver; border:10px solid green ; width:200px; "  >
    <h1> Country Name: ${country.name} </h1>
    <p>capital: ${country.capital} </p>
    <p>currency: ${country.currencies[0].name} </p>
    <p>currency symbol: ${country.currencies[0].symbol} </p>
    <p>Population: ${country.population} </p>
    <button onclick = "showCountry('${country.name}')" style = " padding : 20px; background-color: tomato; color: white; font-size: 20px">read more</button>
    `;
    div.classList.add("country");
    countryContainer.appendChild(div);
  });
};

const showCountry = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}
    `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountryDetail(data[0]));
  //   console.log(url);
};

const showCountryDetail = (country) => {
  const showDetail = document.querySelector("#main");
  showDetail.innerHTML = `
<img src="${country.flag}" style="padding: 16px; background : silver; border:10px solid green ; width:200px; "  >
<h1> Country Name: ${country.name} </h1>
<p>capital: ${country.capital} </p>
<p>currency: ${country.currencies[0].name} </p>
<p>currency symbol: ${country.currencies[0].symbol} </p>
<p>Population: ${country.population} </p>
<button onclick = "showCountry('${country.name}')" style = " padding : 20px; background-color: tomato; color: white; font-size: 20px">read more</button>
`;
  showDetail.classList.add("country");
};
