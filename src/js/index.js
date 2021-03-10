import '../styles.scss';
import '../mobile/mobile.scss';

import { router } from '../router/index.routes'


router(window.location.hash)

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})
