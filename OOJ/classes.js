// // How to create a Class : 

// // class Person{
// //     //default data : 
// //     companyname = "Royal";
// // };

// // var p1 = new Person();
// // var p2 = new Person();

// // console.log( typeof p1);

// // console.log(p1);

// // console.log( typeof p2);

// // console.log(p2);

// // // How to Modify default Data : 

// // p1.companyname = "TCS";

// // console.log( typeof p1);

// // console.log(p1);

// // console.log( typeof p2);

// // console.log(p2);

// ////////////////////////////////////////////////
// class Person{
//     constructor(cname,ename,lname){
//         this.companyname = cname;
//         this.employeename = ename;
//         this.lastname = lname;
//     }

//     display(){
//         console.log(`My name is ${this.employeename}.currently wroking in ${this.companyname}.`);
//     }

//     //getter method 
//     get FullName(){
//         return this.employeename+this.lastname;
//     }

//     //setter Method 
//     set changemployee(newdata){
//         this.employeename = newdata;
//     }
// };

// const p1 = new Person("Royal","Raj","Shah");
// const p2 = new Person("TCS","Ajay","Sharma");

// console.log( "P1 : ",typeof p1);
// console.log(p1);
// p1.display();
// console.log(p1.FullName);

// console.log( "P2 : ",typeof p2);
// console.log(p2);
// p2.display();
// console.log(p2.FullName);




// p1.changemployee = "Rakesh";
// p1.display();
///////////////////////////////////////////////////////////
// Here are two questions based on different class creation scenarios:  

// ### **Question 1: Basic Class with Default Properties**  
// Create a class named **Car** that has a default property **brand** set to `"Toyota"`. Then, create two objects from this class and modify the brand of one object to `"Honda"`. Finally, print both objects to see the difference.  

// ---

// ### **Question 2: Class with Constructor, Getter, and Setter**  
// Create a class named **Student** with a constructor that takes three parameters: **schoolName, firstName, lastName**. Add a **getter method** that returns the full name of the student and a **setter method** that allows updating the first name. Create two objects with different values and demonstrate the use of the getter and setter.