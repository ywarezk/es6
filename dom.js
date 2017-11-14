
// getElementById returns a single element

var h1 = document.getElementById("h1-get-id");

// getElements by class Name

var elms = document.getElementsByClassName('get-by-classname');

// you can access each item like an array

// get elements by tag name

var h1s = document.getElementsByTagName('h1');

// make an element hidden

// h1.hidden = true;

// change hidden text

h1.innerText = 'wat?';

// add click event
h1.onclick = function(){
    alert('added an event');
}

h1.style.backgroundColor = 'red';

h1.innerHTML = '<span>This is in span</span>';

console.log(h1.getAttribute('id'));

h1.remove();

// insert a new node

const newDiv = document.createElement('div');
const childNode = document.createTextNode('hello dynamicly created text');
newDiv.appendChild(childNode);
document.body.appendChild(newDiv);