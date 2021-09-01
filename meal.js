const toggleSpinner = displayStyle => {
  document.getElementById('spinner').style.display = displayStyle;
};
const toggleSearchResult = displayStyle => {
  document.getElementById('search-result').style.display = displayStyle;
};

const searchFood = () => {
  const searchField = document.querySelector('#search-field');
  const searchText = searchField.value;
  toggleSpinner('block');
  toggleSearchResult('none');
  searchField.value = '';
  if (searchText === '') {
    const error = document.querySelector('#error');
    error.classList.add('error');

    error.innerText = 'No Food Found';
  } else {
    // error.innerText = 'Food Found';
    error.style.display = 'none';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
  `;
    fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data));
  }
};

function displaySearchResult(meals) {
  //   console.log(meals);
  const searchResult = document.querySelector('#search-result');
  //   searchResult.innerHTML = '';
  searchResult.textContent = '';
  const meales = meals.meals;
  //   console.log(meales);
  // for (const meal of meales) {
  meales?.forEach(meal => {
    console.log(meal);
    const instruction = meal.strInstructions;
    const instructions = instruction.slice(0, 200);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
  
    <div  class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${instructions}</p>
        
      </div>
      <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
      ${meal.strMeal}
      </button>
    </div>
   
    `;
    searchResult.appendChild(div);
  });
  toggleSpinner('none');
  toggleSearchResult('flex');
}

const loadMealDetail = mealId => {
  //   console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]));
};

const displayMealDetails = meal => {
  console.log(meal);
  const displayMeal = document.querySelector('#display-meal');
  displayMeal.textContent = '';
  const instruction = meal.strInstructions;
  const instructions = instruction.slice(0, 200);
  displayMeal.classList.add('card');

  displayMeal.innerHTML = `
  <img src="${meal.strMealThumb}" class="img-fluid  mx-auto" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${instructions}</p>
    </div>
    <a href="${meal.strYoutube}" class="btn btn-danger">See youtube Video</a>

`;
};
