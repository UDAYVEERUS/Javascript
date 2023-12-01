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

// PUSH METHOD , POP METHOD , toString METHOD.

let fooditems = ["tomato", "potato" , "burger" , "pizza" , "onion"];

fooditems.push("garlic" , "jalebi" , "samosa");
fooditems.pop();

console.log(fooditems);
console.log(fooditems.toString());


// CONCAT METHOD , unshift method
let indianHeros = ["shaktiman" , "spiderman" , "ironman"];
indianHeros.unshift("Akshay kumar"); // push value the strating of the array
let val = indianHeros.shift();
console.log("deleted" , val) // delete value from the starting of the array
let mdHeros = ["marbel" , "thor" ];
let food = ["tomato" , "potato" , "onion" , "garlic"];

let heros = indianHeros.concat(mdHeros , food);
console.log(heros);

// SLICE AND SPLICE METHOD(reurns peice of the array)
let heroine = ["alia" , "deepika" , "kajal agrawal" , "sonam kapoor" , "ananya pandey"];

let newHeroine = heroine.slice(1,4);
console.log(newHeroine);

// splice method (change original array (Add, remove , replace)); splice(startIndex, deleteCount, newEl)

let number = [23,44,32,56,77,65,78,90];

// number.splice(2, 2 ,101,102);

//Add element
// number.splice(3,0,55);

// Delete Element
// number.splice(3,1) // it will delete index no. 3

// Replace Element
number.splice(4,1,102)
console.log(number);