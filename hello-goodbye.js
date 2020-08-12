/*Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

sayHelloBye("alon", 1) ➞ "Hello Alon"
sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
sayHelloBye("jose", 0) ➞ "Bye Jose"*/

function firstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function sayHelloBye(name, num) {
    let str = firstLetter(name);
    if (num === 1) {
        return `Hello ${str}`
    } else if (num === 0) {
        return `Bye ${str}`
    }
}

sayHelloBye("alon", 1)
sayHelloBye("Tomi", 0)
sayHelloBye("jose", 0)