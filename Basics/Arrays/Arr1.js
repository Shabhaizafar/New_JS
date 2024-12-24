// => What is an Array  :-
            /Same in All Programing Language/ 
var a;
// -> Array is a Collection of Multiple Data.
            /New in JS/
//         with Different Data Type.


// Numeric Array    >   type  Object
// var arr = [11,12,13,14];

// String Array    >  type Object
// var arr = ['1','2','A',"C"];

// Boolean Array     > type Object 
// var arr = [true,false];


// Combine Data      > type  Object
// var arr = ["Zafar",1,true];
// console.log(arr);


// typeof() Operator :  check type Any Data  
// console.log(typeof(arr));
// console.log(typeof arr);




// Index  :   start with 0

// var arr = [11,12,13,14];

// console.log(arr);

// console.log(arr[0]);


// var arr = [["Zafar","Shah"],[11,12]];
// console.log(arr);


var arr = [11,12,13,14,15,16];

// Basic For Loop : 
console.log("Basic For Loop : ");
for (let i = 0; i < arr.length; i++) {
    console.log(i,arr[i]);
}
// While loop : 
console.log("While Loop : ");
var i = 0;
while (i<arr.length) {
    console.log(i,arr[i]);
    i++;
}
// Do-while Loop : 
console.log("Do-While Loop : ");
var i = 0;
do{
    console.log(i,arr[i]);
    i++;
}while (i<arr.length);

// -------------------------------------
// for in Loop 
console.log("For-in Loop : ");
for (const element in arr) {
    console.log(element,arr[element]);
}

// for of loop : 
console.log("For-of Loop : ");
for (const element of arr) {
    console.log(element);
}

// foreach Loop: 
console.log("For-each Loop : ");
arr.forEach((element,i,a) => {
   console.log(element,i,a);
});