import {createNewCard} from "../components/Card/index.js";

export const loadDataFromLocalStorage = () => {
    const container = document.getElementById('main-wrapper');
    const storage = JSON.parse(localStorage.data);
    for(let i=0;i<storage.length;i++){
        container.appendChild(createNewCard(storage[i]))
    }
}