// Write a function that converts an object into an array, where each element represents a key-value pair.


// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []
//
function toArray(obj) {
    return Object.entries(obj)
}
toArray({ foo: 33, bar: 45, baz: 67 });
toArray({ shrimp: 15, tots: 12 });
toArray({ a: 1, b: 2 });
toArray({});