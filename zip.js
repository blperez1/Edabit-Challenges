function zipIt(women, men) {
    let arr = [];
	if(women.length !== men.length) {
        return "sizes don't match";
    }
   for(let i = 0; i < women.length; i++) {
        arr.push([women[i], men[i]]) 
   }
    return arr;
}

console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]))