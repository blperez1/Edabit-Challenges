// A man has n number of apples. If he eats a percentage p of the apples (if apples are available), his children will share the remainder of the apples. Create a function to determine the number of whole apples his children got. If his children did not get any apples, return "The children didn't get any apples".
// Examples

// getNumberOfApples(10, "90%") ➞ 1

// getNumberOfApples(25, "10%") ➞ 22

// getNumberOfApples(0, "10%") ➞ "The children didn't get any apples"

function getNumberOfApples(n, p) {
    let percent = p.split("%")
    return n * (90 / 100)
}

console.log(getNumberOfApples(10, "90%") )

console.log(getNumberOfApples(25, "10%") )

console.log(getNumberOfApples(0, "10%") )