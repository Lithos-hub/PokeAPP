import mob_pokeapi from "../../mobile/pokeapi/api.html";
import "../../mobile/pokeapi/styles.scss";


// Types icons
import iconBUG from "../../assets/icons/bug.svg";
import iconDARK from "../../assets/icons/dark.svg";
import iconDRAGON from "../../assets/icons/dragon.svg";
import iconELECTRIC from "../../assets/icons/electric.svg";
import iconFAIRY from "../../assets/icons/fairy.svg";
import iconFIGHTING from "../../assets/icons/fighting.svg";
import iconFIRE from "../../assets/icons/fire.svg";
import iconFLYING from "../../assets/icons/flying.svg";
import iconGHOST from "../../assets/icons/ghost.svg";
import iconGRASS from "../../assets/icons/grass.svg";
import iconGROUND from "../../assets/icons/ground.svg";
import iconICE from "../../assets/icons/ice.svg";
import iconNORMAL from "../../assets/icons/normal.svg";
import iconPOISON from "../../assets/icons/poison.svg";
import iconPSYCHIC from "../../assets/icons/psychic.svg";
import iconROCK from "../../assets/icons/rock.svg";
import iconSTEEL from "../../assets/icons/steel.svg";
import iconWATER from "../../assets/icons/water.svg";
import noicon from "../../assets/icons/noicon.png";

const begin_first_gen = 1
const end_fist_gen = 151

const getPokesByID = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return await res.json();     
    } catch (error) {
        console.log(error)
    }
}

const getPokesSpecies = async (name) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
        return await res.json();     
    } catch (error) {
        console.log(error)
    }
}

export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = mob_pokeapi;

    const pokeList = divElement.querySelector('#mob-pokeList');

    let pokeArr = [];

        const getFirstGen = async () => {
            pokeList.innerHTML = '';
            pokeArr.length = 0;
            for(let id = begin_first_gen; id <= end_fist_gen; id++) {
                const pokes = await getPokesByID(id);
                pokeArr.push(pokes)
            }
            await paint_cards();
        }

        getFirstGen();


        const paint_cards = async () => {

            console.log(pokeArr)
        
            for(let pokemon of pokeArr) {
                let species = await getPokesSpecies(pokemon.name)
        
                if(species === undefined) {
                    species = {}
                } else {
                    
                    pokemon.flavor_text = species.flavor_text_entries[0] !== undefined ? species.flavor_text_entries[0].flavor_text : 'Description no available';
                    
                    pokemon.evolves_from = species.evolves_from_species !== null ? species.evolves_from_species.name : 'baseform';
                }
            }
        
            pokeArr.forEach((poke) => {
        
                // let background = '';
                // let second_background = '';
                let icon = '';
                let second_icon = '';
                let icon_color = '';
                let second_icon_color = '';
        
                if(poke.flavor_text === undefined){
                    return poke.flavor_text = 'Description no available'
                }
        
                switch(poke.types[0].type.name) {
                    case "grass":
                        // background = backgroundGRASS;
                        icon = iconGRASS;
                        icon_color = "#5FBD58";
                        break;
                    case "fire":
                        // background = backgroundFIRE;
                        icon = iconFIRE;
                        icon_color = "#ff6a14";
                        break;
                    case "water":
                        // background = backgroundWATER;
                        icon = iconWATER;
                        icon_color = "#539DDF";
                        break;
                    case "bug":
                        // background = backgroundBUG;
                        icon = iconBUG;
                        icon_color = "#92BC2C";
                        break;
                    case "normal":
                        // background = backgroundNORMAL;
                        icon = iconNORMAL;
                        icon_color = "#D3CFB2";
                        break;
                    case "dark":
                        // background = backgroundDARK;
                        icon = iconDARK;
                        icon_color = "#595761";
                        break;
                    case "dragon":
                        // background = backgroundDRAGON;
                        icon = iconDRAGON;
                        icon_color = "#f7b331";
                        break;
                    case "fairy":
                        // background = backgroundFAIRY;
                        icon = iconFAIRY;
                        icon_color = "#ffadfa";
                        break;
                    case "fighting":
                        // background = backgroundFIGHTING;
                        icon = iconFIGHTING;
                        icon_color = "#D3425F";
                        break;
                    case "ghost":
                        // background = backgroundGHOST;
                        icon = iconGHOST;
                        icon_color = "#5F6DBC";
                        break;
                    case "ground":
                        // background = backgroundGROUND;
                        icon = iconGROUND;
                        icon_color = "#DA7C4D";
                        break;
                    case "ice":
                        // background = backgroundICE;
                        icon = iconICE;
                        icon_color = "#34d6ef";
                        break;
                    case "poison":
                        // background = backgroundPOISON;
                        icon = iconPOISON;
                        icon_color = "#B763CF";
                        break;
                    case "psychic":
                        // background = backgroundPSYCHIC;
                        icon = iconPSYCHIC;
                        icon_color = "#FA8581";
                        break;
                    case "rock":
                        // background = backgroundROCK;
                        icon = iconROCK;
                        icon_color = "#C9BB8A";
                        break;
                    case "steel":
                        // background = backgroundSTEEL;
                        icon = iconSTEEL;
                        icon_color = "#5695A3";
                        break;
                    case "flying":
                        // background = backgroundFLYING;
                        icon = iconFLYING;
                        icon_color = "#74b0cc";
                        break;
                    case "electric":
                        // background = backgroundELECTRIC;
                        icon = iconELECTRIC;
                        icon_color = "#e5cd34";
                        break;
                    default:
                        // background = nobackground;
                }
        
                if(poke.types[1] !== undefined) {
                        switch(poke.types[1].type.name) {
                            case "grass":
                                // second_background = backgroundGRASS;
                                second_icon = iconGRASS;
                                second_icon_color = "#5FBD58";
                                break;
                            case "fire":
                                // second_background = backgroundFIRE;
                                second_icon = iconFIRE;
                                second_icon_color = "#ff6a14";
                                break;
                            case "water":
                                // second_background = backgroundWATER;
                                second_icon = iconWATER;
                                second_icon_color = "#539DDF";
                                break;
                            case "bug":
                                // second_background = backgroundBUG;
                                second_icon = iconBUG;
                                second_icon_color = "#92BC2C";
                                break;
                            case "normal":
                                // second_background = backgroundNORMAL;
                                second_icon = iconNORMAL;
                                second_icon_color = "#D3CFB2";
                                break;
                            case "dark":
                                // second_background = backgroundDARK;
                                second_icon = iconDARK;
                                second_icon_color = "#595761";
                                break;
                            case "dragon":
                                // second_background = backgroundDRAGON;
                                second_icon = iconDRAGON;
                                second_icon_color = "#f7b331";
                                break;
                            case "fairy":
                                // second_background = backgroundFAIRY;
                                second_icon = iconFAIRY;
                                second_icon_color = "#ffadfa";
                                break;
                            case "fighting":
                                // second_background = backgroundFIGHTING;
                                second_icon = iconFIGHTING;
                                second_icon_color = "#D3425F";
                                break;
                            case "ghost":
                                // second_background = backgroundGHOST;
                                second_icon = iconGHOST;
                                second_icon_color = "#5F6DBC";
                                break;
                            case "ground":
                                // second_background = backgroundGROUND;
                                second_icon = iconGROUND;
                                second_icon_color = "#DA7C4D";
                                break;
                            case "ice":
                                // second_background = backgroundICE;
                                second_icon = iconICE;
                                second_icon_color = "#34d6ef";
                                break;
                            case "poison":
                                // second_background = backgroundPOISON;
                                second_icon = iconPOISON;
                                second_icon_color = "#B763CF";
                                break;
                            case "psychic":
                                // second_background = backgroundPSYCHIC;
                                second_icon = iconPSYCHIC;
                                second_icon_color = "#FA8581";
                                break;
                            case "rock":
                                // second_background = backgroundROCK;
                                second_icon = iconROCK;
                                second_icon_color = "#C9BB8A";
                                break;
                            case "steel":
                                // second_background = backgroundSTEEL;
                                second_icon = iconSTEEL;
                                second_icon_color = "#5695A3";
                                break;
                            case "flying":
                                // second_background = backgroundFLYING;
                                second_icon = iconFLYING;
                                second_icon_color = "#74b0cc";
                                break;
                            case "electric":
                                // second_background = backgroundELECTRIC;
                                second_icon = iconELECTRIC;
                                second_icon_color = "#e5cd34";
                                break;
                            default:
                                // background = nobackground;
                        }
                } else {
                    // second_background = nobackground;
                    second_icon = noicon;
                    second_icon_color = 'transparent';
                }
                
                    pokeList.innerHTML += `
                    <div class="mobile-poke-list-item">
                        <div class="col-3 middle text-left">
                                    <img src="${poke.sprites.other['official-artwork'].front_default}" class="mob-poke-img">
                        </div>
                        <div class="col-3 middle text-center">
                                <div class="mob-poke-id">
                                    #${poke.id.toString().padStart(3, '0')}
                                </div>
                                <div class="mob-poke-name">
                                    ${poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                                </div>
                                <div class="mob-info-btn-container">
                                    <button class="mob-info-btn" type="button">Read more</button>
                                </div>
                        </div>
                        <div class="col-3 text-center  mob-poke-type">
                                <div class="mob-type-icon" style="background: ${icon_color}; box-shadow: 0px 0px 20px ${icon_color};">
                                    <img src="${icon}" class="mob-type-innericon middle" style="margin: 20%">
                                </div>

                        </div>
                        <div class="col-3 middle mob-poke-flavor-text">
                                    ${poke.flavor_text.includes('') ? poke.flavor_text.replace('', ' ') : poke.flavor_text}
                        </div>
                    </div>
                `;
        
            })
        
            return pokeList;
        
        }
        

    return divElement;
}