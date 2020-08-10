/*Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

stutter("incredible") ➞ "in... in... incredible?"
stutter("enthusiastic") ➞ "en... en... enthusiastic?"
stutter("outstanding") ➞ "ou... ou... outstanding?"*/

function stutter(word) {
    let firstTwo = word.substr(0, 2);
    return `${firstTwo}... ${firstTwo}... ${word}?`
}

stutter("incredible");
stutter("enthusiastic");
stutter("outstanding");