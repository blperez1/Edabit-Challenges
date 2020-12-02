// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.
// Examples

// checkSum([10, 12, 4, 7, 9, 11], 16) ➞ true

// checkSum([4, 5, 6, 7, 8, 9], 13) ➞ true

// checkSum([0, 98, 76, 23], 174) ➞ true

// checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39) ➞ false

// checkSum([2, 8, 9, 12, 45, 78], 1) ➞ false


const checkSum = (arr, num) => {
    for(let a of arr) {
        for(let b of arr) {
            if(a + b === num) return true;
        }
    }
    return false;
}

console.log(checkSum([10, 12, 4, 7, 9, 11], 16))

console.log(checkSum([4, 5, 6, 7, 8, 9], 13))

console.log(checkSum([0, 98, 76, 23], 174))

console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39))

console.log(checkSum([2, 8, 9, 12, 45, 78], 1))