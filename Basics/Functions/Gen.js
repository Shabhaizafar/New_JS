/*
Syntax : 
1. 
function * functionname(){
}

2. 
function *functionname(){
}

3. 
function* functionname(){
}

4. 
function*functionname(){
}
*/

function*gen(){
    yield 1,
    yield 2,
    yield 3,
    yield 4
}

var myfu = gen();
// console.log(myfu.next().value);
// console.log(myfu.next().value);
// console.log(myfu.next().value);
// console.log(myfu.next().value);
// console.log(myfu.next().value); //

console.log(myfu.next());
console.log(myfu.next());
console.log(myfu.next());
console.log(myfu.next());
console.log(myfu.next());


