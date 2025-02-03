// Arrow Function : 


// 1. without argument and without return type
//function definition 
// var sayHello =  ()=>{
//     console.log("Hello Everyone,Welcome to javascript !!!");
// }

//function calling/invoked
// sayHello();


// 2. with argument and without return type
// var addition =  (n1,n2)=>{  // n1,n2  parameter
//     console.log("Addition is : ",n1+n2);
// }
// addition(12,13); // 12 13 argument 


// 3. without argument and with return type
// let addition =  ()=>{
//     var n1 = 12;
//     var n2 = 13;
//     return n1+n2;
// }
// console.log("Addition is : ",addition());
// var ans  = addition();
// console.log(ans);


// 4. with argument and with return type

// var addition =  (n1,n2)=>{
//     return n1+n2;
// }

// console.log("Addition",addition(12,13));
// var ans = addition(12,13);
// console.log(ans);




// var addition =  (n1)=>console.log("N1 is  : ",n1);

// var addition =n1=>console.log("N1 is  : ",n1);

// var addition =  (n1,n2)=>console.log("Add  : ",n1+n2);

// var addition =  n1,n2 =>console.log("Add  : ",n1+n2);  error


// addition(12,13); // 12 13 argument 


// var sayHello =  =>console.log("Hello Everyone,Welcome to javascript !!!"); // error 
// var sayHello = () =>console.log("Hello Everyone,Welcome to javascript !!!"); 

// sayHello();



// let addition =  ()=>return 13;   //error
// console.log("Addition is : ",addition());