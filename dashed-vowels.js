// Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

// dashed("Edabit") ➞ "-E-d-a-b-i-t"

// dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

// dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"


function dashed(str) {
    let vowels = "aeiouAEIOU"
    let arr = [...str]
	for(let i = 0; i < arr.length; i++) {
        if(vowels.indexOf(arr[i]) > -1) {
            arr[i] = `-${arr[i]}-`
        }
    }
    return arr.join('')
}



