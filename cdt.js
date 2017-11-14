
console.log('This will b printed in the console');

// inspect memory
var myArray = [];
function clickButton(){
    // debugger;
    for (var i=0; i<100000; i++){
        const element = document.createElement('div');
        document.body.appendChild(element);
        myArray.push(element);
    }
}

document.getElementById('test-memory').addEventListener('click', clickButton);
