/*Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
Examples

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!" */

function sevenBoom(arr) {
    let str = arr.join("")
    return str.includes("7") ? "Boom!" : "there is no 7 in the array";
}

sevenBoom([2, 55, 60, 97, 86])
sevenBoom([8, 6, 33, 100])
sevenBoom([2, 6, 7, 9, 3])
sevenBoom([33, 68, 400, 5])
sevenBoom([86, 48, 100, 66])
sevenBoom([76, 55, 44, 32])
sevenBoom([35, 4, 9, 37])