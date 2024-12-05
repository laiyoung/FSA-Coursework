const COHORT = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/artists`;

// === State ===

const state = {
  artists: [],
};

/** Updates state with artists from API */
async function getArtists() {
  try {
    const promise = await fetch(API_URL);
    //   console.log(response.json());
    const response = await promise.json();

    if (!response.success) {
      throw response.error;
    }
    console.log(response.data);
    state.artists = response.data;
  } catch (error) {
    console.log(error);
    alert("Unable to load artist");
  }
}

/** Asks the API to create a new artist based on the given `artist` */
async function addArtist(artist) {
  const requestObject = {
    name: "Laigha",
    imageUrl: "https://www.example.com/image.jpg",
    description: "This is a description of the artist.",
  };
  const promise = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artist),
  });
  const response = await promise.json();
  console.log(response);
  render();
}
// Delete Function:
async function deleteArtist(artist) {
  const promise = await fetch(API_URL + "/" + artist.id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await promise.json();
  console.log(response);
  render();
}

// === Render ===

/** Renders artists from state */
function renderArtists() {
  const ul = document.getElementById("artists");
  ul.innerHTML = "";
  state.artists.forEach((artist) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = artist.name;
    div.appendChild(h1);
    const deleteButton = document.createElement("button");
    deleteButton.id = artist.id;
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteArtist(artist);
    });

    div.appendChild(deleteButton);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

/** Syncs state with the API and rerender */
async function render() {
  await getArtists();
  renderArtists();
  const form = document.getElementById("addArtist");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    //     const name = formData.get("artistName");
    //     const imageUrl = formData.get("imageUrl");
    //     const description = formData.get("description");
    const artist = {
      name: formData.get("artistName"),
      imageUrl: formData.get("imageUrl"),
      description: formData.get("description"),
    };
    addArtist(artist);
  });
}

// === Script ===

render();

// TODO: Add artist with form data when the form is submitted
