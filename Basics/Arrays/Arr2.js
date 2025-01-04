// clone Array :  
// deep copy :        copy 

// var Arr1 = [11,12,13,14,15];
// var Arr2  = Arr1;
// // duplicate :  clone : 

// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);


// Arr1.push(100);

// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);

////////////////////////////////////
// shallow copy :   duplicate 
var Arr1 = [11,12,13,14,15];
var values = ["Royal","Tech"];
// // 1) concat(); : 
// var Arr2 = Arr1.concat(values);
// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);

// Arr1.push(100);
// Arr2.push("Zafar");
// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);

// 2) using slice() : 
// var Arr2 = Arr1.slice(0,3);
// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);

// Arr1.push(100);
// Arr2.push("Zafar");
// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);


// 3) using spread Operator :  [...]
// var Arr2  = [...Arr1];
// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);
// Arr1.push(100);
// Arr2.push("Zafar");
// console.log("Array1 : ",Arr1);
// console.log("Array2 : ",Arr2);
// nested Array : 
// Array destructuring   : 

