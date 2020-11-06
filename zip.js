// Given an array of women and an array of men, either:

//     Return "sizes don't match" if the two arrays have different sizes.
//     If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.

// Examples

// zipIt(["Elise", "Mary"], ["John", "Rick"])
//  ➞ [["Elise", "John"], ["Mary", "Rick"]]

// zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
//  ➞ "sizes don't match"

// zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
//  ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]

function zipIt(women, men) {
    let arr = [];
	if(women.length !== men.length) {
        return "sizes don't match";
    }
   for(let i = 0; i < women.length; i++) {
        arr.push([women[i], men[i]]) 
   }
    return arr;
}

function zipIt2(women, men) {
    if(women.length !== men.length) {
        return "sizes don't match";
    }

    return women.map((woman, i) => [woman, men[i]])
}

console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]))
console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]))
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]))

console.log(zipIt2(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]))
console.log(zipIt2(["Elise", "Mary"], ["John", "Rick"]))
console.log(zipIt2(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]))