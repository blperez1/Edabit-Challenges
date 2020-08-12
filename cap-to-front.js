/*Create a function that moves all capital letters to the front of a word.

capToFront("hApPy") ➞ "APhpy"
capToFront("moveMENT") ➞ "MENTmove"
capToFront("shOrtCAKE") ➞ "OCAKEshrt" */

function capToFront(s) {
    let lettersArray = s.split("")
    const upperLetters = lettersArray.filter(element => element == element.toUpperCase());
    const lowerLetters = lettersArray.filter(element => element == element.toLowerCase());
    return upperLetters.concat(lowerLetters).join("");
}

function capToFront2(s) {
    return [...s]
        .filter(c => c < 'a')
        .concat([...s].filter(c => c >= 'a'))
        .join("");
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));

console.log(capToFront2("hApPy"))
console.log(capToFront2("moveMENT"))
console.log(capToFront2("shOrtCAKE"))

