// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

// isRepdigit(66) ➞ true
// isRepdigit(0) ➞ true
// isRepdigit(-11) ➞ false

function isRepdigit(num) {
    let str = num.toString()
    let numberArr = str.split("");
    if(num < 0) {
        return false;
    }

    return numberArr.every((number, i , arr) => number === arr[0]);
    
}

console.log(isRepdigit(66))
console.log(isRepdigit(0))
console.log(isRepdigit(-11))