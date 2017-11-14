/**
 * Created by yarivkatz on 01/11/2017.
 */


var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
    // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

var whatComparison = '10';

console.log('kind of compare!!!');
switch(whatComparison){
    case 10:
        console.log('is a number 10');
        break;
    case '10':
        console.log('is a string 10');
        break;
    default:
        console.log('is somethings else')
}