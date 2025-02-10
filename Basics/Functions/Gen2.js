// Generator Function : 


var a = 0;
function * genfu(){
    yield a++,
    yield a++,
    yield a++,
    yield a++,
    yield a++,
    yield a++
}
console.log("Value A : ",a);
var newFunction = genfu();
console.log(newFunction.next());
console.log(newFunction.next());
console.log(newFunction.next());
console.log(newFunction.next());
console.log(newFunction.next());
console.log(newFunction.next());
console.log(newFunction.next());

console.log("Value A : ",a);


// Write a JavaScript function that accepts a string as a parameter and counts the number of words with in the string.
// Example string : 'The quick brown fox'
// Expected Output : 4