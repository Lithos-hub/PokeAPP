import views from "../views/home/home.html";
import "../views/home/styles.scss";

// Images imports
import OAK from "../assets/img/oak.png";
import LOGO from "../assets/img/pokeapi.png";

export default () => {

    // Images assignments
    const oakimg = new Image();
    oakimg.src = OAK;

    const logoimg = new Image();
    logoimg.src = LOGO;
    
    // View creation
    const divElement = document.createElement('div');
    divElement.innerHTML = views;
    /************* */

    // Images creation
    
    const logoDIV = divElement.querySelector('.logo-image');
    logoDIV.appendChild(logoimg);
    
    const oakDIV = divElement.querySelector('.oak-image');
    oakDIV.appendChild(oakimg);
    
    
    const dialog = divElement.querySelector('.poke-dialog-text');
    const version = divElement.querySelector(".version")
    const gobtn = divElement.querySelector(".go-btn")

    gobtn.style.opacity = 0

        const text = "Welcome to the world of POKéMON! I'm Oak, the POKéMON professor. Enter when you are ready!"
        let i = 0;
        const speed = 40;

        function type() {
            if (i < text.length) {
                dialog.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed)
            }
            if(i === text.length) {
                gobtn.style.opacity = 1
            }
        }
        
        type()
    
    const majorVersion = 1
    const minorVersion = 1
    const patch = 0
        
    version.insertAdjacentText('afterbegin', `v. ${majorVersion}.${minorVersion}.${patch}`)

    return divElement;

}


