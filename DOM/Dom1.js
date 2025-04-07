// console.log("All");

// DOM : Document Object Model.

// Document :  HTML Code
// Object : key value pair   ex :  {fname : "Raj"}
// Model : Structure



// How to Access HTML code Using JS : 
// 1. using id :  
// console.log(document.getElementById('myid'));

// 2. using class :                                        //   0            1
// console.log(document.getElementsByClassName('myclass'));  // [h2.myclass, p.myclass]
// console.log(document.getElementsByClassName('myclass')[1]);

// 3. using tag name : 
// console.log(document.getElementsByTagName('h2')); //[h2, h2.myclass, h2#myid, h2, myid: h2#myid]
// console.log(document.getElementsByTagName('h2')[3]);

// 4. queryselector : 
// tagname :
// console.log(document.querySelector('h2'));
//class : 
// console.log(document.querySelector('.myclass'));
//id :
// console.log(document.querySelector('#myid'));


// 5. queryselectorall : 
// tagname :
// console.log(document.querySelectorAll('h2'));
// console.log(document.querySelectorAll('h2')[0]);
// console.log(document.querySelectorAll('h2')[1]);
// console.log(document.querySelectorAll('h2')[3]);


