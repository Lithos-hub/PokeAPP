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
    searchPokemon,
    getPokesByID
 } from './api.controller';

// Images imports
import BRAND from "../assets/img/app-logo.png";
import WEBPACKLOGO from "../assets/img/webpack.png";
import POKEDEX from "../assets/img/pokedex.png";

export default () => {

    // Selectors || variables

    const brandlogo = new Image();
    brandlogo.src = BRAND;

    const webpacklogo = new Image();
    webpacklogo.src = WEBPACKLOGO;

    const pokedexLogo = new Image();
    pokedexLogo.src = POKEDEX;

    const navbarElement = document.createElement('div');
    navbarElement.innerHTML = navbar

    const brandDiv = navbarElement.querySelector(".navbar-brand");
    const webpackLogoDiv = navbarElement.querySelector(".webpack-logo");
    
    const selectIcon = navbarElement.querySelector(".navbar-select-gen");
    const selectMenu = navbarElement.querySelector(".navbar-select-menu");

    const input_tag = navbarElement.querySelector('input');

    const nav_input_all = navbarElement.querySelector('.navbar-search-input');
    const nav_input_container = navbarElement.querySelector('.navbar-input-container');
    const nav_input_label = navbarElement.querySelector('.label-focus-off');

    const dropdown_container = navbarElement.querySelector('.navbar-input-dropdown');

    const first_pokemon_id = 1;
    const last_pokemon_id = 809;

    const names = [];

    const btn_first_gen = navbarElement.querySelector('#btn-gen-1');
    const btn_second_gen = navbarElement.querySelector('#btn-gen-2');
    const btn_third_gen = navbarElement.querySelector('#btn-gen-3');
    const btn_fourth_gen = navbarElement.querySelector('#btn-gen-4');
    const btn_fifth_gen = navbarElement.querySelector('#btn-gen-5');
    const btn_sixth_gen = navbarElement.querySelector('#btn-gen-5');
    const btn_seventh_gen = navbarElement.querySelector('#btn-gen-6');
    const btn_eighth_gen = navbarElement.querySelector('#btn-gen-7');

    let search_query = '';
    let dropdown_query = '';
    let filtered_pokemon = [];

    brandDiv.appendChild(brandlogo);
    webpackLogoDiv.appendChild(webpacklogo);
    selectIcon.appendChild(pokedexLogo);

    // Styles

    selectMenu.style.display = "none";
    selectMenu.style.opacity = "0";
    selectMenu.style.height = "0rem";

    dropdown_container.style.display = "none";

    // Functions

    const getNames = async () => {
        for(let id = first_pokemon_id; id <= last_pokemon_id; id++) {
            //! The API call get an error with the Pokémon with ID 44 (only with that), so I' had to skip it out of the loop. I'll fix this in the future.
            if(id !== 44){
                const pokes = await getPokesByID(id);
                const pokemon = {
                        name: pokes.name,
                        img: pokes.sprites.other['official-artwork'].front_default
                    }
                    names.push(pokemon);
            }
        }
    }

    getNames();    

    const showSelectmenu = () => {
        selectMenu.style.display = "block";

        setTimeout(() => {
        selectMenu.style.opacity = "1";
        selectMenu.style.height = "15rem";
        selectMenu.style.transition = "all 0.7s ease-in-out";
        }, 200)
    }

    const hideSelectmenu = () => {
        selectMenu.style.opacity = "0";
        selectMenu.style.height = "0rem";
        selectMenu.style.transition = "all 0.3s ease-in-out";
        setTimeout(() => {
            selectMenu.style.display = "none";
        }, 300)
    }

    const focusInput = () => {
        nav_input_label.classList.toggle('navbar-focus-on');
        input_tag.classList.toggle('navbar-input-border-on');
        nav_input_label.classList.toggle('label-focus-on')
        input_tag.focus();
    }

    const blurInput = () => {
        nav_input_label.classList.remove('navbar-focus-on')
        input_tag.classList.remove('navbar-input-border-on');
        nav_input_label.classList.remove('label-focus-on');
        input_tag.value = '';
        input_tag.blur();
    }

    const hideDropdown = () => {
        dropdown_container.style.display = "none";
        dropdown_container.innerHTML = '';
    }

    const cleanArr = () => {
        input_tag.value = '';
        search_query = '';
    }

    // Events

    nav_input_container.addEventListener('click', () => {
        focusInput();
    })

    selectIcon.addEventListener('click', () => {
        if(selectMenu.style.opacity === "0") {
            showSelectmenu();
        } else {
            hideSelectmenu();
        }
    })


    window.addEventListener('click', (e) => {
        if(!selectMenu.contains(e.target) && !navbarElement.contains(e.target)){
            hideSelectmenu();
            blurInput();
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
            hideSelectmenu();
        }
    })

    input_tag.addEventListener('input', (e) => {
        dropdown_query = e.target.value;
        filtered_pokemon = names.filter(poke => poke.name.includes(dropdown_query));

        if(input_tag.value) {
            dropdown_container.style.display = "block";
            dropdown_container.innerHTML = '';

            for(let pokemon of filtered_pokemon) {
                    dropdown_container.innerHTML += `
                    
                    <div class="navbar-dropdown-item" data-value=${pokemon !== undefined ? pokemon.name : 'Error from database'}>
                        <div class="dropdown-left-col">
                            <img src="${pokemon !== undefined ? pokemon.img : '' }" class="dropdown-img">
                        </div>
                        <div class="dropdown-right-col">
                            ${pokemon !== undefined ? pokemon.name : 'Error from database'}
                        </div>
                    </div>
                    `;
                }

            if(dropdown_container.hasChildNodes) {
                for(let item of dropdown_container.children){
                    item.addEventListener('click', () => {
                        let poke_name = item.getAttribute('data-value');
                        searchPokemon(poke_name) 
                        hideDropdown();
                        blurInput();
                    })
                }
            }

        } else {
            hideDropdown();
        }

        console.log(filtered_pokemon)
    });


    input_tag.addEventListener('input', (e) => {
        search_query = e.target.value;
    });

    navbarElement.addEventListener('keypress', (e) => {
        if(e.key === "Enter") {
            searchPokemon(search_query) 
            blurInput();
            hideDropdown();
            cleanArr();
        }
    });

    btn_first_gen.addEventListener('click', getFirstGen);
    btn_second_gen.addEventListener('click', getSecondGen);
    btn_third_gen.addEventListener('click', getThirdGen);
    btn_fourth_gen.addEventListener('click', getFourthGen);
    btn_fifth_gen.addEventListener('click', getFifthGen);
    btn_sixth_gen.addEventListener('click', getSixthGen);
    btn_seventh_gen.addEventListener('click', getSeventhGen);
    btn_eighth_gen.addEventListener('click', getEighthGen);

    if(window.location.hash !== "#/app") {
        nav_input_all.style.display = "none"
        cleanArr();
    }


  
    
    return navbarElement;
}