// alert("Hi there!");
let gamePattern = [];
let buttonColours = ["red","blue","green","yellow"];
let randomChosenColour = buttonColours[nextSequence()];
function nextSequence() {
    let minNum = 0;
    let maxNum = Math.floor(4);
    let randomNumber = Math.floor(Math.random()*(maxNum-minNum))+minNum;
    return randomNumber;
}
gamePattern.push(randomChosenColour);
console.log(gamePattern);