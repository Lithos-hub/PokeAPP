import home from "../../mobile/home/home.html";
import "../../mobile/home/styles.scss";

import { version_data } from "../home.controller";

// Images
import LOGO from "../../assets/img/app-logo.png"


export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = home;

    const logo_img = new Image();

    logo_img.src = LOGO;

    const logo_div = divElement.querySelector('.mob-home-logo');
    logo_div.appendChild(logo_img);

    const version_div = divElement.querySelector('.mob-home-version');
    version_div.insertAdjacentText('afterbegin', `v. ${version_data.major}.${version_data.minor}.${version_data.patch}`);

    const border_btn = divElement.querySelector('.mob-btn-border');
    border_btn.style.animation = "rotate 2s linear infinite;"

    return divElement;
}
