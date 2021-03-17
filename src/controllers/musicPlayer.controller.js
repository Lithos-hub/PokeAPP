import musicPlayer from "../components/musicPlayer/musicPlayer.html"
import '../components/musicPlayer/styles.scss'

const music = document.querySelector("#music")

const divElement = document.createElement('div');
divElement.innerHTML = musicPlayer;

const playBtn = divElement.querySelector("#playBtn")
const pauseBtn = divElement.querySelector("#pauseBtn")

export default () => {
    
    playBtn.style.display = "block"
    pauseBtn.style.display = "none"
    

    const onPlayMusic = () => {
        playBtn.style.display = "none"
        pauseBtn.style.display = "block"
        pauseBtn.style.boxShadow = "inset 5px 0px 7px black, inset -5px 0px 7px black"
    }

    const onPauseMusic = () => {
        pauseBtn.style.display = "none"
        playBtn.style.display = "block"
        playBtn.style.boxShadow = "none"
    }
    
    playBtn.addEventListener('click', (e) => {
        onPlayMusic();
        music.volume = 0.5;
        music.play()
        console.dir(music)
    }      
    );
    
    pauseBtn.addEventListener('click', () => {
        onPauseMusic();
        if(music.play()){
            music.pause()
            console.dir(music)
        }
    }
    );

    
    
    return divElement;
}

// !Todo Fix the button to be permanent when it changes the view 

let isPaused = Object.getPrototypeOf(music.paused);

if(!isPaused) {
    playBtn.style.display = "none"
    pauseBtn.style.display = "block"
    pauseBtn.style.boxShadow = "inset 5px 0px 7px black, inset -5px 0px 7px black"
}