import '../styles.scss'

import { router } from '../router/index.routes'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

router(window.location.hash)

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})
