import { pages, components } from "../controllers/index.js"

const content = document.querySelector("#root");
const navbarComponent = document.querySelector("#navbar-component")
const musicPlayerComponent = document.querySelector("#musicPlayer-component")

function showComponents() {
    navbarComponent.appendChild(components.navbar())
    musicPlayerComponent.appendChild(components.musicplayer())
}

function hideComponents() {
    navbarComponent.innerHTML = '';
    musicPlayerComponent.innerHTML = '';
}



const router = async (route) => {
    content.innerHTML = '';
    
    // Pages / views
    switch(route) {

        case "":
        hideComponents()
        return content.appendChild(pages.home())
        
        case "#/":
        hideComponents()
        return content.appendChild(pages.home())
        
        case "#/app":
        hideComponents()
        return { 
            page: content.appendChild(await pages.api()),
            others: showComponents()
        }

        case "#/about":
        hideComponents()
        return {
            page: content.appendChild(pages.about()),
            others: showComponents()   
        }
            
        default:
        hideComponents()
        return content.appendChild(pages.notfound())
    

    }
}

export { router }
