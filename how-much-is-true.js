/* Create a function which returns the number of true values there are in an array.

countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
*/
let array = [true, false, true, true, false, false, false, false, false];
let array2 = [];
function countTrue(arr) {
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    return count;
}

const countTrue2 = (arr) = arr.reduce(item => item === true)
