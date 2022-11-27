import './style.css'
import {Header} from "./src/sections/header/index.js";
import {Main} from "./src/sections/main/index.js";
import './src/elements/card/style.scss'
import {compose} from "./src/services/compose.js";
import {init} from "./src/controller/Control/control.js";


window.onload = () => {

    if (localStorage.length === 0 || localStorage.data === undefined) {
        compose(init().initControl())
    } else {
        compose(init().initStorage(),init().initControl())
    }




}

const App = document.querySelector('#app');

App
    .appendChild(Header)
    .appendChild(Main)



