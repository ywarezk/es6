
const myTrue = true;
const myFalse = false;

// null, false, "", 0, -0, undefined //will evaluate to false

// false evaluate

let falseEvaluate = undefined;
let falseEvaluate1 = null;
let falseEvaluate2 = false;
let falseEvaluate3 = "";
let falseEvaluate5 = 0;
let falseEvaluate6 = -0;

if(falseEvaluate) console.log('wont be printed');
if(falseEvaluate1) console.log('wont be printed');
if(falseEvaluate2) console.log('wont be printed');
if(falseEvaluate3) console.log('wont be printed');
if(falseEvaluate5) console.log('wont be printed');
if(falseEvaluate6) console.log('wont be printed');

// other values will be true evaluated

let trueEvaluated = "stam string";
let trueEvaluated1 = 10;

if(trueEvaluated) console.log('this will be printed');
if(trueEvaluated1) console.log('this will be printed');


