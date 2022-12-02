import {createNewCard} from "../Card/index.js";
import {createModalWindow} from "../../elements/modal/index.js";
import {clearHistory} from "./buttonsFunctions.js";
import "./style.scss"

export function CreateHistoryControl(className,text, event) {
    const el = this.element = document.createElement('div');
    el.classList.add(className);
    el.innerText = text;
    el.addEventListener('click', event)
    return el;
}

const template =
    `
    <div class="history-wrapper">
        <div class="history-cards">             
        </div>
        <div class="history-control">             
        </div>
    </div> 
    `

export const historyCard = async (storage) => {


    const clearHistoryButton = new CreateHistoryControl('history-control-clear', 'clear',clearHistory);
    const retrieveCardsButton = new CreateHistoryControl('history-control-retrieve','retrieve' )

    const history = document.createElement('div')
    history.classList.add('history')
    history.innerHTML = template;

    const controlWrapper = history.querySelector('.history-control');
    const cardsWrapper = history.querySelector('.history-cards');

    controlWrapper.appendChild(clearHistoryButton);
    controlWrapper.appendChild(retrieveCardsButton);

    for (let i = 0; i < storage.length; i++) {
        cardsWrapper.appendChild(createNewCard(storage[i]))
    }

    createModalWindow(history);

}