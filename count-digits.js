// Create a function that counts the integer's number of digits.

// count(318) ➞ 3
 
// count(-92563) ➞ 5
 
// count(4666) ➞ 4

// count(-314890) ➞ 6

// count(654321) ➞ 6

// count(638476) ➞ 6

//Over thought this one
function count(n) {
    let arr = [...Math.abs(n).toString()]
    return arr.length
}

//simplified
function count2(n) {
    return Math.abs(n).toString().length
}


console.log(count2(318))
console.log(count2(-92563))
console.log(count2(4666))
console.log(count2(-314890))
console.log(count2(654321))
console.log(count2(638476))

console.log(count(318))
console.log(count(-92563))
console.log(count(4666))
console.log(count(-314890))
console.log(count(654321))
console.log(count(638476))