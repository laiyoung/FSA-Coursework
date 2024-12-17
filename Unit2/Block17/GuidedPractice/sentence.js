class Sentence {
  //A class called Sentence is created
  constructor(data) {
    this.data = data;
    //the parameter of data is defined as instances
  }
  wordCount() {
    return this.data.split(" ").length;
    /** Cuts the instance of data in the submitted string by the space in
     * between the words, using the .split method. Since the word count is asked
     * for, the length property finds the length of the array created,
     * by the .split method
     */
  }
  hasLetter(letter) {
    //The hasLetter method requires an input/parameter of letter
    return this.data.indexOf(letter) !== -1;
    /** The .indexOf method returns the 1st occurance/position of a value in
     * the string. It's case sensitive. If no match is found, the method returns
     * -1. To turn the resulting position into a boolean, the strict inequality
     * operator is used to set any result not strictly equal to -1 as true.
     */
  }
  letterCount(letter) {
    //The letterCount method requires an input/parameter of letter
    let count = 0;
    //variable declaration starts the count variable at 0
    for (let i = 0; i < this.data.length; i++) {
      /** A for loop is used, with the initialization setting the loop to 0, a
       * condition is established to set the for loop to only loop until it reaches
       * the end of the array(this.data.length), and finally the loop is set to
       * perform an increment (with the ++) to go through each index in succession
       */
      if (this.data[i] === letter) {
        /** A condition is set for the loop, with the this.data array indices being
         * checked against the selected letter (set as a parameter/arguement),
         * using a strict equality operator
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
  stats() {
    //Making an object that holds the stats of the sentence
    const obj = {};
    //Creating an empty object declared as the variable obj
    const words = this.data.split(" ");
    /** Defining the new array words as the array created above by splitting the
     * original string
     */
    words.forEach((word) => {
      /**Performing a forEach method on the words array, with word as the
       * parameter (the indices of the words array)
       */
      if (obj[word] === undefined) {
        obj[word] = 0;
         /** Adding the word/index to the object as a property, only if 
         * that word/index isn't already present
         */
      }
      obj[word]++;
      /** Adding 1 to the value of a flavor property in the frequency map object,
       * if that flavor already exists
       */
    });
    return obj;
    //Printing the final object with all the counts for each word
  }
}

//Defining the data variable to be used in the class Sentence
const data = window.prompt(
  "enter a sentence",
  "the quick brown fox jumped over the fence"
);
const s1 = new Sentence(data);
/** Creating an instance(remember instances are objects) of the Sentence class
 */

//All the console logs, with various methods defined above being used
console.log(s1.wordCount());
console.log(s1.hasLetter("X"));
console.log(s1.hasLetter("q"));
console.log(s1.letterCount("e"));
console.log(s1.letterCount(" "));
console.log(s1.stats());

// My attempt that has a bug:
// class Sentence {
//   data;
//   wordsArray;
//   constructor(givenData) {
//     this.data = givenData;
//   }
//   getWordCount() {
//     if (this.data) {
//       this.wordsArray = this.data.split(" ");
//       return wordsArray.legnth;
//     }
//     return 0;
//   }
//   hasLetter(letter) {
//     return this.data.includes(letter);
//   }
//   getLetterCount(letter) {
//     if (!this.hasLetter(letter)) {
//       return 0;
//     }
//     letterCount(letter);
//     let count = 0;
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i] === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
//   stats() {
//     const obj = {};
//     const words = this.data.split(" ");
//     words.forEach((word) => {
//       if (obj[word] === undefined) {
//         obj[word] = 0;
//       }
//       obj[word]++;
//     });
//     return obj;
//   }
// }

// let givenData = prompt("Enter a sentence");

// const mySentence = new Sentence(givenData);
// console.log(mySentence.getWordCount());
// console.log(mySentence.hasLetter("z"));
// console.log(mySentence.getLetterCount("z"));
