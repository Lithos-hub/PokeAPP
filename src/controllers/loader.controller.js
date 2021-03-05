import loader from "../components/loader/loader.html"
import "../components/loader/styles.scss"

import POKEBALL from "../assets/img/pokeball.png";

export default () => {
    const loaderDiv = document.createElement('div');
    loaderDiv.innerHTML = loader;

    const pokeball = new Image();

    pokeball.src = POKEBALL;

    const spinner = loaderDiv.querySelector('.spinner');
    spinner.appendChild(pokeball);


    return loaderDiv;
}