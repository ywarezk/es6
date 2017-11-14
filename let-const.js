
const myVar = 'hello world';
// myVar = 10 //Error! const can only be assigned once

let myVar2 = 'hello world';
myVar2 = 10;

// for let you dont have to make assingment
let myVar3;

// const is not immutable
const myArr = [1,2,3];
myArr[1] = 4;

// scope of let/const

// the scope of var
// what is printed?
for(let i = 0; i < 10; i++){
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
}

// what is printed?
function printMe(isPrint) {
    if (isPrint){
        const msg = 'hello you asked to print me';
    }
    console.log(msg);
}

printMe(true);
printMe(false);
