var AllMethods = {
    bioData : function(){
        console.log(`Your Name is ${this.fname} ${this.lname}.and Your Age is ${this.age}`);
    }
}
function data(fname,lname,age) {
    var user = Object.create(AllMethods);
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    return user;
}

var obj = data("Raj","Patel",13);
console.log(obj);

var obj2 = data("Ajay","Shah",14);
console.log(obj2);

obj.bioData();
obj2.bioData();

// employee : fname,lname,salary,position,hire-date

// showemployee : fname lname.position 