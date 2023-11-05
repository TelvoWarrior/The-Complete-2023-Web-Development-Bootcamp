var randomNumber1 = Math.floor(Math.random()*(7-1))+1;
var randomNumber2 = Math.floor(Math.random()*(7-1))+1;

var imgSrc = "./images/dice"+randomNumber1+".png"
var imgSrc2 = "./images/dice"+randomNumber2+".png"

document.getElementsByTagName("img")[0].setAttribute("src",imgSrc);
document.getElementsByTagName("img")[1].setAttribute("src",imgSrc2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}