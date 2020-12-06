function operations(n1, n2, operation) {
    let _operations = {
        "add": n1 + n2,
        "subtract": n1 - n2,
        "divide" : n1 / n2,
        "multiply": n1 * n2
    }
    return _operations[operation]
}

console.log(operations(10, 7, "add"))
console.log(operations(10, 7, "subtract"))
console.log(operations(10, 7, "divide"))
console.log(operations(10, 7, "multiply"))