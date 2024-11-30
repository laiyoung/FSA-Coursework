// === Constants + State Containers ===
const state = {
  start: [],
  targetEven: [],
  targetOdd: [],
};
const form = document.querySelector("form");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");


// === Event Listeners + Associated Functions ===

//Event Listeners:
form.addEventListener("submit", function(event) {
event.preventDefault();
/** Add Numbers Function */


});



/** Sort By 1 Function */

/** Sort All Function */

// === Renders ===

/** Rendering Starting Bank */
function renderStartingNumbers() {

}
/** Rendering Even Bank*/
function renderEvenNumbers() {

}

/** Rendering Odd Bank */
function renderOddNumbers() {

}

//Rendering all bank functions:
function render() {
  renderStartingNumbers();
  renderEvenNumbers();
  renderOddNumbers();
}
// === Script ===
// Initial render
render();


// Moving Numbers:
// function moveNumber(number) {
//   if (number % 2 === 0) {
//     state.targetEven.push(state.start.pop());
//   } else {
//     state.targetOdd.push(state.start.pop());
//   }
//   render();
// }