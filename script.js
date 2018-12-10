const snareSound = document.getElementById("snare-sound");
const bassSound = document.getElementById("bass-sound");
const hihatSound = document.getElementById("hihat-sound");
const vocalsSound = document.getElementById("vocals-sound");

function playSnare(event){
    snareSound.currentTime = 0;
    snareSound.play();
}

function playBass(event){
    bassSound.currentTime = 0;
    bassSound.play();
}

function playHihat(event){
    hihatSound.volume = 0.5;
    hihatSound.currentTime = 0;
    hihatSound.play();
}

function playVocals(event){
    vocalsSound.currentTime = 0;
    vocalsSound.play();
}



function snareCommand() {
    const hitSnare = document.getElementById("snare");
    hitSnare.addEventListener('click', playSnare); 
  }

  function bassCommand() {
    const hitBass = document.getElementById("bass");
    hitBass.addEventListener('click', playBass); 
  }

  function hihatCommand() {
    const hitHihat = document.getElementById("hihat");
    hitHihat.addEventListener('click', playHihat); 
  }

  function vocalsCommand() {
    const hitVocals = document.getElementById("vocals");
    hitVocals.addEventListener('click', playVocals); 
  }

function keyDownHandler(event) {
    console.log(event);
    console.log(event.key);

    const key = event.key;

    if (key === 'a') {
        playSnare();
    } else if (key === 's') {
        playBass();
    } else {
        playHihat();
    }
}



/*window.onload = function() {
    snareCommand();
}

window.onload = function() {
    bassCommand();
}

window.onload = function() {
    hihatCommand();
}*/

window.onload = function(){
    snareCommand(); 
    bassCommand(); 
    hihatCommand();
    vocalsCommand();

    window.addEventListener('keydown', keyDownHandler);
}
