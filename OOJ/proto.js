// var obj1 = {
//     key1 : "Value1",
//     key2 : "Value2"
// };
// var obj2 = {
//     key3 : "Value3"
// };


// console.log(obj1);
// console.log(obj2);
// console.log(obj1.key1); //value1
// console.log(obj2.key3);//value3

// console.log(obj2.key1); // undefined


var obj1 = {
    key1 : "Value1",
    key2 : "Value2"
};
var obj2 = Object.create(obj1);

obj2.key3 = "Value3";

console.log(obj1);
console.log(obj2);
console.log(obj1.key1); //value1
console.log(obj2.key3);//value3

console.log(obj2.key1); // Value1