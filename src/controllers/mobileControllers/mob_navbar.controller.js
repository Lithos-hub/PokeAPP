import mob_navbar from "../../components/mobile/navbar/navbar.html";
import "../../components/mobile/navbar/styles.scss";

import POKEBALL from "../../assets/img/pokeball.png";
import BRANDLOGO from "../../assets/img/app-logobar.jpg"

export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = mob_navbar;

    const main_background = document.querySelector('.mobile-main-background');
    main_background.style.marginTop = "3.5rem";

    const input_element = divElement.querySelector('.input-search-container');
    const input_html = divElement.querySelector('input')
    const input_label = divElement.querySelector('#input-label');

    const sideMenu = divElement.querySelector('.side-menu');
    const menuIcon = divElement.querySelector('#menu-btn')

    const sideMenuContent = divElement.querySelector('.side-menu-content');
    sideMenuContent.style.display = "none";

    const sideMenuImg = document.createElement('img');
    sideMenuImg.src = BRANDLOGO;
    const brandlogo = divElement.querySelector('.brand-logo');

    sideMenuImg.classList.add('side-menu-img')

    brandlogo.append(sideMenuImg);
    
    menuIcon.addEventListener('click', () => {
        console.log("click!")
        sideMenu.classList.add('side-menu-opened')
        sideMenuContent.style.display = "block";
    })

    const poke_img = document.createElement('img');
    poke_img.src = POKEBALL;

    poke_img.classList.add('input-search-img');

    input_element.append(poke_img);

    input_element.addEventListener('click', () => {
        input_label.classList.toggle('focus-on');
        input_element.classList.toggle('border-on');
        poke_img.classList.toggle('input-search-img-animation')
        input_html.focus();

    })

    main_background.addEventListener('click', () => {
        input_html.value = '';
        if(input_label.classList.contains('focus-on')) {
            input_label.classList.remove('focus-on');
            input_element.classList.remove('border-on');
            poke_img.classList.remove('input-search-img-animation')
            input_html.blur();
        }
        if(sideMenu.classList.contains('side-menu-opened')) {
            sideMenu.classList.remove('side-menu-opened')
            sideMenuContent.style.display = "none";

        }
    })

    return divElement;
}