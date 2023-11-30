// Arithmatic operations
let a = 7;
let b = 2;

console.log("a = " , a , " b = ", b);
console.log("a + b = ", a + b); // 9
console.log("a - b = ", a - b); // 5
console.log("a * b = ", a * b); // 14
console.log("a / b = ", a / b); // 3.5
console.log("a % b = ", a % b); // 1
console.log("a == b" , a == b); // false



let age = 16;

if(age > 18){
    console.log("you can vote");
}else{
    console.log("You can not vote.")
}

let res = (age > 14 && age < 19);
console.log(res); // true
let res2 = (age > 20 || age < 13);
console.log(res2); // false

let score = 67;

if(score >= 90 && score <= 100){
    grade = "A"
}else if(score >= 80 && score <= 89){
    grade = "B"
}else if(score >= 70 && score <= 79){
    grade = "C"
} else if(score >= 60 && score <= 69){
    grade = "D"
}else if(score >=50 && score <= 59){
    grade = "E"
}
else{
    grade = "F"
}
console.log(grade);

// For Loop * pattern

for(let i = 1; i <= 5; i++) {
    console.log(" * ".repeat(i) )
}
