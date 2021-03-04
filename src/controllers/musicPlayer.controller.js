import musicPlayer from "../components/musicPlayer/musicPlayer.html"
import '../components/musicPlayer/styles.scss'


export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = musicPlayer;

    const playBtn = divElement.querySelector("#playBtn")
    const pauseBtn = divElement.querySelector("#pauseBtn")
    const music = divElement.querySelector("#music")


    // entering the app, the play button will be shown but not the pause button
    playBtn.style.display = "block"

    if(playBtn.style.display === "block") {
        pauseBtn.style.display = "none"
    }

    // Click options when press the play button
    playBtn.addEventListener('click', () => {
        pauseBtn.style.display = "block"
        playBtn.style.display = "none"
        music.volume = 0.5;
        music.play()
        }      
    );
    
    // Click options when press the pause button
    pauseBtn.addEventListener('click', () => {
        pauseBtn.style.display = "none"
        playBtn.style.display = "block"
        if(music.play()){
            music.pause()
        }
    }
    );

    return divElement;
}