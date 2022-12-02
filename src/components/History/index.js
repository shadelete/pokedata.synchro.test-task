import {createNewCard} from "../Card/index.js";
import {createModalWindow} from "../../elements/modal/index.js";

export function CreateHistoryControl(className,text, event) {
    const el = this.element = document.createElement('button');
    el.classList.add(className);
    el.innerText = text;
    el.addEventListener('click', event)
    return el;
}

const template =
    `
    <div class="history-wrapper">
        <div class="history-control">             
        </div>
        <div class="history-cards">             
        </div>
    </div> 
    `

export const historyCard = (storage) => {

    const clearHistory = new CreateHistoryControl('clear-history', 'clear');
    const retrieveCards = new CreateHistoryControl('retrieve-history','retrieve' )

    const history = document.createElement('div')
    history.classList.add('history')
    history.innerHTML = template;

    const controlWrapper = history.querySelector('.history-control');
    const cardsWrapper = history.querySelector('.history-cards');

    controlWrapper.appendChild(clearHistory);
    controlWrapper.appendChild(retrieveCards);


    for (let i = 0; i < storage.length; i++) {
        cardsWrapper.appendChild(createNewCard(storage[i]))
    }

    createModalWindow(history);

}