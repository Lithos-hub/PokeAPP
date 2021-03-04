import view from '../views/404/404.html'
import '../views/404/styles.scss'

export default () => {
    const divElement = document.createElement('div');

    divElement.innerHTML = view;

    return divElement;
}