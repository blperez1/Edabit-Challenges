// Create a function that takes two arguments: the final price and the discount percentage as integers and returns the final price after the discount.

// dis(1500, 50) ➞ 750
// dis(89, 20) ➞ 71.2
// dis(100, 75) ➞ 25

function dis(price, discount) {
    let finalTotal = price - (price * (discount / 100));

    return finalTotal - Math.floor(finalTotal) !== 0 ? +finalTotal.toFixed(2) : finalTotal;
}

dis(593, 61)
dis(89, 20) 
dis(100, 75) 