function factorChain(factors) {
    let factors2 = factors.filter((factor, index) => {
        return factor * 2 == factors[index + 1];
    })
    return factors2.length - 1 == factors2;
}

console.log(factorChain([1, 2, 4, 8, 16, 32]));