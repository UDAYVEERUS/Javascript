// After applying the 10% offer what will be the array
let items = [200, 450, 239,443,764,786]

for(let i=0; i<items.length; i++){
    console.log(`Value of index ${i} before offer ${items[i]}`)
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`)
}
// console.log(items)

// find the average of the given array

let array = [32, 56, 76, 44, 98, 67, 53];
let N = array.length;
let sum = 0;
for(let i=0; i<=array.length-1; i++){
    sum = sum + array[i]; // sum of all give array
}

let average = sum / N;
console.log("Average NUmber of all given array : ", average);
