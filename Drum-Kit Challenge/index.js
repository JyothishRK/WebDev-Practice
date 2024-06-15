var n = document.querySelectorAll('.drum').length;

function makeSomeNoise(data){
    switch(data){
        case "w" :
            var music = new Audio('./sounds/tom-1.mp3');
            music.play();
            break;

        case "a" :
            var music = new Audio('./sounds/tom-2.mp3');
            music.play();
            break;

        case "s" :
            var music = new Audio('./sounds/tom-3.mp3');
            music.play();
            break;

        case "d" :
            var music = new Audio('./sounds/tom-4.mp3');
            music.play();
            break;

        case "j" :
            var music = new Audio('./sounds/snare.mp3');
            music.play();
            break;

        case "k" :
            var music = new Audio('./sounds/kick-bass.mp3');
            music.play();
            break;

        case "l" :
            var music = new Audio('./sounds/crash.mp3');
            music.play();
            break;

        default :
            console.log(data.innerHTML);
    }
}

function buttonAnimation(data){
    var currentButton = document.querySelector("." + data);
    currentButton.classList.add("pressed");
    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 100);
}

for(var i=0;i<n;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        var data = this.innerHTML;
        makeSomeNoise(data);
        buttonAnimation(data);
    });
}

document.addEventListener("keypress",function(event) {
    var data = event.key.toLowerCase();
    makeSomeNoise(data);
    buttonAnimation(data);
})

// function handleClick(){
//     alert('The Button is being clicked');
//     var sound = new Audio('./sounds/snare.mp3');
//     sound.play();
// }