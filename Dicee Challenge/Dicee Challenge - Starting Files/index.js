var randomNumber1 = Math.floor(Math.random()*(7-1))+1;
var imgSrc = "./images/dice"+randomNumber1+".png"
document.querySelector("img").setAttribute("src",imgSrc);