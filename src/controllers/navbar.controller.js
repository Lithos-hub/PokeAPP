import navbar from "../components/navbar/navbar.html"
import '../components/navbar/styles.scss'

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
 } from './api.controller';

// Images imports
import BRAND from "../assets/img/app-logo.png";
import WEBPACKLOGO from "../assets/img/webpack.png";
import POKEDEX from "../assets/img/pokedex.png";


export default () => {

    const brandlogo = new Image();
    brandlogo.src = BRAND;

    const webpacklogo = new Image();
    webpacklogo.src = WEBPACKLOGO;

    const pokedexLogo = new Image();
    pokedexLogo.src = POKEDEX;

    const navbarElement = document.createElement('div')
    navbarElement.innerHTML = navbar

    const brandDiv = navbarElement.querySelector(".navbar-brand");
    const webpackLogoDiv = navbarElement.querySelector(".webpack-logo");

    const selectIcon = navbarElement.querySelector(".navbar-select-gen");
    const selectMenu = navbarElement.querySelector(".navbar-select-menu");

    selectIcon.append(pokedexLogo);

    const input_tag = navbarElement.querySelector('input');

    const nav_input_all = navbarElement.querySelector('.navbar-search-input')
    const nav_input_container = navbarElement.querySelector('.navbar-input-container');
    const nav_input_label = navbarElement.querySelector('.label-focus-off')

    nav_input_container.addEventListener('click', () => {
        nav_input_label.classList.toggle('navbar-focus-on');
        input_tag.classList.toggle('navbar-input-border-on');
        nav_input_label.classList.toggle('label-focus-on')
        input_tag.focus();
    })

    brandDiv.appendChild(brandlogo);
    webpackLogoDiv.appendChild(webpacklogo);
    
    selectMenu.style.display = "none";
    selectMenu.style.opacity = "0";
    selectMenu.style.height = "0rem";
    
    selectIcon.addEventListener('click', () => {
        if(selectMenu.style.opacity === "0") {
            selectMenu.style.display = "block";

            setTimeout(() => {
            selectMenu.style.opacity = "1";
            selectMenu.style.height = "15rem";
            selectMenu.style.transition = "all 0.7s ease-in-out";
            }, 200)
            
        } else {
            selectMenu.style.opacity = "0";
            selectMenu.style.height = "0rem";
            selectMenu.style.transition = "all 0.3s ease-in-out";
            setTimeout(() => {
                selectMenu.style.display = "none";
            }, 300)
        }
    })


    window.addEventListener('click', (e) => {
        if(!selectMenu.contains(e.target) && !navbarElement.contains(e.target)){
            selectMenu.style.opacity = "0";
            selectMenu.style.height = "0rem";
            selectMenu.style.transition = "all 0.2s ease-in-out";
            nav_input_label.classList.remove('navbar-focus-on')
            input_tag.classList.remove('navbar-input-border-on');
            nav_input_label.classList.remove('label-focus-on')
        }
        if(btn_first_gen.contains(e.target) ||
            btn_second_gen.contains(e.target) ||
            btn_third_gen.contains(e.target) ||
            btn_fourth_gen.contains(e.target) ||
            btn_fifth_gen.contains(e.target) ||
            btn_sixth_gen.contains(e.target) ||
            btn_seventh_gen.contains(e.target) ||
            btn_eighth_gen.contains(e.target)) 
           {
            selectMenu.style.opacity = "0";
            selectMenu.style.height = "0rem";
            selectMenu.style.transition = "all 0.3s ease-in-out";
            setTimeout(() => {
                selectMenu.style.display = "none";
            }, 300)
        }
    })



    if(window.location.hash === '#/about') {
        nav_input_all.style.display = "none"
    } else {
        nav_input_all.style.display = "block";
    }


    const btn_first_gen = navbarElement.querySelector('#btn-gen-1');
    const btn_second_gen = navbarElement.querySelector('#btn-gen-2');
    const btn_third_gen = navbarElement.querySelector('#btn-gen-3');
    const btn_fourth_gen = navbarElement.querySelector('#btn-gen-4');
    const btn_fifth_gen = navbarElement.querySelector('#btn-gen-5');
    const btn_sixth_gen = navbarElement.querySelector('#btn-gen-5');
    const btn_seventh_gen = navbarElement.querySelector('#btn-gen-6');
    const btn_eighth_gen = navbarElement.querySelector('#btn-gen-7');

    btn_first_gen.addEventListener('click', getFirstGen);
    btn_second_gen.addEventListener('click', getSecondGen);
    btn_third_gen.addEventListener('click', getThirdGen);
    btn_fourth_gen.addEventListener('click', getFourthGen);
    btn_fifth_gen.addEventListener('click', getFifthGen);
    btn_sixth_gen.addEventListener('click', getSixthGen);
    btn_seventh_gen.addEventListener('click', getSeventhGen);
    btn_eighth_gen.addEventListener('click', getEighthGen);

    let search_query = '';

    input_tag.addEventListener('input', (e) => {
        search_query = e.target.value;
    });
    
    document.addEventListener('keypress', (e) => {
        if(e.key === "Enter") {
            searchPokemon(search_query) 
            input_tag.value = '';
            nav_input_label.classList.remove('navbar-focus-on')
            input_tag.classList.remove('navbar-input-border-on');
            nav_input_label.classList.remove('label-focus-on')
            input_tag.blur();
        }
    });
                
    
    return navbarElement;
}

