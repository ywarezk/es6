/**
 * Created by yarivkatz on 03/11/2017.
 */


// create a function

console.log(sayHello('wat'));

function sayHello(message) {
    console.log(message);
}

// call a function
sayHello('hello world');

// passed arguments by refrence
const myArray = [1,2,3];

function changeMyArray(){
    myArray.push(4);
}

changeMyArray();
console.log(myArray);

// what is this in a function

// default behaviour

function whatIsThis(){
    console.log(this == global); // in browsers global is window
}
whatIsThis();

// when function is part of an object

function whatIsThis2(){
    console.log(this);
}

// this is determined at the time of the call to function
var obj = {a: whatIsThis2, b: ''};
obj.a();

const arrayWithFunction = [whatIsThis2, 1,2,3,4,5];
arrayWithFunction[0]();

// if its part of an object this will be the object
// if its not it will get the global scope as this

// on strict mode it wont inherit the global object

function whatIsThis3(){
    'use strict'
    console.log(this);
}
whatIsThis3();

// set this with bind

// bind gets a new function

const tempWhatIsThis3 = whatIsThis3.bind({'a': 'this', 'b': 'is', 'c': 'custom', 'd': 'this'});
tempWhatIsThis3();

// call

// similar to bind but doesnt return the new function

console.log('call!!!');

function callExample(arg1, arg2) {
    console.log(this + arg1 + arg2);
}

callExample.call('thisArg', 'what', 'is');

// apply is like call but the arguments are sent as an array

console.log('this with new!!!!');

function thisWithNew(){
    console.log(this);
}

new thisWithNew();


// default arguments
console.log('default arguments');
function withDefault(a='hello', b) {
    console.log(a + b);
}
withDefault(null, ' world');

function withDefault(a, b = 'world2') {
    console.log(a + b);
}

withDefault('hi ');



