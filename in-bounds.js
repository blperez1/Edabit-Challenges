// Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.

// intWithinBounds(3, 1, 9) ➞ true
// intWithinBounds(6, 1, 6) ➞ false
// intWithinBounds(4.5, 3, 8) ➞ false

function intWithinBounds(n, lower, upper) {
    if(!Number.isInteger(n)) {
        return false;
    }

    return parseFloat(n) >= parseFloat(lower) && parseFloat(n) < parseFloat(upper);
}


console.log(intWithinBounds(3, 1, 9));
console.log(intWithinBounds(6, 1, 6));
console.log(intWithinBounds(4.5, 3, 8));
