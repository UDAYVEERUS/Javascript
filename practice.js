// // practice question 
// // let game_no = 20;
// // let userNum = prompt("Guess the game number : ")
// // console.log(userNum)
// // while(userNum != game_no){
// //     userNum = prompt("You entered the wrong number. please guess again")
// // }
// // alert("Congratulations!! You entered the right answer.")

// //  Qs2 - Prompt the user to enter their full name . Generate a username for them based on the input. Start usename with @. followed by their full name and ending with the full name length.

// let fullName = prompt("Enter full name without space");
// // console.log(fullName);

// // let username = "@" + fullName  + fullName.length;
// let username = "@" + fullName.concat(fullName.length)
// console.log(username);


let array  = [56, 93, 96, 32, 95, 91];

let toppers = array.filter((val) => {
    return val > 90;
})
console.log("toppers : ",toppers);


let number = prompt("Enter a number : ")
let arr = [];
for(var i=1; i<=number; i++){
    arr[i-1] = i;
}
console.log(arr);
let sum = arr.reduce((prev , curr) => {
    return prev  + curr;
})

console.log("Sum of all array : ", sum);

let factorial = arr.reduce((prev , curr) => {
    return prev  * curr;
})
console.log("factorial of all array : ", factorial);
