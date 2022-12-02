import {clearAllItemsFromHistoryStorage, retrieveFromHistoryToData} from "../../management/localStorage.js";

export const clearHistory = () => {
    clearAllItemsFromHistoryStorage();
    document.querySelector('.modal').remove()
}

export const retrieveHistory = () => {
    retrieveFromHistoryToData();
}