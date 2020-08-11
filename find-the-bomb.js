"use strict";
/*Create a function that finds the word "bomb" in the given string. If there is a bomb, return "Duck!!!" otherwise return "There is no bomb, relax.".

bomb("There is a bomb.") ➞ "Duck!!!"
bomb("Hey, did you think ther is a bomb?") ➞ "Duck!!!"
bomb("This goes boom!!!") ➞ "There is no bomb, relax."*/

// function bomb(str) {
//     let newStr = str.toLowerCase();
//     let boom = "bomb";
//     if (newStr.includes(boom)) {
//         return "Duck!!!"
//     }
//     return "There is no bomb, relax."
// }

//refactor
function bomb(str) {
    let newStr = str.toLowerCase();
    return newStr.includes("bomb") ? "Duck!!!" : "There is no bomb, relax."
}

console.log(bomb("There is a bomb."));
console.log(bomb("Hey, did you think ther is a bomb?"));
console.log(bomb("This goes boom!!!"));
console.log(bomb("Hey, did you find the BoMb?"));