// Froyo Shop Prompt:
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

/** A for loop to keep track of the flavors by moving through the flavorsArray.
 * The for loop starts at index 0 and goes through the array length, adding 1 item
 * each time.
 */
for (let i = 0; i < flavorsArray.length; i++) {
  /** Defining the current index in the flavorsArray as a variable for use
   * inside the conditional statement
   */
  const current = flavorsArray[i];
  // The conditional finds out if the current index "does not exist"
  if (!freqMap[current]) {
    freqMap[current] = 1;
    /** Adding the index to the frequency map object as a property, only if that 
     * flavor isn't already present, and assigning it a value of 1
     */
  } else {
    freqMap[current] += 1;
    /** Adding 1 to the value of a flavor property in the frequency map object,
     * if that flavor already exists
     */
  }
}
// Logging the frequency map object of properties and values
console.log(freqMap);
