// Prompt:
let userFlavors = prompt("Enter your order");
if (userFlavors) {
}
console.log(userFlavors);

// Generates a table with flavors entered by user
console.table(userFlavors);

// The user's input string is split into an array and logged as a table
let flavorsArray = userFlavors.split(",");
console.table(flavorsArray);

/** User Story: An object is used to keep count of how many orders
 * there are of each flavor.
 * The program correctly counts the number of each flavor in the user's input.
 */

// Making an object of the flavors and an object of the frequency
const flavorMap = {};

const freqMap = {};

// A frequency for loop
for (let i = 0; i < flavorsArray.length; i++) {
  const current = flavorsArray[i];
  if (!freqMap[current]) {
    freqMap[current] = 1;
  } else {
    freqMap[current] += 1;
  }
}
console.log(freqMap);
