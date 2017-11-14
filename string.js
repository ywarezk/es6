
// ways to define a string
let myStringSingleQuote = 'A wise man once said: "When writing an API don\'t aim to please everyone rather aim to displease everyone equally"';
let myStringDoubleQuote = "A wise man once said: \"When writing an API don't aim to please everyone rather aim to displease everyone equally\"";
let myStringMultiline = `
    A wise man once said:
    "When writing an API,
    don't aim to please everyone
    rather
    aim to displease everyone equally"
`;
console.log(myStringSingleQuote);
console.log(myStringDoubleQuote);
console.log(myStringMultiline);

// concat string

let stringA = 'this is string a';
let stringB = 'string B?';
console.log(stringA + ' ' + stringB)

// inject js to backticks

let myInjectedString = `hello world ${ 1 + 1}`;
console.log(`example of injected string: ${myInjectedString}`);

// string is an array
console.log(stringA[2]);
for (let i = 0; i < stringA.length; i++){
    console.log(stringA[i]);
}

// common functions

// indexOf used to search substring in string returns -1 if not found or the first index if found

console.log('indexOf example:');
console.log(stringA.indexOf('hello world'));
console.log(stringA.indexOf('string'));

// substr gets the start index and length (default to all) and return that substring
console.log('substr example:');
console.log(stringA.substr(3));
console.log(stringA.substr(3, 6));

// substring gets the start and end index

console.log('substring example: ');
console.log(stringA.substring(3));
console.log(stringA.substring(3, 6));

// split returns the array by a delimiter

console.log('split example');
const mySplitArray = stringA.split(' ');
console.log(mySplitArray[0]);
console.log(mySplitArray[1]);