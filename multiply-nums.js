/*Given a string of numbers separated by a comma and space, return the product of the numbers.

multiplyNums("2, 3") ➞ 6
multiplyNums("1, 2, 3, 4") ➞ 24
multiplyNums("54, 75, 453, 0") ➞ 0
multiplyNums("10, -2") ➞ -20*/

function multiplyNums(nums) {
    return nums.split(", ").reduce((accumulator, currentValue) => accumulator * +currentValue, 1);
}

console.log(multiplyNums("2, 3"))
console.log(multiplyNums("1, 2, 3, 4"))
console.log(multiplyNums("54, 75, 453, 0"))
console.log(multiplyNums("10, -2"))
console.log(multiplyNums("19"))