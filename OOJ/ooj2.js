// 5) Using Function :
// Single Object.
// function data() {
//     var user = {};
//     user.fname = "Raj";
//     user.lname = "Shah";
//     return user;
// }

// var obj = data();
// console.log(obj);


// Multiple Object 
function data(fname,lname) {
    var user = {};
    user.fname = fname;
    user.lname = lname;
    return user;
}

var obj = data("Raj","Patel");
console.log(obj);

var obj2 = data("Ajay","Shah");
console.log(obj2);