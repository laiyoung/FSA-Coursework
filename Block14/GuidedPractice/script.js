const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];
console.table(myInstruments);

myInstruments.push("tuba", "bassoon");
myInstruments.splice(2, 1);
myInstruments.unshift("saxophone");
console.table(myInstruments);

console.log(myInstruments[0]);

console.log(myInstruments[7 - 1]);

console.log([myInstruments[0], myInstruments[7 - 1]]);

console.log(getFirstInstrument(myInstruments));
console.log(getLastInstrument(myInstruments));

console.table(getFirstandLastInstruments(myInstruments));

console.table(getFirstThreeInstruments(myInstruments));

console.table(getTInstruments(myInstruments));

// Functions:

function getFirstInstrument(instruments) {
  return instruments[0];
}

function getLastInstrument(instruments) {
  let index = instruments.length - 1;
  return instruments[index];
}

function getFirstandLastInstruments(instruments) {
  let firstInstrument = getFirstInstrument(instruments);
  let lastInstrument = getLastInstrument(instruments);

  const newArray = [firstInstrument, lastInstrument];
  return newArray;
}

function getFirstThreeInstruments(instruments) {
  return instruments.slice(0, 3);
}

function getTInstruments(instruments) {
  const tInstruments = [];
  for (let index = 0; index < instruments.length; index++) {
    let currentInstrument = instruments[index];
    if (currentInstrument.charAt(0) === "t") {
      tInstruments.push(currentInstrument);
    }
  }

  return tInstruments;
}
