import './style.scss'
import {
    addCard,
    clearCards,
    deleteCard,
    fillToggle,
    showHistory,
} from "./buttonsFunctions.js";
import {template} from "./headetTemplate.js";

function createButton (text,id,event) {
    const el = this.element = document.createElement('button');
    el.classList.add(id)
    el.innerHTML = text;
    el.setAttribute('id',id);
    el.addEventListener('click',event,false);
    return el;
}

export const Header = () => {
    const header = document.createElement("header");
    header.classList.add('header');

    const add           = new createButton('add','add',addCard);
    const del           = new createButton('del','del',deleteCard);
    const clear         = new createButton('clear','clear',clearCards);
    const fill          = new createButton('fill','fill',fillToggle);
    const history       = new createButton('history','history',showHistory);

    header.innerHTML = template;

    const buttonWrapper = header.querySelector('.header-menu');

    buttonWrapper.appendChild(add)
    buttonWrapper.appendChild(del)
    buttonWrapper.appendChild(clear)
    buttonWrapper.appendChild(fill)
    buttonWrapper.appendChild(history)

    return header;
}

