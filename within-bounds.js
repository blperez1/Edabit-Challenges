function intWithinBounds(n, lower, upper) {
     return Number.isInteger && n >= lower && n < upper; 
}

console.log(intWithinBounds(0, 0, 8))
console.log(intWithinBounds(4.5, 3, 8))
console.log(intWithinBounds(5, 6, 8))