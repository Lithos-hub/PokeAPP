import api from "../views/pokeapi/api.html";
import "../views/pokeapi/styles.scss";

// Backgrounds cards
import backgroundBUG from "../assets/img/bug.jpg";
import backgroundDARK from "../assets/img/dark.jpg";
import backgroundDRAGON from "../assets/img/dragon.jpg";
import backgroundELECTRIC from "../assets/img/electric.jpg";
import backgroundFAIRY from "../assets/img/fairy.jpg";
import backgroundFIGHTING from "../assets/img/fighting.jpg";
import backgroundFIRE from "../assets/img/fire.jpg";
import backgroundFLYING from "../assets/img/flying.jpg";
import backgroundGHOST from "../assets/img/ghost.jpg";
import backgroundGRASS from "../assets/img/grass.jpg";
import backgroundGROUND from "../assets/img/ground.jpg";
import backgroundICE from "../assets/img/ice.jpg";
import backgroundNORMAL from "../assets/img/normal.jpg";
import backgroundPOISON from "../assets/img/poison.jpg";
import backgroundPSYCHIC from "../assets/img/psychic.jpg";
import backgroundROCK from "../assets/img/rock.jpg";
import backgroundSTEEL from "../assets/img/steel.jpg";
import backgroundWATER from "../assets/img/water2.jpg";
import nobackground from "../assets/img/nobackground.jpg";

// Types icons
import iconBUG from "../assets/icons/bug.svg";
import iconDARK from "../assets/icons/dark.svg";
import iconDRAGON from "../assets/icons/dragon.svg";
import iconELECTRIC from "../assets/icons/electric.svg";
import iconFAIRY from "../assets/icons/fairy.svg";
import iconFIGHTING from "../assets/icons/fighting.svg";
import iconFIRE from "../assets/icons/fire.svg";
import iconFLYING from "../assets/icons/flying.svg";
import iconGHOST from "../assets/icons/ghost.svg";
import iconGRASS from "../assets/icons/grass.svg";
import iconGROUND from "../assets/icons/ground.svg";
import iconICE from "../assets/icons/ice.svg";
import iconNORMAL from "../assets/icons/normal.svg";
import iconPOISON from "../assets/icons/poison.svg";
import iconPSYCHIC from "../assets/icons/psychic.svg";
import iconROCK from "../assets/icons/rock.svg";
import iconSTEEL from "../assets/icons/steel.svg";
import iconWATER from "../assets/icons/water.svg";
import noicon from "../assets/icons/noicon.png";

// Import components
import { components } from "./index.js"


const begin_first_gen = 1
const end_fist_gen = 151

const begin_second_gen = 152
const end_second_gen = 251

const begin_third_gen = 252
const end_third_gen = 386

const begin_fourth_gen = 387
const end_fourth_gen = 493

const begin_fifth_gen = 494
const end_fifth_gen = 649

const begin_sixth_gen = 650
const end_sixth_gen = 721

const begin_seventh_gen = 722
const end_seventh_gen = 809

const begin_eighth_gen = 810
const end_eighth_gen = 893


const divElement = document.createElement('div');
divElement.innerHTML = api;

const manualUse = divElement.querySelector('.manual-use');

const pokeList = divElement.querySelector('#pokeList')

const pokeArr = [];

const showCards = async () => {
        
    for(let pokemon of pokeArr) {
        let species = await getPokesSpecies(pokemon.name)

        if(species === undefined) {
            species = {}
        } else {
            
            pokemon.flavor_text = species.flavor_text_entries[0] !== undefined ? species.flavor_text_entries[0].flavor_text : 'Description no available';
            
            pokemon.evolves_from = species.evolves_from_species !== null ? species.evolves_from_species.name : 'baseform';

            pokemon.is_legendary = species.is_legendary;
        }
    }

    pokeArr.forEach((poke) => {

        

        let background = '';
        let second_background = '';
        let icon = '';
        let second_icon = '';
        let icon_color = '';
        let second_icon_color = '';

        if(poke.flavor_text === undefined){
            return poke.flavor_text = 'Description no available'
        }

        switch(poke.types[0].type.name) {
            case "grass":
                background = backgroundGRASS;
                icon = iconGRASS;
                icon_color = "#5FBD58";
                break;
            case "fire":
                background = backgroundFIRE;
                icon = iconFIRE;
                icon_color = "#ff6a14";
                break;
            case "water":
                background = backgroundWATER;
                icon = iconWATER;
                icon_color = "#539DDF";
                break;
            case "bug":
                background = backgroundBUG;
                icon = iconBUG;
                icon_color = "#92BC2C";
                break;
            case "normal":
                background = backgroundNORMAL;
                icon = iconNORMAL;
                icon_color = "#D3CFB2";
                break;
            case "dark":
                background = backgroundDARK;
                icon = iconDARK;
                icon_color = "#595761";
                break;
            case "dragon":
                background = backgroundDRAGON;
                icon = iconDRAGON;
                icon_color = "#f7b331";
                break;
            case "fairy":
                background = backgroundFAIRY;
                icon = iconFAIRY;
                icon_color = "#ffadfa";
                break;
            case "fighting":
                background = backgroundFIGHTING;
                icon = iconFIGHTING;
                icon_color = "#D3425F";
                break;
            case "ghost":
                background = backgroundGHOST;
                icon = iconGHOST;
                icon_color = "#5F6DBC";
                break;
            case "ground":
                background = backgroundGROUND;
                icon = iconGROUND;
                icon_color = "#DA7C4D";
                break;
            case "ice":
                background = backgroundICE;
                icon = iconICE;
                icon_color = "#34d6ef";
                break;
            case "poison":
                background = backgroundPOISON;
                icon = iconPOISON;
                icon_color = "#B763CF";
                break;
            case "psychic":
                background = backgroundPSYCHIC;
                icon = iconPSYCHIC;
                icon_color = "#FA8581";
                break;
            case "rock":
                background = backgroundROCK;
                icon = iconROCK;
                icon_color = "#C9BB8A";
                break;
            case "steel":
                background = backgroundSTEEL;
                icon = iconSTEEL;
                icon_color = "#5695A3";
                break;
            case "flying":
                background = backgroundFLYING;
                icon = iconFLYING;
                icon_color = "#74b0cc";
                break;
            case "electric":
                background = backgroundELECTRIC;
                icon = iconELECTRIC;
                icon_color = "#e5cd34";
                break;
            default:
                background = nobackground;
        }

        if(poke.types[1] !== undefined) {
                switch(poke.types[1].type.name) {
                    case "grass":
                        second_background = backgroundGRASS;
                        second_icon = iconGRASS;
                        second_icon_color = "#5FBD58";
                        break;
                    case "fire":
                        second_background = backgroundFIRE;
                        second_icon = iconFIRE;
                        second_icon_color = "#ff6a14";
                        break;
                    case "water":
                        second_background = backgroundWATER;
                        second_icon = iconWATER;
                        second_icon_color = "#539DDF";
                        break;
                    case "bug":
                        second_background = backgroundBUG;
                        second_icon = iconBUG;
                        second_icon_color = "#92BC2C";
                        break;
                    case "normal":
                        second_background = backgroundNORMAL;
                        second_icon = iconNORMAL;
                        second_icon_color = "#D3CFB2";
                        break;
                    case "dark":
                        second_background = backgroundDARK;
                        second_icon = iconDARK;
                        second_icon_color = "#595761";
                        break;
                    case "dragon":
                        second_background = backgroundDRAGON;
                        second_icon = iconDRAGON;
                        second_icon_color = "#f7b331";
                        break;
                    case "fairy":
                        second_background = backgroundFAIRY;
                        second_icon = iconFAIRY;
                        second_icon_color = "#ffadfa";
                        break;
                    case "fighting":
                        second_background = backgroundFIGHTING;
                        second_icon = iconFIGHTING;
                        second_icon_color = "#D3425F";
                        break;
                    case "ghost":
                        second_background = backgroundGHOST;
                        second_icon = iconGHOST;
                        second_icon_color = "#5F6DBC";
                        break;
                    case "ground":
                        second_background = backgroundGROUND;
                        second_icon = iconGROUND;
                        second_icon_color = "#DA7C4D";
                        break;
                    case "ice":
                        second_background = backgroundICE;
                        second_icon = iconICE;
                        second_icon_color = "#34d6ef";
                        break;
                    case "poison":
                        second_background = backgroundPOISON;
                        second_icon = iconPOISON;
                        second_icon_color = "#B763CF";
                        break;
                    case "psychic":
                        second_background = backgroundPSYCHIC;
                        second_icon = iconPSYCHIC;
                        second_icon_color = "#FA8581";
                        break;
                    case "rock":
                        second_background = backgroundROCK;
                        second_icon = iconROCK;
                        second_icon_color = "#C9BB8A";
                        break;
                    case "steel":
                        second_background = backgroundSTEEL;
                        second_icon = iconSTEEL;
                        second_icon_color = "#5695A3";
                        break;
                    case "flying":
                        second_background = backgroundFLYING;
                        second_icon = iconFLYING;
                        second_icon_color = "#74b0cc";
                        break;
                    case "electric":
                        second_background = backgroundELECTRIC;
                        second_icon = iconELECTRIC;
                        second_icon_color = "#e5cd34";
                        break;
                    default:
                        background = nobackground;
                }
        } else {
            second_background = nobackground;
            second_icon = noicon;
            second_icon_color = 'transparent';
        }
        
            pokeList.innerHTML += `
            <div class="${pokeArr.length === 1 ? 'individual-card' : 'col col-4 margin-cols'}">
                <div class="card-wrapper">
                    <div class="card-inner">

                            <div class="card" style="background-image: url(${background}); background-size: cover; background-position: center; background-repeat: no-repeat;">
                                <div class="card-id">
                                    <p class="card-id-number">
                                        #${poke.id.toString().padStart(3, '0')}
                                    </p>
                                </div>
                                <div class="${poke.is_legendary ? 'badge-container' : 'no-badge-container'}">
                                    <div class="${poke.is_legendary ? 'is-legendary' : 'no-legendary'}"></div>
                                </div>
                                    <div class="card-img">
                                        <img src="${poke.sprites.other['official-artwork'].front_default}" class="front-img">
                                    </div>
                                        <div class="card-body">
                                            <div class="card-title mb-1">
                                                ${poke.name.charAt(0).toUpperCase() + poke.name.slice(1) }
                                            </div>
                                                    <ul class="text-center">
                                                    <li>
                                                    Main type:
                                                    </li>
                                                    <li class="mt-1">
                                                        <div class="type-icon" style="background: ${icon_color}; box-shadow: 0px 0px 20px ${icon_color};">
                                                            <img src="${icon}" class="type-innericon" style="margin: 20%">
                                                        </div>
                                                        <p class="text-center mt-1">${poke.types[0].type.name.charAt(0).toUpperCase() + poke.types[0].type.name.slice(1)}</p>
                                                    </li>
                                                    <li class="mt-2">
                                                        Weight: ${poke.weight / 10} Kg
                                                    </li>
                                                    <li>
                                                        Base experience: ${poke.base_experience}
                                                    </li>
                                        
                                                    </ul>
                                        </div>
 
                            </div>

                            <div class="card-back" style="background-image: url(${second_background}); background-size: cover; background-position: center; background-repeat: no-repeat;">
                                <div class="card-back-title">
                                ${poke.name.charAt(0).toUpperCase() + poke.name.slice(1) }
                                </div>
                                <div class="card-back-body">
                                    <div class="card-back-body-text">
                                        <h3 class="text-center mt-1 mb-1">Secondary type:</h3>
                                        <p>${poke.types[1] !== undefined ? '' : 'No secondary type'}</p>
                                        <div class="type-icon" style="background: ${second_icon_color}; box-shadow: 0px 0px 20px ${second_icon_color};">
                                            <img src="${second_icon}" class="type-innericon" style="margin: 20%">
                                        </div>
                                        <p class="text-center mt-1">${poke.types[1] !== undefined ? poke.types[1].type.name.charAt(0).toUpperCase() + poke.types[1].type.name.slice(1) : ''}</p>
                                    </div>
                                    <img class="sprite-img mt-1" src="${poke.sprites.versions['generation-v']['black-white'].animated.front_default}" width="auto" height="auto">
                                    <div class="flavor-text">
                                        ${poke.flavor_text.includes('') ? poke.flavor_text.replace('', ' ') : poke.flavor_text}
                                    </div> 
                                    <div class="stats-text">
                                        <div class="d-flex justify-between mt-1">
                                                
                                                    <ul class="text-center">
                                                        <li>${poke.stats[0].stat.name.toUpperCase()}</li>
                                                        <li>${poke.stats[0].base_stat}</li>
                                                    </ul>
                                                
                                                
                                                    <ul class="text-center">
                                                        <li>${poke.stats[1].stat.name.toUpperCase()}</li>
                                                        <li>${poke.stats[1].base_stat}</li>
                                                    </ul>
                                                
                                                
                                                    <ul class="text-center">
                                                        <li>${poke.stats[2].stat.name.toUpperCase()}</li>
                                                        <li>${poke.stats[2].base_stat}</li>
                                                    </ul>
                                                
                                        </div>
                                        <div class="d-flex justify-between mt-1">
                            
                                                    <ul class="text-center">
                                                        <li>${poke.stats[3].stat.name.toUpperCase()}</li>
                                                        <li>${poke.stats[3].base_stat}</li>
                                                    </ul>
                            
                            
                                                    <ul class="text-center">
                                                        <li>${poke.stats[4].stat.name.toUpperCase()}</li>
                                                        <li>${poke.stats[4].base_stat}</li>
                                                    </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        `;

        hideLoader();

        })

    
    return divElement;

}

    const getPokeByName = async (pokemon_name) => {
        manualUse.style.display = "none";
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);
            return await res.json();     
        } catch (error) {
            console.log(error)
        }
    }

    const getPokesByID = async (id) => {
        manualUse.style.display = "none";
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            return await res.json();     
        } catch (error) {
            console.log(error)
        }
    }

    const getPokesSpecies = async (name) => {
        manualUse.style.display = "none";
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
            return await res.json();     
        } catch (error) {
            console.log(error)
        }
    }

    // Loader
    const loaderComponent = document.querySelector("#loaderDIV")

    function showLoader() {
        manualUse.style.display = "none"
        loaderComponent.appendChild(components.loader())
    }

    function hideLoader() {
        loaderComponent.innerHTML = '';
    }

    const getFirstGen = async() => {

        showLoader();
        cleanArr();

        for(let id = begin_first_gen; id <= end_fist_gen; id++) {
            const pokes = await getPokesByID(id);
            pokeArr.push(pokes)
        }
        await showCards();
    }


    const getSecondGen = async () => {

        showLoader();    
        cleanArr();

        for(let id = begin_second_gen; id <= end_second_gen; id++) {
            const pokes = await getPokesByID(id);
            pokeArr.push(pokes)
        }
        await showCards();
    }
    
    const getThirdGen = async () => {

        showLoader();  
        cleanArr();

        for(let id = begin_third_gen; id <= end_third_gen; id++) {
            const pokes = await getPokesByID(id);
            pokeArr.push(pokes)
        }
        await showCards();
    }

    const getFourthGen = async () => {

        showLoader();
        cleanArr();

        for(let id = begin_fourth_gen; id <= end_fourth_gen; id++) {
            const pokes = await getPokesByID(id);
            pokeArr.push(pokes)
        }
        await showCards();
    }

    const getFifthGen = async () => {

        showLoader();
        cleanArr();

        for(let id = begin_fifth_gen; id <= end_fifth_gen; id++) {
            const pokes = await getPokesByID(id);
            pokeArr.push(pokes)
        }
        await showCards();
    }

    const getSixthGen = async () => {

        showLoader();
        cleanArr();

        for(let id = begin_sixth_gen; id <= end_sixth_gen; id++) {
            const pokes = await getPokesByID(id);
            pokeArr.push(pokes)
        }
        await showCards();
    }

    const getSeventhGen = async () => {

        showLoader();
        cleanArr();

        for(let id = begin_seventh_gen; id <= end_seventh_gen; id++) {
            const pokes = await getPokesByID(id);
            pokeArr.push(pokes)
        }
        await showCards();
    }

    const getEighthGen = async () => {

        showLoader();
        cleanArr();

        for(let id = begin_eighth_gen; id <= end_eighth_gen; id++) {
            const pokes = await getPokesByID(id);
            pokeArr.push(pokes)
        }
        await showCards();
    }

    window.addEventListener('hashchange', () => {
        if(window.location.hash === "#/app") {
            manualUse.style.display = "block";
            cleanArr();
        }
    })

    const searchPokemon = async (pokemon_name) => {

        cleanArr();

        try {

            const query = pokemon_name.toLowerCase().trim();
            
            const poke = await getPokeByName(query);

            pokeArr.push(poke);
            
            await showCards();
            
        } catch (error) {
            console.log(error)
            alert("That pokémon doesn't exists!")
        }
    }

    const cleanArr = () => {
        pokeList.innerHTML = '';
        pokeArr.length = 0;
    }

export { 
    showCards, 
    getFirstGen,
    getSecondGen,
    getThirdGen,
    getFourthGen,
    getFifthGen,
    getSixthGen,
    getSeventhGen,
    getEighthGen,
    searchPokemon };