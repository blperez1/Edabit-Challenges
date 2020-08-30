// Create a function that takes a number num and returns its double factorial.


function doubleFactorial(num) {
    return (num < 1) ? 1 : num * doubleFactorial(num - 2);
}

doubleFactorial(0)
doubleFactorial(-1)
doubleFactorial(1)
doubleFactorial(2)
doubleFactorial(7)
doubleFactorial(9)
doubleFactorial(14)
doubleFactorial(22)
doubleFactorial(25)
doubleFactorial(27)