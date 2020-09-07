/*Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

    Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
    Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).

Examples

removeLeadingTrailing("230.000") ➞ "230"

removeLeadingTrailing("00402") ➞ "402"

removeLeadingTrailing("03.1400") ➞ "3.14"

removeLeadingTrailing("30") ➞ "30"*/

function removeLeadingTrailing(n) {
    let number = Number(n)
    return number.toString()
}

console.log(removeLeadingTrailing("230"))
console.log(removeLeadingTrailing("230.000"))
console.log(removeLeadingTrailing("00402"))
console.log(removeLeadingTrailing("03.1400"))
console.log(removeLeadingTrailing("30"))