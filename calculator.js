// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

function calculator(num1, operator, num2) {
    let operators = {
        "+": num1 + num2,
        "-": num1 - num2,
        "*": num1 * num2,
        "/": num1 / num2
    }
    return (operator === "/" && num2 === 0) ? "can't divide by 0!" : operators[operator];
}

console.log(calculator(2, '/', 2))
console.log(calculator(10, '-', 7))
console.log(calculator(2, '*', 16))
console.log(calculator(2, '-', 2))
console.log(calculator(15, '+', 26))
console.log(calculator(2, '+', 2))
console.log(calculator(2, '/', 0))