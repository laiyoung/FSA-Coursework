class Sentence{
        constructor(data){
          this.data = data;
        }
        wordCount(){
          return this.data.split(' ').length;
        }
        hasLetter(letter){
          return this.data.indexOf(letter) !== -1;
        }
        letterCount(letter){
          let count = 0;
          for(let i = 0; i < this.data.length; i++){
            if(this.data[i] === letter){
              count++;
            }
          }
          return count;
        }
        stats(){
          const obj = {};
          const words = this.data.split(' ');
          words.forEach( word => {
            if(obj[word] === undefined){
              obj[word]= 0;
            }
            obj[word]++;
          });
          return obj;
        }
      }
      const data = window.prompt('enter a sentence', 'the quick brown fox jumped over the fence');
      const s1 = new Sentence(data);
      console.log(s1.wordCount());
      console.log(s1.hasLetter('X'));
      console.log(s1.hasLetter('q'));
      console.log(s1.letterCount('e'));
      console.log(s1.letterCount(' '));
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
