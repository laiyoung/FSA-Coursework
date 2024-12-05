const COHORT = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}`;

// === State ===

const state = {
  events: [],
};
// === References ===
const form = document.getElementById("addEvent");

/** Updates state with events from API */
async function getParties() {
  try {
    const promise = await fetch(`${API_URL}/events`);
    //   console.log(response.json());
    const response = await promise.json();

    if (!response.success) {
      throw response.error;
    }
    console.log(response.data);
    state.events = response.data;
  } catch (error) {
    console.log(error);
    alert("Unable to load events");
  }
}

/** Asks the API to create a new event based on the given `event` */
async function addParty(newEvent) {
  try {
    const promise = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    });
    const response = await promise.json();
    console.log(response);

    if (!response.success) {
      throw response.error;
    }
    console.log(response.data);
    render();
  } catch (error) {
    console.log(error);
    alert("Unable to add event");
  }
}

// Delete Event Function:
async function deleteParty(event) {
  try {
    const promise = await fetch(`${BASE_URL}/events/${id}`, {
      method: "DELETE",
    });
    const response = await promise.json();
    console.log(response);

    if (!response.success) {
      throw new Error("Event could not be deleted.");
    }
    console.log(response.data);
    render();
  } catch (error) {
    console.log(error);
    alert("Unable to delete event");
  }
}

// === Event Listener for Submissions ===
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const eventDate = new Date(form.eventDate.value).toISOString();
    const formData = new FormData(form);
    const newEvent = {
      name: formData.get("eventName"),
      description: formData.get("description"),
      date: eventDate,
      location: formData.get("location"),
    };
    await addParty(newEvent);
    form.reset();
  } catch (error) {
    console.log(error);
  }
});

// === Renders ===

/** Renders events from state */
function renderParties() {
  const ul = document.getElementById("eventsForm");
  ul.innerHTML = "";
  state.events.forEach((event) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = event.name;
    div.appendChild(h1);
    const deleteButton = document.createElement("button");
    deleteButton.id = event.id;
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteParty(event.id);
    });

    div.appendChild(deleteButton);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

/** Syncs state with the API and rerenders */
async function render() {
  await getParties();
  renderParties();
}

// === Script ===

render();
