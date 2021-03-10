import loader from "../../components/mobile/loader/loader.html";
import "../../components/mobile/loader/styles.scss";


export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = loader;

    return divElement;
}