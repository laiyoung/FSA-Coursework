// === Constants + State Containers ===
const state = {
  start: [],
  targetEven: [],
  targetOdd: [],
};
const addNumsForm = document.querySelector("form");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");

// === Event Listeners + Associated Functions ===

//Adding Numbers to Form:
addNumsForm.addEventListener("submit", function (event) {
  event.preventDefault();

  addNumbers();
  renderStartingNumbers();
});

/** Add Numbers Function */
function addNumbers() {
  const number = addNumsForm.elements.number.value;
  if (number != "") {
    state.start.push(number);
  }
  renderStartingNumbers();
}
// Starting#s render function needed to be here to make the #s appear:
function renderStartingNumbers() {
  const numberBankDisplay = document.querySelector("#numberBank output");
  numberBankDisplay.innerHTML = state.start;
}

//Sort By 1:
sortOneButton.addEventListener("click", function (event) {
  event.preventDefault();
  /** Sort By 1 Function */
  const number = state.start.shift();
  sortNumber(number);
  render(); //Necessary to trigger sort renders
});

//Sort By All:
sortAllButton.addEventListener("click", function (event) {
  event.preventDefault();
  /** Sort All Function */
  while (state.start.length > 0) {
    const number = state.start.shift();
    sortNumber(number);
  }
  render(); //Necessary to trigger sort renders
});

// === Even/Odd Function for Nesting in Sort Button Functions ===
function sortNumber(number) {
  if (number % 2 === 0) {
    state.targetEven.push(number);
  } else {
    state.targetOdd.push(number);
  }
}

// === Sorting Renders ===

/** Rendering Even Bank*/
function renderEvenNumbers() {
  const evenNumberDisplay = document.querySelector("#evens output");
  evenNumberDisplay.innerHTML = state.targetEven;
}

/** Rendering Odd Bank */
function renderOddNumbers() {
  const oddNumberDisplay = document.querySelector("#odds output");
  oddNumberDisplay.innerHTML = state.targetOdd;
}

//Rendering sorting functions:
function render() {
  renderEvenNumbers();
  renderOddNumbers();
}
// === Script ===
// Initial render
render();

/** BTW: The variable number has functional scope, so its reference is changing in
 * in each function. In addNumsForm, it's referring to the user input numbers. In
 * the sort functions, it's referring to the entered numbers that are now sitting
 * in the state.start array. But since the scope is functional, it has to be
 * defined in each of those functions.
 */

/** Originally, I had all the render functions all together, including the
 * Starting Number render, but that meant the number bank wouldn't display;
 * even though the numbers would pop up when they were moved to the odd or
 * even bank. I had to move the Starting Number render to INSIDE the addNumsForm
 * event listener for the numbers to pop up. This also meant removing the Starting
 * Number render from the bottom render function.
 *
 */
