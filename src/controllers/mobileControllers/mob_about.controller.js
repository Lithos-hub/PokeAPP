import about from "../../mobile/about/about.html";
import "../../mobile/about/styles.scss";

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = about;

    return divElement;
}