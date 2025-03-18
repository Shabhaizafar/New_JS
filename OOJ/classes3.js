// // Multi level Inheritance : 
// class GrandFather{
//     gold = 10000000000099;
//     Gold(){
//         console.log(`Gold : ${this.gold}Kg`);
//     }
// };


// class Father extends GrandFather{
//     prop = 1000000000;
//     Property(){
//         console.log(`Property : ${this.prop} viga`);
//     }
// };

// class Child extends Father{
//     debp = 1000000000000000000n;
//     Debt(){
//         console.log(`Debt : ${this.debp}`);
//     }
//     finalProperty(){
//         console.log(BigInt(this.prop*400000000 + this.gold*83000) - this.debp);
//     }

// };


// const c1 = new Child();
// c1.Debt();
// c1.Property();
// c1.Gold();
// c1.finalProperty();


// class GrandFather{
//     Lastname = "Rao";
//     constructor(gname){
//         this.GrandFathername = gname;
//     }
// }
// class Father extends GrandFather{
//     constructor(fname,gname){
//         super(gname);
//         this.Fathername = fname;
//     }
// }
// class Child extends Father{
//     constructor(cname,fname,gname){
//         super(fname,gname);
//         this.Childname = cname;
//     }
//     fullname(){
//         console.log(`My Full Name is ${this.Childname} ${this.Fathername} ${this.GrandFathername} ${this.Lastname}.`);
//     }
// }

// const c1 =  new Child("Raj","Rajesh","Ramesh");

// console.log(c1);

// c1.fullname();


// Build a GameObject class with basic properties like name and position. Extend it into Character, then further into Hero. Implement methods to move and attack.