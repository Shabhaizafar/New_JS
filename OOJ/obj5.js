// Object Using Function Based
function data(fname,lname,age) {
    var user = Object.create(data.prototype);
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    return user;
}

data.prototype = {
    bioData : function(){
        console.log(`Your Name is ${this.fname} ${this.lname}.and Your Age is ${this.age}`);
    }
};

var obj = data("Raj","Patel",13);
console.log(obj);

var obj2 = data("Ajay","Shah",14);
console.log(obj2);

obj.bioData();
obj2.bioData();
