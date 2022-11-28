import './style.css'
import {Header} from "./src/components/Header/index.js";
import {Main} from "./src/sections/main/index.js";
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

console.log(Header)
console.log(Main)

App.appendChild(Header());
App.appendChild(Main);




