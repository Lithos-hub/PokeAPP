import view from "../views/pokeapi/api.html";
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

const getPokesByID = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return await res.json();     
    } catch (error) {
        console.log(error)
    }
}

const getPokesByNAME = async (name) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
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

const getPokesEvoChains = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
        return await res.json();     
    } catch (error) {
        console.log(error)
    }
}


export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    
    const pokeList = divElement.querySelector('#pokeList')

    let start = 1
    let end = 150
    
    const pokeArr = []
    const speciesArr = []
    const evosArr = []
    
    // for loops to get info (each pokemon, each specie, each evolution chain, etc)

    for(let id = start; id <= end; id++) {
        const pokes = await getPokesByID(id);
        pokeArr.push(pokes)
    }

    for(let pokemon of pokeArr) {
        const species = await getPokesSpecies(pokemon.name)
        speciesArr.push(species)

    }

    
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    }
    
    const evoChainsArr = speciesArr.map((specie) => {
        let urlstring = "https://pokeapi.co/api/v2/evolution-chain/"
        let reg = new RegExp(escapeRegExp(urlstring), 'g')
        return { 
            pokename: specie.name, 
            evolves_from: specie.evolves_from_species,
            evochain: specie.evolution_chain.url, 
            evochain_id: parseInt(specie.evolution_chain.url.replace(reg, '').slice(0, -1))
        } 
    });
    
    for(let item of evoChainsArr) {
        
        if(item.evolves_from !== null){
            const last_evo = await getPokesByNAME(item.evolves_from.name)
            evosArr.push(last_evo)
        }
    }

    // const evolution_chains = evosArr.map((evochain) => {
    //     for(let evos of evochain.evolves_to) {
    //         let next_evo = evos;

    //         return {
    //             pokemon_name: evochain.species.name,
    //             next_evo: next_evo.species.name
    //         }
    //     }
    // })

    
    // for(let evo_info of evoChainsArr) {
        
        //     for(let specie of speciesArr){
            //         if(evo_info.pokename === specie.name) {
                //             const chain = await getPokesEvoChains(evo_info.evochain_id)
    //             evosArr.push(chain)
    //         }
    //         return;
    //     }
    
    //     return;
    
    // }
    
    
    
    
    console.log(pokeArr)
    
    console.log(speciesArr)
    
    console.log(evoChainsArr)
    
    console.log(evosArr)
    
    // console.log(evolution_chains)

    // const evolves_from = speciesArr.map((evo) => {
    //     return { baseform: evo.name, evolves_from: evo.evolves_from_species, evolves_to: ''}
    // })

    // speciesArr.forEach((pokemon, pokemonID) => {

    // });

    
    pokeArr.forEach((poke) => {

        let background = '';
        let second_background = '';
        let icon = '';
        let second_icon = '';
        let icon_color = '';
        let second_icon_color = '';

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
            <div class="col col-4 margin-cols">
                <div class="card-wrapper">
                    <div class="card-inner">

                            <div class="card" style="background-image: url(${background}); background-size: cover; background-position: center; background-repeat: no-repeat;">
                                <div class="card-id">
                                    <p class="card-id-number">
                                        #${poke.id.toString().padStart(3, '0')}
                                    </p>
                                </div>
                                    <div class="card-img">
                                        <img src="${poke.sprites.other.dream_world.front_default}" width="100%" height="130px" class="mt-3">
                                    </div>
                                        <div class="card-body">
                                            <div class="card-title mb-1">
                                                ${poke.name.charAt(0).toUpperCase() + poke.name.slice(1) }
                                            </div>
                                                    <ul style="list-style: none">
                                                    <li>
                                                    Main type:
                                                    </li>
                                                    <li class="mt-1">
                                                        <div class="type-icon" style="background: ${icon_color}; box-shadow: 0px 0px 20px ${icon_color};">
                                                            <img src="${icon}" width="30" height="30" style="margin: 20%">
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
                                    <div class="evolutions-row">

                                    </div>
                                    <div class="card-back-body-text">
                                        <h3 class="text-center mt-2 mb-2">Second type:</h3>
                                        <div class="type-icon" style="background: ${second_icon_color}; box-shadow: 0px 0px 20px ${second_icon_color};">
                                            <img src="${second_icon}" width="30" height="30" style="margin: 20%">
                                        </div>
                                        <p class="text-center mt-2">${poke.types[1] !== undefined ? poke.types[1].type.name.charAt(0).toUpperCase() + poke.types[1].type.name.slice(1) : 'No second type'}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        `;

    })

    /*

    <div class="evolutions-row">
            <div class="col-4 text-right">
            <img class="evo-img" src="${poke.sprites.versions['generation-v']['black-white'].animated.front_default}" width="auto" height="auto">
            </div>
            <div class="col-4 text-center">
                <i class="fas fa-arrow-right card-back-arrow"></i>
            </div>
            <div class="col-4 text-left">
            <img class="evo-img" src="${poke.sprites.versions['generation-v']['black-white'].animated.front_default}" width="auto" height="auto">
            </div>
    </div>

    */
    


    return divElement;


};
