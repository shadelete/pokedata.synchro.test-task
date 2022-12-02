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
import {historyCard} from "../History/index.js";

export const addCard = async () => {
    const container = document.getElementById('main-wrapper');

    container.appendChild(createNewCard({picture:preloader}))

    const res = await getData(randomInt(1,905));

    await container.removeChild(container.lastChild)

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

    const storage = JSON.parse(localStorage.history);

    const modal = historyCard(storage)

    createModalWindow(modal);

}

export const fillToggle = () => {

    const button = event.currentTarget;
    const wrapper = document.getElementById('main-wrapper');

    const infinityScroll = async () => {

        if(window.outerWidth < 768) {
            if ( (wrapper.scrollLeft !== window.innerWidth - document.body.offsetWidth) ) {
                await fillCards()
            }
        } else {
            if ( (window.scrollY !== window.innerHeight - document.body.offsetHeight) ) {
                await fillCards();
            }
        }
    }

    const buttonOn =  async () => {
        button.classList.add('fill-active');

        wrapper.children.length || await addCard();
        await fillCards();


        if(window.outerWidth < 768) {
            wrapper.onscroll = infinityScroll
        } else {
            window.onscroll = infinityScroll
        }

    }

    const buttonOff = () => {
        button.classList.remove('fill-active');
        window.onscroll = null;
        wrapper.onscroll = null;
    }

    button.classList.contains('fill-active') ? buttonOff() : buttonOn()
}


export const fillCards = async (state) => {

    const cards_wrapper = document.getElementById('main-wrapper');
    const body = document.getElementById('app');
    const card = document.querySelector('.card');

    const getLastCardViewportDetect = () => {
        let rect = cards_wrapper.lastElementChild.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) ||
            (body.offsetWidth - (cards_wrapper.lastElementChild.getBoundingClientRect().left + card.clientWidth)) > card.clientWidth
        );
    }

    if (
        getLastCardViewportDetect()
    ) {
       await addCard();
       fillCards(true);
    }

}
