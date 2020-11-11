// Create a function that counts the integer's number of digits.
// Examples

// count(318) ➞ 3
// count(-92563) ➞ 5
// count(4666) ➞ 4
// count(-314890) ➞ 6
// count(654321) ➞ 6
// count(638476) ➞ 6

function count(n) {
    let absNumber = Math.abs(n);
    return absNumber.toString().length;
}

function count2(n) {
	const arr = [...n.toString()]
 	return arr.includes("-") ? arr.length - 1 : arr.length
}

console.log(count(-314890))
console.log(count(318))
console.log(count(-92563))
console.log(count(4666))
console.log(count(654321))
console.log(count(638476))