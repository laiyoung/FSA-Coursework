// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // Get numbers with a length array method
  // Return length of array
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // Get array numbers with a while loop
  let sum = 0;
  let i = -1;
  while (++i < numbers.length) {
    sum += numbers[i];
  }
  // Return sum
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  //Find the sum with a for loop
  let sum = 0;
  for (let i in numbers) {
    sum += numbers[i];
  }
  //Get the length of the array and define it as "numbersCnt"
  let numbersCnt = numbers.length;
  //Return the average/mean
  return sum / numbersCnt;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  /** Use a sort method to sort numbers smallest to largest,
   * with a callback function
   */
  let smallest = numbers.sort((a, b) => a - b);
  // Return the smallest number, which is index 0
  return smallest[0];
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  /** Use a sort method to sort numbers largest to
   * smallest, with a callback function
   */

  let largest = numbers.sort((a, b) => b - a);
  // Return the largest number, which is index 0
  return largest[0];
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  /** Use the smallest and largest returns, defined as "getMax" and "getMin",
   * from the previously executed functions to return the range:
   * "getMax" - "getMin" returns "getRange"
   */
  return getMax(numbers) - getMin(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  /** Invoke a forEach array method on the array defined as "numbers",
   * with a callback function that adds an element to a new array "getEvens",
   * when an element is even (even is demarcated using a modulo operator)
   */
  const getEvens = [];
  numbers.forEach((num) => {
    if (num % 2 === 0) {
      getEvens.push(num);
    }
  });

  // Return the new array "getEvens"
  return getEvens;

  /** Alternate function:
   * const getEvens = numbers.filter((num) => num % 2 === 0);
   */
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  /** Invoke a forEach array method on the array defined as "numbers",
   * with a callback function that adds an element to a new array "getOdds",
   * (odd is demarcated using a modulo operator)
   */
  const getOdds = [];
  numbers.forEach((num) => {
    if (num % 2 > 0) {
      getOdds.push(num);
    }
  });

  // Return the new array "getOdds"
  return getOdds;

  /** Alternate function:
   * const getOdds = numbers.filter((num) => num % 2 > 0);
   */
}
