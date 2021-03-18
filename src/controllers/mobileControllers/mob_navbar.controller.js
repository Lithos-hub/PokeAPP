import mob_navbar from "../../components/mobile/navbar/navbar.html";
import "../../components/mobile/navbar/styles.scss";

import POKEBALL from "../../assets/img/pokeball.png";
import BRANDLOGO from "../../assets/img/app-logobar.jpg"


import {
    getFirstGen,
    getSecondGen,
    getThirdGen,
    getFourthGen,
    getFifthGen,
    getSixthGen,
    getSeventhGen,
    getEighthGen,
    searchPokemon
 } from './mob_api.controller';

export default () => {

    // Selectors | Variables

    const mobNavbarElement = document.createElement('div')
    mobNavbarElement.innerHTML = mob_navbar;

    const main_background = document.querySelector('.mobile-main-background');

    const input_element = mobNavbarElement.querySelector('.input-search-container');
    const input_html = mobNavbarElement.querySelector('input')
    const input_label = mobNavbarElement.querySelector('#input-label');

    const sideMenu = mobNavbarElement.querySelector('.side-menu');
    const menuIcon = mobNavbarElement.querySelector('#menu-btn')

    const selectMenu = mobNavbarElement.querySelector('.select-menu');
    const selectIcon = mobNavbarElement.querySelector('#select-btn');

    const sideMenuContent = mobNavbarElement.querySelector('.side-menu-content');

    const sideMenuImg = document.createElement('img');
    sideMenuImg.src = BRANDLOGO;

    const brandlogo = mobNavbarElement.querySelector('.brand-logo');

    sideMenuImg.classList.add('side-menu-img')
    
    brandlogo.append(sideMenuImg);

    const poke_img = document.createElement('img');
    poke_img.src = POKEBALL;

    poke_img.classList.add('input-search-img');

    input_element.append(poke_img);

    const link_app = mobNavbarElement.querySelector('.side-menu-app-link');

    const link_about = mobNavbarElement.querySelector('.side-menu-about-link');

    let search_query = '';

    const button_first_gen = mobNavbarElement.querySelector('#mob-btn-gen-1')
    const button_second_gen = mobNavbarElement.querySelector('#mob-btn-gen-2')
    const button_third_gen = mobNavbarElement.querySelector('#mob-btn-gen-3')
    const button_fourth_gen = mobNavbarElement.querySelector('#mob-btn-gen-4')
    const button_fifth_gen = mobNavbarElement.querySelector('#mob-btn-gen-5')
    const button_sixth_gen = mobNavbarElement.querySelector('#mob-btn-gen-6')
    const button_seventh_gen = mobNavbarElement.querySelector('#mob-btn-gen-7')
    const button_eighth_gen = mobNavbarElement.querySelector('#mob-btn-gen-8')

    // Styles

    main_background.style.marginTop = "3.5rem";
    sideMenuContent.style.display = "none";

    sideMenu.style.opacity = "0";
    sideMenu.style.width = "0rem";

    selectMenu.style.display = "none";
    selectMenu.style.opacity = "0";
    selectMenu.style.height = "0rem";

    // Functions

    const showSidemenu = () => {
        sideMenu.style.opacity = "1";
        sideMenu.style.width = "12rem";
        sideMenu.style.transition = "all 0.3s ease-in-out";
        sideMenuContent.style.display = "block";
    }

    const hideSidemenu = () => {
        sideMenu.style.opacity = "0";
        sideMenu.style.width = "0rem";
        sideMenu.style.transition = "all 0.3s ease-in-out";
    }

    const showSelectmenu = () => {
        selectMenu.style.display = "block";

        setTimeout(() => {
        selectMenu.style.opacity = "1";
        selectMenu.style.height = "15rem";
        selectMenu.style.transition = "all 0.5s ease-in-out";
        }, 50)
        
    }

    const hideSelectmenu = () => {
        selectMenu.style.opacity = "0";
        selectMenu.style.height = "0rem";
        selectMenu.style.transition = "all 0.5s ease-in-out";
        setTimeout(() => {
            selectMenu.style.display = "none";
        }, 500)
    }

    const focusInput = () => {
        input_label.classList.toggle('focus-on');
        input_element.classList.toggle('mob-navbar-input-border-on');
        poke_img.classList.toggle('input-search-img-animation')
        input_html.focus();
    }

    const blurInput = () => {
        input_element.classList.remove('mob-navbar-input-border-on');
        poke_img.classList.remove('input-search-img-animation');
        input_label.classList.remove('navbar-focus-on')
        input_label.classList.remove('focus-on');
        input_html.classList.remove('navbar-input-border-on');
        input_html.blur();
        input_html.value = '';
    }

    const cleanArr = () => {
        input_html.value = '';
        search_query = '';
    }

    // Events

    menuIcon.addEventListener('click', () => {
        if(sideMenu.style.opacity === "0") {
            showSidemenu();
        } else {
            hideSidemenu();
        }
    })
    
    selectIcon.addEventListener('click', () => {
        if(selectMenu.style.opacity === "0") {
            showSelectmenu();
        } else {
            hideSelectmenu();
        }
    })

    input_element.addEventListener('click', () => {
        focusInput();
    })

    window.addEventListener('click', (e) => {
        if(!selectMenu.contains(e.target) && !mobNavbarElement.contains(e.target)){
            hideSelectmenu();
            blurInput();
        }
        if(!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            hideSidemenu();
        }
        if( button_first_gen.contains(e.target) ||
            button_second_gen.contains(e.target) ||
            button_third_gen.contains(e.target) ||
            button_fourth_gen.contains(e.target) ||
            button_fifth_gen.contains(e.target) ||
            button_sixth_gen.contains(e.target) ||
            button_seventh_gen.contains(e.target) ||
            button_eighth_gen.contains(e.target)) 
           {
            hideSelectmenu();
        }
    })

    link_app.addEventListener('click', hideSidemenu)
    
    link_about.addEventListener('click', hideSidemenu)

    button_first_gen.addEventListener('click', getFirstGen);
    button_second_gen.addEventListener('click', getSecondGen);
    button_third_gen.addEventListener('click', getThirdGen);
    button_fourth_gen.addEventListener('click', getFourthGen);
    button_fifth_gen.addEventListener('click', getFifthGen);
    button_sixth_gen.addEventListener('click', getSixthGen);
    button_seventh_gen.addEventListener('click', getSeventhGen);
    button_eighth_gen.addEventListener('click', getEighthGen);

    input_html.addEventListener('input', (e) => {
        search_query = e.target.value;
    });

    mobNavbarElement.addEventListener('keypress', (e) => {
        if(e.key === "Enter" && search_query.length) {
            searchPokemon(search_query) 
            blurInput();
        }
    });


    if(window.location.hash !== "#/app") {
        input_element.style.display = "none"
        selectIcon.style.display = "none";
        cleanArr();
    }

    return mobNavbarElement;
}