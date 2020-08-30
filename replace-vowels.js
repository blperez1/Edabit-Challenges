/*Create a function that takes a string and replaces the vowels with another character.

    a = 1
    e = 2
    i = 3
    o = 4
    u = 5

replaceVowel("karachi") ➞ "k1r1ch3"
replaceVowel("chembur") ➞ "ch2mb5r"
replaceVowel("khandbari") ➞ "kh1ndb1r3"*/
//
function replaceVowel(word) {
    for (let i = 0; i <= word.length; i++) {
        switch (word[i]) {
            case "a":
                word[i] = 1;
                break;
            case "e":
                word[i] = 2
                break;
            case "i":
                word[i] = 3;
                break;
            case "o":
                word[i] = 4;
                break;
            case "u":
                word[i] = 5
                break;
        }
    }
    return word;
}

function replaceVowel2(s) {
    const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 }
    return s.replace(/[aeiou]/g, c => vowels[c])
}


replaceVowel("karachi");
replaceVowel("chembur");
replaceVowel("khandbari");

replaceVowel2("karachi");
replaceVowel2("chembur");
replaceVowel2("khandbari");