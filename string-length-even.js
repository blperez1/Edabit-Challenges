// Given a string, return true if its length is even or false if the length is odd.
// Examples

// oddOrEven("apples") ➞ true

// oddOrEven("pears") ➞ false

// oddOrEven("cherry") ➞ true

function oddOrEven(s) {
	let strLength = s.length;
	return strLength % 2 === 0;
}