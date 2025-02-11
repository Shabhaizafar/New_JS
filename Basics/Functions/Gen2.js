// // Generator Function : 


// var a = 0;
// function * genfu(){
//     yield a++,
//     yield a++,
//     yield a++,
//     yield a++,
//     yield a++,
//     yield a++
// }
// console.log("Value A : ",a);
// var newFunction = genfu();
// console.log(newFunction.next());
// console.log(newFunction.next());
// console.log(newFunction.next());
// console.log(newFunction.next());
// console.log(newFunction.next());
// console.log(newFunction.next());
// console.log(newFunction.next());

// console.log("Value A : ",a);


// // Write a JavaScript function that accepts a string as a parameter and counts the number of words with in the string.
// // Example string : 'The quick brown fox'
// // Expected Output : 4

function* countWords(str) {
    // Split the string into words based on spaces
    const words = str.split(' ');

    // Yield each word one by one
    for (let word of words) {
        yield word;
    }
}
function wordCount(str) {
    let count = 0;
    const wordGenerator = countWords(str);
    for (let word of wordGenerator) {
        count++;
    }
    return count;
}

const exampleString = 'The quick brown fox';
console.log(wordCount(exampleString));
