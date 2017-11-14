
// create an object

const myObj = {'key1': 10, 'key2': true, 'key3': 'hello world', 'key4-and-friends': [1,2,3]}

// read an key
console.log('read a key');
console.log(myObj['key1']);
console.log(myObj.key2); // this syntax can be dangerous on weird keys

// place a new key
myObj['newkey'] = 'hello world';
myObj.stamkey = 'wat';
console.log(myObj.stamkey);

// get an array of all the key
console.log('keys are:')
console.log(Object.keys(myObj));

// delete a key
console.log('deleting a key');
delete myObj['key1'];
console.log(myObj);

// does key exist?
console.log('does key exist?');
console.log(myObj.hasOwnProperty('key2'));
console.log(myObj.hasOwnProperty('key1'));
