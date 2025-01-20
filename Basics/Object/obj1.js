// =>  What is Object : 
// ->  It is Collection of Properties and Methods(soon).
//->  property : pair of Key and value


// How to Create a Empty Object : 
var obj = {}; // empty obj

// console.log(obj);
// console.log(typeof obj);


// How to Create Object with Properies 

var Person = {
    // key    value     =  Property
    fname : "Raj",
    lname : "Shah",
    age : 12
};

// console.log(Person);
// console.log(typeof Person);



// How to access Object Property Value : 
// 1. using dot notation : 
// console.log(Person.fname);

// 2. using Bracket notation : 
// console.log(Person['fname']);
// console.log(Person["fname"]);
// console.log(Person[`fname`]);

//--------------------------------------------------
// How to Modify/Changed Property Value : 
// console.log(Person);
// 1. using dot notation : 
// Person.fname = "Ajay";
// console.log(Person);

// 2. using Bracket notation : 
// Person["lname"] = "Patel";
// console.log(Person);

// -------------------------------------------------
// How to Add New Property : 
// 1. using dot notation : 
// console.log(Person);
// Person.Gender = "Male";
// console.log(Person);

// 2. using Bracket notation : 
// console.log(Person);
// Person["ContactNo"] = 1234567890;
// console.log(Person);
// -------------------------------------------------
// How to Delete Specific Property : 
// 1. using dot notation : 
// console.log(Person);
// delete Person.fname;
// console.log(Person);

// // 2. using Bracket notation : 
// console.log(Person);
// delete Person["lname"];
// console.log(Person);


// Not Possible
// delete Person;
// console.log(Person);

////////////////////////////////////////////////////////////
// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2022,
//     color: "Silver"
//   };



// Print full object: How would you log the entire car object to the console?

// Access property value: Using dot notation, how do you access the brand of the car?

// Modify property value: If you wanted to update the year of the car to 2023, how would you do it?

// Add new property: What steps would you take to add a mileage property with a value of 15000 to the car object?

// Delete property: How can you remove the color property from the car object?
