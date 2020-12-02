// Create a function which takes in an encoded string and returns an object according to the following example:
// Examples

// parseCode("John000Doe000123") ➞ {
//   firstName: "John",
//   lastName: "Doe",
//   id: "123"
// }

// parseCode("michael0smith004331") ➞ {
//   firstName: "michael",
//   lastName: "smith",
//   id: "4331"
// }

// parseCode("Thomas00LEE0000043") ➞ {
//   firstName: "Thomas",
//   lastName: "LEE",
//   id: "43"
// }

function parseCode(str) {
	let arr = str.split(0).filter(element => element !== "")
	const [firstName, lastName, id] = arr
	return {
			firstName,
			lastName,
			id
	}
}

//simplify
function parseCode2(str) {
let [firstName, lastName, id] = str.split(0).filter(Boolean)
	return {
			firstName,
			lastName,
			id
	}
}

parseCode("John000Doe000123") 
parseCode("michael0smith004331") 
parseCode("Thomas00LEE0000043") 

parseCode2("John000Doe000123") 
parseCode2("michael0smith004331") 
parseCode2("Thomas00LEE0000043") 
