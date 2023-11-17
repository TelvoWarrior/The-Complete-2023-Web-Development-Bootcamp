let buttonColours = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("RANDOM colour is: ",gamePattern)
    $("#"+randomChosenColour).animate({opacity: 0.25,}, 50).animate({opacity: 1,}, 50);
    playSound(randomChosenColour);
    level++
    $("h1").text("Level "+level);
}

$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log("user chosen colour is:", userClickedPattern);
    playSound(userChosenColour);
    animatePress(this);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $(currentColour).addClass("pressed");
    setTimeout(function() {
        $(currentColour).removeClass("pressed");
    }, 100);
}
function animateGameOver(currentColour) {
    $(currentColour).addClass("game-over");
    setTimeout(function() {
        $(currentColour).removeClass("game-over");
    }, 200);
}
var gameStarted = false
var level = 0
$("body").on("keypress", function(event){
    if (gameStarted) {
    } else if (event.key=='a'){
        gameStarted = true
        $("h1").text("Level "+level);
        nextSequence();
    }
})

function checkAnswer(currentLevel) {
    console.log("Check Answer recieved: ", currentLevel)
    if (userClickedPattern[currentLevel]==gamePattern[currentLevel]) {
        if (userClickedPattern.length==gamePattern.length) {
            console.log("success")
            setTimeout(function() {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        console.log("wrong")
        var audioWrongAnswer = new Audio("sounds/wrong.mp3");
        audioWrongAnswer.play();
        animateGameOver("body");
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level=0;
    gamePattern=[];
    userClickedPattern = [];
    gameStarted = false
    $("body").on("keypress", function(event){
            gameStarted = true
            $("h1").text("Level "+level);
            nextSequence();
    })
}
