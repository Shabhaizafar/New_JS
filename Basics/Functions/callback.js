//callback Function :-
// function addition(){
//     var n1 = 12;
//     var n2 = 12;
//     console.log(n1+n2);
// }
// function Operation(myfu){
//     myfu();
// }

// Operation(addition);


// ----------------------------------------------------
// Higher Order Function : 


function main(){
    var choice = prompt('1) type "num" for Number.\n2) type "str" for String.');

    switch (choice) {
        case 'num': myNumber();
                    break;
        case 'str': myString();
                    break;
        default: console.log("Please Enter Valid Choice !!!");
                    break;
    }
}

// main();

function myNumber(){
    var n1 = +prompt("Enter the Value of N1 : ");
    var n2 = +prompt("Enter the Value of N2 : ");
    var choice = +prompt("1. for Addition\n2. for Subtraction.");
    switch (choice) {
        case 1:  addition(n1,n2);
                 break;
        case 2:  subtraction(n1,n2);
                 break;
        default: console.log("Please Enter Valid Choice !!!");
                 break;
    }
}
function myString(){
    var s1 = prompt("Enter the Value of String1 : ");
    var s2 = prompt("Enter the Value of String2 : ");
    var choice = +prompt("1. for Concatination\n2. for Uppercase\n3. for lowercase.");
}

function addition(a,b){
    console.log(`Addition of ${a} and ${b} : ${a+b}.`);
}