import {createAddCard, createNewCard} from "../components/Card/index.js";
import plus from "../assets/img/plus.svg";
import {pokeData} from "../data/pokeData.js";
import {addCard} from "../components/Header/buttonsFunctions.js";

export const pushAddCardToLocalStorage = () => {

}

export const Observer = (data) => {

    const container = document.getElementById('main-wrapper');

    const newStorage        = JSON.parse(data)
    const currentlyStorage  = JSON.parse(localStorage.data);

    if (newStorage.length !== currentlyStorage.length){
        for(let i=0;i<newStorage.length;i++){
            container.appendChild(createNewCard(newStorage[i]))
        }
    }

}

export const loadDataFromLocalStorage = () => {

    const container = document.getElementById('main-wrapper');

    const newData = [];


    if (localStorage.data === undefined || localStorage.length === 0) {

        newData.push({id:0,name:'',picture: plus})
        localStorage.setItem("data",JSON.stringify(newData));

    } else {

        const storage = JSON.parse(localStorage.data);
        newData.push(...storage);

    }

    console.log(newData)

    for(let i=0;i<newData.length;i++){
        container.appendChild(createNewCard(newData[i]))
    }

    container.firstElementChild.addEventListener('click',addCard);
}

export const addItemsToLocalStorage = (newItem) => {
    const currentLocalStorage = [...JSON.parse(localStorage.data)];
    const newTemp = [...currentLocalStorage,newItem];
    localStorage.setItem("data",JSON.stringify(newTemp));
    localStorage.setItem("history",JSON.stringify(newTemp));
}

export const removeLastItemFromLocalStorage = () => {
    const container = document.getElementById('main-wrapper');

    if(JSON.parse(localStorage.data).length === 1) {
        return null;
    } else {
        localStorage.setItem("data",JSON.stringify(JSON.parse(localStorage.data).slice(0, -1)));
        container.removeChild(container.lastChild)
    }

}

export const clearAllItemsFromLocalStorage = () => {
    const container = document.getElementById('main-wrapper');
    pokeData.length = 0
    localStorage.setItem('data','')
    localStorage.setItem('data',JSON.stringify([createAddCard()]))
    container.innerHTML = ''
    container.appendChild(createNewCard(createAddCard()))
}