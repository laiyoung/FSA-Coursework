const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];
myInstruments.push("tuba");
myInstruments.push("bassoon");
myInstruments.splice(2, 1);
myInstruments.unshift("saxophone");
console.log (myInstruments)

/**
 * @param {string[]} instruments an array of instruments
 * @returns {string} the first instrument
 */
function getFirstInstrument(instruments) {
        return instruments[0];
      }