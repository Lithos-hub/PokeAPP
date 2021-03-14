// Views
import Home from './home.controller';
import { showCards } from './api.controller';
import About from './about.controller';
import notfound from './404.controller';

// Components
import Navbar from './navbar.controller';
import MusicPlayer from './musicPlayer.controller';
import Loader from './loader.controller';

// Mobile views
import Mob_home from './mobileControllers/mob_home.controller';
import { showMobileCards } from "./mobileControllers/mob_api.controller";
import Mob_About from "./mobileControllers/mob_about.controller";

// Mobile components
import Mob_Navbar from "./mobileControllers/mob_navbar.controller.js";
import Mob_Loader from "./mobileControllers/mob_loader.controller.js"

const pages = {
    home: Home,
    api: showCards,
    about: About,
    notfound: notfound
}

const components = {
    navbar: Navbar,
    musicplayer: MusicPlayer,
    loader: Loader
}

const mobile_pages = {
    home: Mob_home,
    api: showMobileCards,
    about: Mob_About,
}

const mobile_components = {
    navbar: Mob_Navbar,
    loader: Mob_Loader,
}

export { pages, components, mobile_pages, mobile_components };