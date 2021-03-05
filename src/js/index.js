import '../styles.scss'

import { router } from '../router/index.routes'
// import {pages, components} from "../controllers/index.js";

router(window.location.hash)

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})
