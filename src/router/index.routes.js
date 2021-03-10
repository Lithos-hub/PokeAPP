import { pages, components, mobile_pages, mobile_components } from "../controllers/index.js"


const content = document.querySelector("#root");
const mob_content = document.querySelector('#mobile-root');

// Desktop components

const navbarComponent = document.querySelector("#navbar-component")
const musicPlayerComponent = document.querySelector("#musicPlayer-component")

// Mobile components

const mobNavbarComponent = document.querySelector("#mob-navbar-component")

function showComponents() {
    navbarComponent.appendChild(components.navbar())
    musicPlayerComponent.appendChild(components.musicplayer())
}

function hideComponents() {
    navbarComponent.innerHTML = '';
    musicPlayerComponent.innerHTML = '';
}

function showMobileComponents(){
    mobNavbarComponent.appendChild(mobile_components.navbar())
}

function hideMobileComponents(){
    mobNavbarComponent.innerHTML = ''; 
}



const router = async (route) => {
    content.innerHTML = '';
    mob_content.innerHTML = '';
    
    // 1920px WIDTH DEVICES

    if(window.outerWidth >= 601) {

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
    
    if(window.outerWidth <= 600) {
        switch(route) {
            
            case "":
            hideMobileComponents();
            return mob_content.appendChild(mobile_pages.home())
            
            case "#/":
            hideMobileComponents();
            return mob_content.appendChild(mobile_pages.home())

            case "#/app":
            hideMobileComponents();
            return { 
                page: mob_content.appendChild(await mobile_pages.api()),
                others: showMobileComponents()
            }
                          
        }
    }
}

export { router }
