// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Examples

// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

const addUp = num => {
    let sum = 0
    for(let i = 0; i <= num; i++ ) {
        sum += i;
    }
    return sum;
}

const addUp2 = num => {
    if(num === 1) return 1;
    return num + addUp2(num - 1)
}

addUp(4)
addUp(13)
addUp(600)
addUp(392)
addUp(53)
addUp(897)
addUp(23)
addUp(1000)
addUp(738)

addUp2(4)
addUp2(13)
addUp2(600)
addUp2(392)
addUp2(53)
addUp2(897)
addUp2(23)
addUp2(1000)
addUp2(738)