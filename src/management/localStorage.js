import {createNewCard} from "../components/Card/index.js";

export const loadDataFromLocalStorage = () => {

    const container = document.getElementById('main-wrapper');

    const storage = JSON.parse(localStorage.data);

    for(let i=0;i<storage.length;i++){
        container.appendChild(createNewCard(storage[i]))
    }

}

export const addItemsToHistoryStorage = (newItem) => {
    const currentHistoryLocalStorage = JSON.parse(localStorage.history);
    const newTempHistory = [...currentHistoryLocalStorage,newItem];
    localStorage.setItem("history",JSON.stringify(newTempHistory));
}

export const addItemsToLocalStorage = (newItem) => {
    const currentDataLocalStorage = JSON.parse(localStorage.data);
    const newTempData = [...currentDataLocalStorage,newItem];
    localStorage.setItem("data",JSON.stringify(newTempData));
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

export const clearAllItemsFromDataStorage = () => {
    const container = document.getElementById('main-wrapper');
    localStorage.setItem('data', "[]");
    container.innerHTML = ''
}

export const setEmptyTemplateStorage = () => {
    localStorage.setItem('data', '[]');
    localStorage.setItem('history', '[]');
}

export const clearAllItemsFromHistoryStorage = () => {
    const container = document.querySelector('.history-cards');
    localStorage.setItem('history', "[]");
    container.innerHTML = ''
}

export const retrieveFromHistoryToData = () => {

    const container = document.querySelector('.history-cards');

    const currentHistoryLocalStorage = JSON.parse(localStorage.history);
    const currentDataLocalStorage = JSON.parse(localStorage.data);

    const newTempHistory = [...currentHistoryLocalStorage,newItem];
    localStorage.setItem("history",JSON.stringify(newTempHistory));

    localStorage.setItem('history', "[]");
    container.innerHTML = ''
}