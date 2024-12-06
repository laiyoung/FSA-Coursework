const COHORT = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

// === State ===

const state = {
  events: [],
};
// === References ===
const form = document.getElementById("addEvent");

/** Updates state with events from API */
async function getParties() {
  try {
    const promise = await fetch(API_URL);
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
    const promise = await fetch(API_URL, {
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

// Delete Event Function (only shows delete on refresh):
async function deleteParty(event) {
  try {
    await fetch(API_URL + "/" + event.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
 
    render();
    // console.log("inside delete party");
  } catch (error) {
    console.log(error);
  }
}

// === Event Listener for Submissions ===
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const eventDate = new Date(form.eventDate.value).toISOString();
  try {
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
  const eventList = document.querySelector("#eventsForm");
  if (!state.events.length) {
    eventList.innerHTML = "<li>No events.</li>";
    return;
  }
  const eventElements = state.events.map((event) => {
    const eventDate = new Date(event.date).toLocaleString();

    const eventCard = document.createElement("section");
    eventCard.innerHTML = `
      <div>
        <h3>${event.name}</h3>
        <p>${event.description}</p>
        <p>${eventDate}</p>
        <p>${event.location}</p>
      </div>
    `;

    // Delete Button and Event Listener
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Event";
    eventCard.append(deleteButton);
    deleteButton.addEventListener("click", () => deleteParty(event));

    return eventCard;
  });

  eventList.replaceChildren(...eventElements);
}

/** Syncs state with the API and rerenders */
async function render() {
  // console.log("Inside render");
  await getParties();
  renderParties();
}

// === Script ===

render();
