//function : 
console.log("Function : ");
function sayHello() {
  console.log('Hello');
}

// sayHello();

sayHello.firstName = "Raj";
console.log(sayHello.firstName);

console.log(sayHello.prototype);

console.log("Object : ");
// Object : 
var obj = {
  name: "Raj",
  age: 25
};

var obj2 = Object.create(obj);
console.log(obj2);
console.log(obj2.name);

console.log(obj2.__proto__);