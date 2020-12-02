// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
// Examples

// add_ly = add_suffix("ly")

// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞"totally"

// add_less = add_suffix("less")

// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"

const add_suffix = (suffix) => {
    return (root) => root + suffix
}

let add_ly = add_suffix("ly")

console.log(add_ly("hopeless"))
console.log(add_ly("total")) 

let add_less = add_suffix("less")

add_less("fear") 
add_less("ruth") 