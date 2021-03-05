import navbar from "../components/navbar/navbar.html"
import '../components/navbar/styles.scss'

// Images imports
import BRAND from "../assets/img/app-logo.png";
import WEBPACKLOGO from "../assets/img/webpack.png";

export default () => {

    // Images creation
    const brandlogo = new Image();
    brandlogo.src = BRAND;

    const webpacklogo = new Image();
    webpacklogo.src = WEBPACKLOGO
    
    // View creation
    const divElement = document.createElement('div')
    divElement.innerHTML = navbar

    // Image div assignment
    const brandDiv = divElement.querySelector(".navbar-brand");
    const webpackLogoDiv = divElement.querySelector(".webpack-logo");

    // Images generation
    brandDiv.appendChild(brandlogo);
    webpackLogoDiv.appendChild(webpacklogo);
    
    


    return divElement;
}
