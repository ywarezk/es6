/**
 * Created by yarivkatz on 31/10/2017.
 */

// map
const weirdkey = {'strange': 'key'};
const myMap = new Map([[weirdkey, 'hello world']]);

console.log(myMap.get(weirdkey));

const arrayKey = [1,2,3]
myMap.set(arrayKey, 'foobar');
console.log(myMap.get(arrayKey));

console.log('is key exist?');
console.log(myMap.has('hello?'));
console.log(myMap.has(arrayKey));

// get the values
console.log('get the values');
console.log(myMap.values());

// get the keys
console.log('get the keys');
console.log(myMap.keys());

// get the size of the map
console.log('size of map');
console.log(myMap.size);

// set

console.log('my set');
const mySet = new Set([1,2,2,2,3,3,3,3,3, 4]);
console.log(mySet);

console.log(`size of set ${mySet.size}`);

// remove all elements from set

console.log('remove all set elements');
mySet.clear();
console.log(mySet);

// adding elements to the set
console.log('adding elements to the set');
mySet.add('hello');
mySet.add('world');
console.log(mySet);

// converting to array
const arrayFromSet = Array.from(mySet);

