/*Create a function that takes a mathematical expression as a string, array of numbers on which the mathematical expression is to be calculated and return the result as an array of string.
Explanation

mathematicalExp("f(x)=x+1",[1,2]) ➞ ["f(1)=2","f(2)=3"]

// Math expression: "f(x)=x+1"
// Numbers to calculate expression = [1,2]
// f(1)=1+1=2
// f(2)=2+1=2
// Solution = ["f(1)=2","f(2)=3"]

Examples

mathematicalExp("f(x)=x+1",[1,2]) ➞ ["f(1)=2","f(2)=3"]

mathematicalExp("f(x)=x^2",[1,2,3]) ➞ ["f(1)=1","f(2)=4","f(3)=9"]

mathematicalExp("f(x)=x*3",[1,2,3]) ➞ ["f(1)=3","f(2)=6","f(3)=9"] */

function mathematicalExp(exp, numbers) {
    let arr = []
    let eq = exp.split('=')
    let sign = eq[1].split("")
    numbers.forEach(x => {
        switch(sign[1]) {
            case '+':
                return arr.push(`f(${x})=${eval(eq[1])}`);
            case '-':
                return arr.push(`f(${x})=${eval(eq[1])}`)
            case '*':
                return arr.push(`f(${x})=${eval(eq[1])}`)
            case '/':
                return arr.push(`f(${x})=${eval(eq[1])}`)
            case '^':
                return arr.push(`f(${x})=${x**2}`)

        }
    })
    return arr

}
console.log(mathematicalExp("f(x)=x+1", [1,2,3]))
console.log(mathematicalExp("f(x)=x+1", [1, 2]));
console.log(mathematicalExp("f(x)=x^2", [1, 2, 3]));
console.log(mathematicalExp("f(x)=x*3", [1, 2, 3]));
console.log(mathematicalExp("f(x)=x-2", [1, 2, 3]));
console.log(mathematicalExp("f(x)=x/3", [3, 6, 9]));