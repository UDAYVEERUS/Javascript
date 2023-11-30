// Print udayveer singh using for loop
for(let i=1; i <= 100; i++){
    console.log("Udayveer Singh")
}

// print sum of the 1 to n numbers

var sum = 0;
for(let i=1; i <= 5; i++){
    console.log("i = ", i)
    sum = sum + i
}
console.log("Sum of the 1 to n numbers = ", sum)

// While loop
let j = 1;
while(j <= 10){
    console.log("J = " , j);
    j++;
}

let sum1 = 0;
let n = 15;
let i = 1;
while(i <= n){
    sum1 = sum1 + i;
    i++;
}
console.log("sum of the numbers = " , sum1)


// for of loop check size of string

var str = "udayveersingh"
let size = 0;
for(let i of str){
    console.log("i = " , i)
    size++;
}
console.log("size is = ", size)