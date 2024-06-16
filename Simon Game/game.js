var buttonColours = ["red", "blue", "green", "yellow"];
var userChosenColor = [];
var colorSeq = [];
var level = 0;
var started = false;

function playMusic(colorChosen){
    var music = new Audio('./sounds/' + colorChosen + '.mp3');
    music.play();
}

function animatePress(color){
    $('.' + color).addClass('pressed');
    setTimeout(function(){
        $('.' + color).removeClass("pressed");
    },100);
}

function startOver(){
    level = 0;
    colorSeq = [];
    started = false;
}

function checkAnswer(level){
    if(userChosenColor[level] == colorSeq[level]){
        console.log("Correct");
        if(userChosenColor.length  == colorSeq.length){
            setTimeout(nextSequence(level + 1), 5000);
        }

    }
    else{
        console.log("Wrong");
        var sound = new Audio("./sounds/wrong.mp3");
        sound.play();
        $('body').addClass("game-over");
        $('#level-title').text('Game Over');
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
}

function nextSequence(level){
    userChosenColor = [];

    //Choosing the next color using Math.random()
    var randomNumber = Math.floor(Math.random() * 4);
    var colorChosen = buttonColours[randomNumber];
    $("#" + colorChosen).fadeOut(100).fadeIn(100);
    playMusic(colorChosen);
    colorSeq.push(colorChosen);

    //Game part
    // console.log($('#level-title'));
    $('#level-title').text('Level ' + level);
}

$('.btn').click(function() {
    userChosenColor.push(this.id);
    playMusic(this.id);
    animatePress(this.id);
    // console.log(userChosenColor);
    checkAnswer(userChosenColor.length - 1);
});

$(document).keypress(function(){
    if(!started){
        started = true;
        nextSequence(level);
    }
});
