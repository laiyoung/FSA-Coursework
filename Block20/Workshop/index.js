// === State ===
const state = {
  start: [],
  targetEven: [],
  targetOdd: [],
};

// Moving Numbers:
// function moveNumber(number) {
//   if (number % 2 === 0) {
//     state.targetEven.push(state.start.pop());
//   } else {
//     state.targetOdd.push(state.start.pop());
//   }
//   render();
// }

// === Renders ===

/** Rendering Starting Bank */
// function renderStartingNumbers() {
//   const startingNumber = state.start.map((number) => {
//     const li = document.createElement("li");

//     const button = document.createElement("Add Number");
//     button.textContent = "number";
//     li.append(button);
//     console.log (startingNumber)
//     return li;
//   });
//   const numberBank = document.querySelector("#sortedNumbers");
//   numberBank.replaceChildren(...startingNumber);
// }
/** Rendering Sort by 1 */
function renderSort1() {

}

/** Rendering Sort All */
function renderSortAll() {

}

//Rendering all bank functions:
function render() {
  renderStartingNumbers();
  renderSort1();
  renderSortAll();
}
// === Script ===
// Initial render
render();

//Adding numbers to the starting bank when the button is pressed:
