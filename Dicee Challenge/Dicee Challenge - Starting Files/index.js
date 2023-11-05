var randomNumber1 = Math.floor(Math.random()*(7-1))+1;
var randomNumber2 = Math.floor(Math.random()*(7-1))+1;

var imgSrc = "./images/dice"+randomNumber1+".png"
var imgSrc2 = "./images/dice"+randomNumber2+".png"

document.getElementsByTagName("img")[0].setAttribute("src",imgSrc);
document.getElementsByTagName("img")[1].setAttribute("src",imgSrc2);