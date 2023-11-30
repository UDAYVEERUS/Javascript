// practice question 
let game_no = 20;
let userNum = prompt("Guess the game number : ")
console.log(userNum)
while(userNum != game_no){
    userNum = prompt("You entered the wrong number. please guess again")
}
alert("Congratulations!! You entered the right answer.")