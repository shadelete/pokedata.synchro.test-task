import './style.scss'
import {Header} from "./src/components/Header/index.js";
import {Main} from "./src/components/Main/index.js";
import {loadDataFromLocalStorage, setEmptyTemplateStorage} from "./src/management/localStorage.js";

window.onload = () => {

    if (localStorage.data !== undefined || localStorage.length !== 0) {
        loadDataFromLocalStorage();
    } else {
        setEmptyTemplateStorage();
    }

}

const App = document.querySelector('#app');

App.appendChild(Header());
App.appendChild(Main());




