/*Create a function that takes an array of numbers or letters and returns a string.

arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"*/

function arrayToString(arr) {
    return arr.join("");
}

arrayToString([1, 2, 3, 4, 5, 6]);
arrayToString(["a", "b", "c", "d", "e", "f"]);
arrayToString([1, 2, 3, "a", "s", "dAAAA"]); 