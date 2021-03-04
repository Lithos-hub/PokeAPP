import Home from './home.controller'
import API from './api.controller'
import notfound from './404.controller'

import Navbar from './navbar.controller'
import MusicPlayer from './musicPlayer.controller'

const pages = {
    home: Home,
    api: API,
    notfound: notfound
}

const components = {
    navbar: Navbar,
    musicplayer: MusicPlayer
}

export { pages, components };