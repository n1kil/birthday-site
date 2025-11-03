const button = document.getElementById('songbutton');

const audio = document.getElementById('song');

var isPlaying = false;


function PlaySong(){
    if(isPlaying == false){
        isPlaying = true;
        audio.play();
    }
    else{
        isPlaying = false;
        audio.pause();
    }
    console.log('dsds');
}
