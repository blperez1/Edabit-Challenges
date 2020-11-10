// Create a function that takes a division equation d and checks if it will return a whole number without decimals after dividing.
// Examples

// validDivision("6/3") ➞ true

// validDivision("30/25") ➞ false

// validDivision("0/3") ➞ true

const validDivision = (n) => {
    let [operand1, operand2] = n.split("/");
    let result = Number(operand1) / Number(operand2);
    if(operand2 === "0") {
        return "invalid";
    }
    
    return Number.isInteger(result);
}

console.log(validDivision("6/3") )
console.log(validDivision("30/25") )
console.log(validDivision("0/3") )
console.log(validDivision("20/4") )