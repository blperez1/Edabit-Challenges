// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".

// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
// findNemo("Nemo is me") ➞ "I found Nemo at 1!"
// findNemo("I Nemo am") ➞ "I found Nemo at 2!"

function findNemo(sentence) {
    let nemo = sentence.split(" ")
    let index = nemo.indexOf("Nemo")
    return nemo.includes("Nemo") ? `I found Nemo at ${index + 1}` : `I can't find Nemo :(`
}

findNemo("I am Ne mo Nemo !");
findNemo("Is it Nemos, Nemona, Nemoor or Garfield?");
findNemo("N e m o is NEMO NeMo Nemo !");
findNemo("I am Nemo's dad Nemo senior .");
findNemo("I am Ne mo Nemo !");
