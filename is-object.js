// Create a function to check whether the given parameter is an Object or not.
// Examples

// isObject(function add(x,y) {return x + y}) ➞ true

// isObject(new RegExp("^[a-zA-Z0-9]+$)", "g")) ➞ true

// isObject(null) ➞ false

// isObject("") ➞ false

function isObject(value) {
    return value instanceof Object;
}

console.log(isObject(function add(x,y) {return x + y}))

console.log(isObject(new Date()) )

console.log(isObject(null) )

console.log(isObject(""))