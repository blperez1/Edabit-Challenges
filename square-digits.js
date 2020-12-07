// Create a function that squares every digit of a number.
//     Examples
//
// squareDigits(9119) ➞ 811181
//
// squareDigits(2483) ➞ 416649
//
// squareDigits(3212) ➞ 9414

function squareDigits(n) {
    return +[...n.toString()]
            .map(num => num ** 2)
            .join("")
            
}

console.log(squareDigits(9119))