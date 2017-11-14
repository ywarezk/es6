

const myArray = ['tofu', 'saten', 10, true];

// accessing elements
console.log(myArray[1]);

// changing elements
myArray[2] = 50;

// pushing new elements
myArray.push('soya milk');
console.log('pushing elements');
console.log(myArray);

// iterating on arrays
console.log('array iteration');
myArray.forEach(function(item, index, originalArray) {
    console.log(`${index}) ${item}`);
});

console.log('another array iteration');
for(let i=0; i<myArray.length; i++) {
    console.log(`${i}) ${myArray[i]}`);
}

// popping the last element
console.log('popping last element');
console.log(myArray.pop())

// removing elements of the array
// splice will add item or remove
console.log('remove element at index 2 remove one element')
myArray.splice(2,1);
console.log(myArray);
console.log('insert element at position 1')
myArray.splice(1,0, 'veggie burger');
console.log(myArray);
