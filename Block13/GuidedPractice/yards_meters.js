let inputYards = prompt("Enter Amount of Yards");

function convertToMetere(yards) {
  return yards * 0.9144;
}

convertToMetere(inputYards);

let convertedMeters = convertToMetere(inputYards);

function createMessage(yards, meters) {
  let message;
  let numYards = yards * 1;
  if (numYards === 1760) {
    message = "That is as long as a mile";
  }
  if (numYards === 100) {
    message = "That is as long as a football field";
  }
  if (numYards === 26) {
    message = "That is as long as a tennis court";
  }
  console.log(message);
}

createMessage(inputYards, convertedMeters);
