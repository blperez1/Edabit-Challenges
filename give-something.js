/*Write a function that returns the string "something" joined with a space and the given parameter a.

giveMeSomething("is better than nothing") ➞ "something is better than nothing"
giveMeSomething("Bob Jane") ➞ "something Bob Jane"
giveMeSomething("something") ➞ "something something"*/

function giveMeSomething(a) {
    return `something ${a}`
}

giveMeSomething("is better than nothing");
giveMeSomething("Bob Jane");
giveMeSomething("something");