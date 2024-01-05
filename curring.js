// normal function
function Volume1(length, width, height) {
    return length * width * height;
}
let multiply = Volume1(10, 20, 30);
console.log(multiply);


//let's convert it into currying function currying function
function Volume(length) {
    return function (width) {
        return function (height) {
            return length * width * height;
        }
    }
}

let fn1 = Volume(10);
let fn2 = fn1(20);
let fn3 = fn2(30);
console.log(fn3);

// Normal function
function findSum(val1, val2) {
    return val1 + val2;
}
console.log(findSum(2, 4));


// let's convert it into currying function

function findSum1(val1) {
    return function (val2) {
        return val1 - val2;
    }
}

let sum = findSum1(28);
let result = sum(20);
console.log(result);

