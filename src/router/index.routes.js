import { pages, components } from "../controllers/index.js"

const content = document.querySelector("#root");
const navbarComponent = document.querySelector("#navbar-component")
const musicPlayerComponent = document.querySelector("#musicPlayer-component")
const loaderComponent = document.querySelector("#loaderDIV")

// Components
// navbarComponent.appendChild(components.navbar())
// musicPlayerComponent.appendChild(components.musicplayer())

function showComponents() {
    navbarComponent.appendChild(components.navbar())
    musicPlayerComponent.appendChild(components.musicplayer())
    loaderComponent.appendChild(components.loader())

}

function hideComponents() {
    navbarComponent.innerHTML = '';
    musicPlayerComponent.innerHTML = '';
}

function hideLoader() {
    loaderComponent.innerHTML = '';
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
        showComponents()
        return { 
            page: content.appendChild(await pages.api()),
            loader: hideLoader()
        }
            
        default:
        hideComponents()
        return content.appendChild(pages.notfound())
    

    }
}

export { router }
