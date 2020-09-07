/*Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
Examples

oddishOrEvenish(43) ➞ "Oddish"

oddishOrEvenish(373) ➞ "Oddish"

oddishOrEvenish(4433) ➞ "Evenish"*/

function oddishOrEvenish(n) {
    let num = n.toString()
    let sum = [...num].reduce((acc, value) => acc + +value, 0)
    return sum % 2 === 0 ? "Evenish" : "Oddish"
}

function oddishOrEvenish2(n) {
    return [...String(n)]
    .map(Number)
    .reduce((acc, value) => acc + value) % 2 === 0 ? "Evenish" : "Oddish"
}


oddishOrEvenish(43) //oddish
oddishOrEvenish(373) //oddish
oddishOrEvenish(55551) //oddish
oddishOrEvenish(694) //oddish
oddishOrEvenish(4433) //evenish
oddishOrEvenish(11) //evenish
oddishOrEvenish(211112) //evenish


oddishOrEvenish2(43) //oddish
oddishOrEvenish2(373) //oddish
oddishOrEvenish2(55551) //oddish
oddishOrEvenish2(694) //oddish
oddishOrEvenish2(4433) //evenish
oddishOrEvenish2(11) //evenish
oddishOrEvenish2(211112) //evenish