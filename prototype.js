/**
 * Created by yarivkatz on 06/11/2017.
 */

// let's experiment with prototype

// when you create object its inheriting from Object.prototype

console.log('Object.prototype');
console.log(Object.prototype);

// when creating a new object the object inherits the object prototype

console.log('prototype chaininig');
var newObject = {}
console.log(Object.getPrototypeOf(newObject) === Object.prototype);
var newObject3 = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(newObject3) === Object.prototype);

// if you want fresh object which is not inheriting from Object.prototype

var newObject2 = Object.create(null);
console.log(Object.getPrototypeOf(newObject2) === Object.prototype);

// we can pass object create a prototype to base on
const a = {'hello': 'world'};
var newObject4 = Object.create(a);
console.log(Object.getPrototypeOf(newObject4) === a);

// newObject4 still has all the methods of Object.prototype
// this is called prototype chaining
// newObject 4 has an a prototype and then Object.prototype
// when js is looking for a property it searches in all the prototypes
Object.prototype.hello='foo bar';
console.log(newObject4.hello);
console.log(newObject.hello);

// creating an array inherit array prototype and object prototype

console.log('array');
const myArray = [1,2,3];
console.log(myArray.hello);
console.log(Object.getPrototypeOf(myArray) === Array.prototype);
Array.prototype.hello = 'hello from array';
console.log(myArray.hello);

// Object.prototype.hasOwnProperty will check in the nearest prototype if we have the property

var newObject5 = Object.create(Object.prototype);
console.log('hasOwnProperty');
console.log(newObject5.hasOwnProperty('hello'));
newObject5.hello = 'i have hello';
console.log(newObject5.hasOwnProperty('hello'));

// constructor
// the function that is creating the instance
// new is a syntacatical sugar to call the constructor function
// var a = []; // var a = new Array() // var a = Array.prototype.constructor


// using prototype to create classes

console.log('')

function Person(firstName, lastName) {
    // what does this equal to?
    // this is set to a new prototype that belongs to the instance
    console.log(this.__proto__ == Person.prototype);
    this.firstName = firstName;
    this.lastName = lastName;
}

var person = new Person('yariv', 'katz');

// so using new created a new prototype and the next in chain will
// be the person prototype
// so if im adding a method to person prototype then all person instances
// will inherit that function.

Person.prototype.sayHello = function() {
    console.log(`my name is: ${this.firstName} ${this.lastName}`);
};

// so calling new Person is like calling Object.create(Person.prototype)
// and setting the constructor function to be the Person function.

// let's try to create inheritance using prototype
// a student is a person with a grade
function Student(firstName, lastName, grade){
    Person.call(this, firstName, lastName);
    this.grade = grade;
}

var student = new Student('yar', 'k', 34);

// we still didnt inherit the prototye we are just calling the constructor
// of person
// so this will work
console.log(`accessing property from person ${student.firstName}`);
// but this wont
// console.log(`accessing method from person ${student.sayHello()}`);

// we need to set the prototype of Student to inherit from the prototype of person
Student.prototype = Object.create(Person.prototype);
student = new Student('yar', 'k', 34);
console.log(`accessing method from person ${student.sayHello()}`);

console.log('overriding prototype');

// since js is looking for property and method in the nearest prototype and then iterate back
// we can override certain methods or properties
// we can also override and continue calling in the rest of the chain
// for example an object has toString method
// let's say in the student prototype we want to override
// for example lets add a toString to student
Student.prototype.toString = function(){
    return `Student instance: ${this.grade} ${Student.prototype.__proto__.toString()}`;
}
