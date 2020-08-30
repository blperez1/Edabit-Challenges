/*Create a function that takes a string and returns the number (count) of vowels contained within it.

countVowels("Celebration") ➞ 5
countVowels("Palm") ➞ 1
countVowels("Prediction") ➞ 4*/

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    return count;
}

function countVowels2(str) {
    return str.match(/[aeiuo]/g).length
}


console.log(countVowels2("Celebration"));
console.log(countVowels2("Palm"));
console.log(countVowels2("Prediction"));