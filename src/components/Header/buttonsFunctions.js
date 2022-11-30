import {createNewCard} from "../Card/index.js";
import preloader from "../../assets/img/preloader.svg";
import {getData} from "../../api/api.js";
import {randomInt} from "../../services/random.js";
import {
    addItemsToHistoryStorage,
    addItemsToLocalStorage,
    clearAllItemsFromLocalStorage,
    removeLastItemFromLocalStorage
} from "../../management/localStorage.js";
import {createModalWindow} from "../../elements/modal/index.js";

export const addCard = async () => {
    const container = document.getElementById('main-wrapper');

    container.appendChild(createNewCard({picture:preloader}))

    const res = await getData(randomInt(1,905));

    container.removeChild(container.lastChild)

    container.appendChild(createNewCard({id:res.id,name:res.name,picture: res.sprites.front_default}))

    addItemsToLocalStorage({id: res.id,name:res.name,picture: res.sprites.front_default})
    addItemsToHistoryStorage({id: res.id,name:res.name,picture: res.sprites.front_default})

}

export const deleteCard = () => {
    removeLastItemFromLocalStorage();
}

export const clearCards = () => {
    clearAllItemsFromLocalStorage();
}

export const showHistory = () => {
    const storage = JSON.parse(localStorage.history).slice(1);

    const wrapper = document.createElement('div')
    wrapper.classList.add('header-history-wrapper')
    for(let i=0;i<storage.length;i++){
        wrapper.appendChild(createNewCard(storage[i]))
    }
    console.log(wrapper);
    createModalWindow(wrapper);
}

export const fillCards = async () => {

    const cards_wrapper = document.getElementById('main-wrapper');
    const body = document.getElementById('app');

    const main = document.querySelector('.main');
    const card = document.querySelector('.card')

    if (

        (body.offsetHeight - (cards_wrapper.lastElementChild.getBoundingClientRect().top + card.clientHeight)) > card.clientHeight
        ||
        (body.offsetWidth - (cards_wrapper.lastElementChild.getBoundingClientRect().left + card.clientWidth)) > card.clientWidth

    ) {
        await addCard();
        fillCards();
    } else {
    }

}

