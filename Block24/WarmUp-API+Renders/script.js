const API_URL = "https://catfact.ninja/";

const state = {
  fact: "",
  breeds: [],
};

const $catFactContainer = document.getElementById("cat-fact-container");
const $catBreedsContainer = document.getElementById("cat-breeds-container");

//Fetches a random fact from the /fact endpoint
// and updates the fact object in state
//then re-renders the UI
async function getFact() {
  const promise = await fetch(API_URL + "fact");
  const response = await promise.json();
  state.fact = response.fact;
  render();
}

//Fetches breeds from the /breeds endpoint
// and updates the breeds array in state
//then re-renders the UI
async function getBreeds() {
  const promise = await fetch(API_URL + "breeds");
  const response = await promise.json();
  state.breeds = response.data;
  render();
}

//Adds the HTML elements needed to the DOM
// with data from the javascript state
function render() {
  //TODO:  A button and a <p> element to the catFactContainer
  const getFactButton = document.createElement("button");
  getFactButton.textContent = "Click for Fact";
  getFactButton.addEventListener("click", getFact);

  const factParagraph = document.createElement("p");
  factParagraph.textContent = state.fact;

  $catFactContainer.replaceChildren(getFactButton, factParagraph);

  //TODO:  Divs for each cat breed type, display the Breed, country, coat and pattern
  const breedCards = state.breeds.map((breed) => {
    const breedContainer = document.createElement("div");
    breedContainer.innerHTML = `<h3>${breed.breed}</h3>
    <p>Country: ${breed.country}</p>
    <p>Coat: ${breed.coat}</p>
    <p>Pattern: ${breed.pattern}</p>`;
    return breedContainer;
  });

  $catBreedsContainer.replaceChildren(...breedCards);
}

async function init() {
  await getBreeds();
  render();
}

init();









