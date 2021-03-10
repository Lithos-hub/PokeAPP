import about from "../views/about/about.html";
import "../views/about/styles.scss";

export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = about;

    return divElement;
}