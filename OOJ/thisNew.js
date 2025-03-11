console.log(window);

console.log(this);


// window : global Object 

// this : global Object

// window == this



function data(fname,lname,age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}
// {fname : "Raj"}

// obj = Object.create({});
var obj = new data("Raj","Patel",13);
console.log(obj);

// new : 
// A new empty object is created.
// The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
// The ‘this’ variable is made to point to the newly created object. It binds the property that is declared with the ‘this’ keyword to the new object.



//this : 