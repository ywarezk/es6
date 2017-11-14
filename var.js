/**
 * variable declaration with var
 *
 * Created October 29th, 2017
 * @author: ywarezk
 * @version: 1.0.0
 * @copyright: Nerdeez Ltd
 */

// define a variable

var myString = 'hello world';
var myString2;
myString = 10;

// the scope of var
// what is printed?
for(var i = 0; i < 10; i++){
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }
}

// what is printed?
function printMe(isPrint) {
    if (isPrint){
        var msg = 'hello you asked to print me';
    }
    console.log(msg);
}

printMe(true);
printMe(false);


