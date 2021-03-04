import view from "../views/pokeapi/api.html";
import "../views/pokeapi/styles.scss"

// Backgrounds card
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
import backgroundWATER from "../assets/img/water.jpg";
import DEFAULT from "../assets/img/unknown.jpg";

// Type icons
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


const getPokes = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return await res.json();     
    } catch (error) {
        console.log(error)
    } 
}

export default async () => {
    // Create the view
    const divElement = document.createElement('div')
    divElement.innerHTML = view;


    // Assign the start and end points
    let start = 1
    let end = 150
    
    // Create the array where pokemon will be storaged
    const pokeArr = []
    
    // for loop to get each pokemon with an id
    for(let id = start; id <= end; id++) {

        const pokes = await getPokes(id);
        pokeArr.push(pokes)
        
    }
    
    // assign the pokeList const to #pokeList element
    const pokeList = divElement.querySelector('#pokeList')
    
    // Verify that the array has been corrected created
    console.log(pokeArr)
    

    // Array for the types
    const typesList = []

    // for loop to get each pokemon information and create an html element with that info
    pokeArr.forEach(poke => {
        typesList.push(poke.types[0].type.name)

        let background = ''
        let icon = ''

        switch(poke.types[0].type.name) {
            case "grass":
                background = backgroundGRASS;
                icon = iconGRASS;
                break;
            case "fire":
                background = backgroundFIRE;
                icon = iconFIRE;
                break;
            case "water":
                background = backgroundWATER;
                icon = iconWATER;
                break;
            case "bug":
                background = backgroundBUG;
                icon = iconBUG;
                break;
            case "normal":
                background = backgroundNORMAL;
                icon = iconNORMAL;
                break;
            case "dark":
                background = backgroundDARK;
                icon = iconDARK;
                break;
            case "dragon":
                background = backgroundDRAGON;
                icon = iconDRAGON;
                break;
            case "fairy":
                background = backgroundFAIRY;
                icon = iconFAIRY;
                break;
            case "fighting":
                background = backgroundFIGHTING;
                icon = iconFIGHTING;
                break;
            case "ghost":
                background = backgroundGHOST;
                icon = iconGHOST;
                break;
            case "ground":
                background = backgroundGROUND;
                icon = iconGROUND;
                break;
            case "ice":
                background = backgroundICE;
                icon = iconICE;
                break;
            case "poison":
                background = backgroundPOISON;
                icon = iconPOISON;
                break;
            case "psychic":
                background = backgroundPSYCHIC;
                icon = iconPSYCHIC;
                break;
            case "rock":
                background = backgroundROCK;
                icon = iconROCK;
                break;
            case "steel":
                background = backgroundSTEEL;
                icon = iconSTEEL;
                break;
            case "flying":
                background = backgroundFLYING;
                icon = iconFLYING;
                break;
            case "electric":
                background = backgroundELECTRIC;
                icon = iconELECTRIC;
                break;
            default:
                background = DEFAULT;
        }

        pokeList.innerHTML += `
        <div class="col col-4 margin-cols">
            <div class="card" style="background-image: url(${background}); background-size: 100%; background-position: center; background-attachment: fixed">
                <div class="card-id">${poke.id}</div>
                    <div class="card-img">
                        <img src="${poke.sprites.other.dream_world.front_default}" width="150">
                    </div>
                    <div class="card-body">
                            <div class="card-title mb-5">
                                ${poke.name.charAt(0).toUpperCase() + poke.name.slice(1) }
                            </div>
                            <ul style="list-style: none">
                            <li>
                            Main type:
                            </li>
                            <li>
                            <img src="${icon}" width="30" height="30" class="mt-1">
                            </li>
                            <li class="mt-2">
                            Weight: ${poke.weight}
                            </li>
                            <li>
                            Base experience: ${poke.base_experience}
                            </li>
                        
                            </ul>
                    </div>
                </div>
            </div>
        </div>
        `;        
        
    })
    
    
    
    // console.log(typesList)
    
    

    

    
    return divElement;
};
