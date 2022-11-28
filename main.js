import './style.css'
import {Header} from "./src/components/Header/index.js";
import {Main} from "./src/components/Main/index.js";
import {compose} from "./src/services/compose.js";
import {loadDataFromLocalStorage} from "./src/management/localStorage.js";

window.onload = () => {

    if (localStorage.length !== 0 || localStorage.data !== undefined) {
        loadDataFromLocalStorage();
    }

}

const App = document.querySelector('#app');

App.appendChild(Header());
App.appendChild(Main());




