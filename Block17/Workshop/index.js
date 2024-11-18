// Complete the Numbers class below
// the constructor method has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      /** Cuts the data in any string by the comma, 
       using the .split method and turns it into an array
       */
      this.data = str.split(",").map((number) => number * 1);
    } else {
      // Used for array entries
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    return this.data.length;
    // using the .length method to get the length of the this.data array
  }
  printNumbers() {
    //print the numbers in data
    const numbersArray = this.data;
    console.table(numbersArray);
    // A console.table was used, since indexes were also asked for
  }
  odds() {
    //return the odd numbers in data
    const getOdds = [];
    //An empty array is created to hold the values that pass the condition
    this.data.forEach((number) => {
      //A .forEach method is used to loop through the this.data array for odd #s
      if (number % 2 > 0) {
        //The arguement passed(parameter set) is meant to find odd numbers
        getOdds.push(number);
        /** The .push method is used to make a new array (getOdds) by adding
         * values that pass the condition to the end of the array
         */
      }
    });
    console.log(getOdds);
    //The now filled array getOdds is printed to the console
  }
  evens() {
    //return the even numbers in data
    const getEvens = [];
    //An empty array is created to hold the values that pass the condition
    this.data.forEach((number) => {
      //A .forEach method is used to loop through the this.data array for even #s
      if (number % 2 === 0) {
        //The arguement passed(parameter set) is meant to find even numbers
        getEvens.push(number);
        /** The .push method is used to make a new array (getEvens) by adding
         * values that pass the condition to the end of the array
         */
      }
    });
    console.log(getEvens);
    //The now filled array getEvens is printed to the console
  }
  sum() {
    //return the sum of the numbers
    const reducedSumArray = this.data.reduce(
      /** The function declaration creates a new array(reducedSumArray) at
       * the same time it calls the array this.data and starts the .reduce
       * method
       */
      (accumulator, currentValue) => accumulator + currentValue,
      0
      /** the accumulator keeps track of the current total and each current value
       * is added to this current total. The initial value is set to 0, because
       * addition is being performed on the accumulator.
       */
    );
    return reducedSumArray;
    //A return statement is used to print the output array (reducedSumArray)
  }
  product() {
    //return the product of the numbers
    const reducedProductArray = this.data.reduce(
      /** The function declaration creates a new array(reducedProductArray) at
       * the same time it calls the array this.data and starts the .reduce
       * method
       */
      (accumulator, currentValue) => accumulator * currentValue,
      1
      /** the accumulator keeps track of the current total and each current value
       * is multiplied by this current total.
       */
    );
    return reducedProductArray;
    //A return statement is used to output the array (reducedProductArray)
  }
  /** So, because we're doing multiplication instead of addition, and you're
   * multiplying by the accumulator[not 2 #s being multiplied and the accumulator
   * just keeping track of the outcome --> acc + (a*b)], you can't start
   * your intial value at 0, you'll just return zero, you have to start it at 1
   */
  greaterThan(target) {
    //return the numbers greater than the target
    const greaterThanArray = [];
    //An empty array is created to hold the values that pass the condition
    this.data.forEach((number) => {
      /** A .forEach method is used to loop through the this.data array for #s
       * that are greater than the target # (set as a parameter/arguement)
       */
      if (number > target) {
        greaterThanArray.push(number);
        /** The .push method is used to make a new array (greaterThanArray) by
         * adding values that pass the condition to the end of the array
         */
      }
    });
    console.log(greaterThanArray);
    //The now filled array greaterThanArray is printed to the console
  }
  howMany(target) {
    //return the count of a given number
    let count = 0;
    //variable declaration starts the count variable at 0
    for (let i = 0; i < this.data.length; i++) {
      /** A for loop is used, with the initialization setting the loop to 0, a
       * condition is established to set the for loop to only loop until it reaches
       * the end of the array(this.data.length), and finally the loop is set to
       * perform an increment (with the ++) to go through each index in succession
       */
      if (this.data[i] === target) {
        /** A condition is set for the loop, with the this.data array indices being
         * checked against the target # (set as a parameter/arguement), using a 
         * strict equality operator
         */
        count++;
        /** The condition executes an increment (adds) to the value of count, if
         * the parameter/arguement set above is met
         */
      }
    }
    return count;
    //A return statement is used to output the resulting variable (count)
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number

/** So after annotating the exercise, it looks like you usually declare a
 * new array/object SEPERATELY from the function when the new array/object needs
 * to be used WITHIN the function.
 * If the array/object is just going to hold an action, it can be declared
 * at the same time you're declaring the function.
 */
