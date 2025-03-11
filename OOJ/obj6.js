
function data(fname,lname,age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

data.prototype = {
    bioData : function(){
        console.log(`Your Name is ${this.fname} ${this.lname}.and Your Age is ${this.age}`);
    }
};

var obj =new data("Raj","Patel",13);
console.log(obj);

var obj2 =new data("Ajay","Shah",14);
console.log(obj2);

obj.bioData();
obj2.bioData();


/*
Question 1:
Create a function called Person that accepts firstName, lastName, and age as parameters. Add a method greet to the prototype of the Person function that prints a greeting message like: "Hello, my name is {firstName} {lastName}, and I am {age} years old." Create two instances of this Person function and demonstrate how the greet method works.

Question 2:
Write a constructor function named Car which takes make, model, and year as parameters. Add a method to the prototype of Car called carInfo that logs a sentence containing the car's make, model, and year. Create two instances of the Car function and display their car information using the carInfo method.
*/


