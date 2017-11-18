

console.log('try...catch...finally');

console.log('try...catch');

try{
    console.log('try1');
}
catch(e) {
    console.log(`catch1: ${e.message}`);
}

try{
    console.log('try2');
    throw "hello catch2";
}
catch(e) {
    console.log(`catch2: ${e}`);
}

console.log('finally');

try{
    console.log('try3');
}
catch(e) {
    console.log('catch3');
}
finally {
    console.log('finally3');
}

try{
    console.log('try4');
    throw new Error('hello world');
}
catch(e) {
    console.log('catch4');
}
finally {
    console.log('finally4');
}

console.log('conditional catch');

try {
    console.log('try5');
    // throw new TypeError('type error');
    // throw new RangeError('type error');
    // throw new EvalError('type error');
}
catch(e) {
    if (e instanceof TypeError) {
        console.log('catch5 type error');
    }
    else if(e instanceof RangeError){
        console.log('catch5 range error');
    }
    else if (e instanceof EvalError) {
        console.log('catch5 eval error');
    }
    else {
        console.log('other error types')
    }
}

console.log('my error object');

class WithDateError extends Error {
    constructor(message) {
        super(message);
        this.when = new Date();
    }
}


