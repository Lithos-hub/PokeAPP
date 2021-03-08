import loader from "../components/loader/loader.html"
import "../components/loader/styles.scss"

import POKEBALL_a from "../assets/img/pokeball.png";
import POKEBALL_b from "../assets/img/pokeball.png";
import POKEBALL_c from "../assets/img/pokeball.png";
import POKEBALL_d from "../assets/img/pokeball.png";

export default () => {
    const loaderDiv = document.createElement('div');
    loaderDiv.innerHTML = loader;

    const pokeball_a = new Image();
    const pokeball_b = new Image();
    const pokeball_c = new Image();
    const pokeball_d = new Image();

    pokeball_a.src = POKEBALL_a;
    pokeball_b.src = POKEBALL_b;
    pokeball_c.src = POKEBALL_c;
    pokeball_d.src = POKEBALL_d;

    const spinner_a = loaderDiv.querySelector('.spinner-a');
    spinner_a.appendChild(pokeball_a)

    const spinner_b = loaderDiv.querySelector('.spinner-b');
    spinner_b.appendChild(pokeball_b)

    const spinner_c = loaderDiv.querySelector('.spinner-c');
    spinner_c.appendChild(pokeball_c)
    
    const spinner_d = loaderDiv.querySelector('.spinner-d');
    spinner_d.appendChild(pokeball_d)
    


    return loaderDiv;
}