import loader from "../../components/mobile/loader/loader.html";
import "../../components/mobile/loader/styles.scss";

import POKEGIF from "../../assets/img/charmander.gif";

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = loader;

    const poke_gif = new Image ();

    poke_gif.src = POKEGIF;

    const poke_gif_div = divElement.querySelector('.mob-loader-pokegif');
    poke_gif_div.appendChild(poke_gif);


    return divElement;
}