// classes.
// Object.
// Inheritance.
/*
    Type of Inheritance :
        1. Single Level Inheritance.
        2. Multi Level  Inheritance.
        3. Multiple Inheritance. (not possible Directly)
        4. Hierarchical Inheritance.
        5. Hybrid Inheritance.
*/
// 1. Single Level Inheritance : 
// Class   :    A   (Base Class)
//              |
//              |
//              |
// Class   :    B   (Derived Class) (inherit class A)

class Father{
    constructor(fname,lname){
        this.Fathername = fname;
        this.Lastname = lname;
    }
};
class Child extends Father{
    constructor(cname,fname,lname){
        super(fname,lname);
        this.Childname = cname;
    }
};

const c1  = new Child("Raj","Rajesh","Rao");

console.log(c1);


// ### **Question 1:**  
// Create a `Person` class with properties `name` and `age`. Then, create a `Student` class that extends `Person` and adds a new property `grade`. Instantiate a `Student` object and log all its properties.  

// ### **Question 2:**  
// Create a `Vehicle` class with a method `startEngine()` that logs `"Engine started"`. Extend it with a `Car` class that has an additional property `brand`. Create an instance of `Car`, call the `startEngine()` method, and log the brand.