/**
 * Created by yarivkatz on 14/11/2017.
 */


console.log('promise example');

// simple promise that return a response async after 2 seconds

const timerPromise = new Promise((resolve, reject) => {
    // this will run even if there are no subscribers
    // will run once not for every subscriber
    setTimeout(() => {
        resolve('hello from timerpromise');
    }, 2000);
});

// subscribe to a promise

timerPromise.then(function resolve(message){
    // this will run when the promise runs resolve
    // this will get as param what the promise is sending
    console.log(message);
}, function reject(){
    // this will run when the promise runs reject
    // this will get as param what is sent in the reject, recommended to send an error object
});

// if promise is sync then subscribers will run immediatly (no race condition)

const syncPromise = new Promise((resolve, reject) => {
    reject(new Error("error in sync proise"));
});

syncPromise.then(function resolve(){
    console.log('this code wont be reached');
}, function reject(err){
    console.log(err.message);
});

// then returns a promise so you can use promise chaining to manipulate the promise data

const promiseChainingExample = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('we will change from string to number by the number of chartacters');
    }, 3000);
}).then(function resolve(message){
    return message.length;
}, function reject(){

}).then(function resolve(num){
    console.log(`the number of character is: ${num}`);
}, function reject(){

});

// common use case converting json response to class

class Person{
    constructor(json) {
        this.firstName = json.firstName || '';
        this.lastName = json.lastName || '';
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const promiseChainingClass = new Promise((resolve, reject) => {
    // server will return  a json after 4 seconds
    setTimeout(() => {
        resolve({
            firstName: 'Slim',
            lastName: 'Shady'
        });
    }, 4000);
}).then(function resolve(json){
    return new Person(json);
}).then(function resolve(person){
    console.log(`hi my name is: ${person.fullName}`);
});

// all

