/**
 * Created by yarivkatz on 07/11/2017.
 */

console.log('Classes');

class Person {
    constructor(firstName='yariv', lastName='katz') {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(){
        console.log(`hi my name is ${this.firstName} ${this.lastName}`);
    }
}

var person = new Person();
person.sayHello();

class Student extends Person {
    static name(){
        return 'blah';
    }

    constructor(firstName, lastName, grade){
        super(firstName, lastName);
        this.grade = grade;
    }

    sayHello(){
        console.log("Hi I'm a student");
        super.sayHello();
    }
}

var student = new Student('yar', 'k', 56);
student.sayHello();

console.log(`static: ${Student.name()}`);