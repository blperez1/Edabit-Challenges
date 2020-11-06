// Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!

// Given an object of the stolen items and a string in lower cases representing the name of the pet (e.g. "rambo"), return:

//     "Rambo is gone..." if the name is on the list.
//     "Rambo is here!" if the name is not on the list.

// Note that the first letter of the name in the return statement is capitalized.


// const obj = {
//   tv: 30,
//   timmy: 20,
//   stereo: 50,
// } //➞ "Timmy is gone..."
// Timmy is in the object.


// const obj = {
//   tv: 30,
//   stereo: 50,
// } //➞ "Timmy is here!"
// Timmy is not in the stolen list object.


// const obj = { } ➞ "Timmy is here!"
// Timmy is not in the object.

function findIt(obj, name) {
    let capName = `${name[0].toUpperCase()}${name.substring(1)}`
    
	if(!obj.hasOwnProperty(name)) {
        return `${capName} is here!`
    }

    return `${capName} is gone...`
}
