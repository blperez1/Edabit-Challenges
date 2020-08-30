/*Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

    When positives and positives interact, they remain positive.
    When negatives and negatives interact, they remain negative.
    But when negatives and positives interact, they become neutral, and are shown as the number 0.

Worked Example

neutralise("+-+", "+--") ➞ "+-0"
// Compare the first characters of each string, then the next in turn.
// "+" against a "+" returns another "+".
// "-" against a "-" returns another "-".
// "+" against a "-" returns "0".
// Return the string of characters.

Examples

neutralise("--++--", "++--++") ➞ "000000"
neutralise("-+-+-+", "-+-+-+") ➞ "-+-+-+"
neutralise("-++-", "-+-+") ➞ "-+00" */

function neutralise(s1, s2) {
    return [...s1].reduce((acc, value, index) => {
        return (value === [...s2][index]) ? acc + value : "0";
    }, "")
}

// not returning string of 0
console.log(neutralise("--++--", "++--++"))
console.log(neutralise("-+-+-+", "-+-+-+"))
console.log(neutralise("-++-", "-+-+"))







