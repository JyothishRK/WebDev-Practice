var random1 = Math.floor(Math.random()*6) + 1;
var random2 = Math.floor(Math.random()*6) + 1;

var file1 = "dice" + random1 + ".png";
var file2 = "dice" + random2 + ".png";

var img1 = document.querySelector('.img1')
img1.setAttribute('src','images/'+file1);

var img1 = document.querySelector('.img2')
img1.setAttribute('src','images/'+file2);

var result = document.querySelector('h1');
if(random1 > random2){
    result.innerHTML = 'Player 1 Wins';
}
else if(random1 < random2){
    result.innerHTML = 'Player 2 Wins';
}
else{
    result.innerHTML = 'Its a Draw';
}