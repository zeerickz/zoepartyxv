let sound = new Audio('./Musica/Musica1.mp3');

playBtn.addEventListener('click', ()=>{
    sound.play();
});

pauseBtn.addEventListener('click', ()=>{
    sound.pause();
});