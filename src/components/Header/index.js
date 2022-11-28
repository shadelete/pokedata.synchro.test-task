import './style.scss'
import {addCard} from "./buttonsFunctions.js";
import {template} from "./headetTemplate.js";

function createButton (text,id,event) {
    const el = this.element = document.createElement('button');
    el.innerHTML = text;
    el.setAttribute('id',id);
    el.addEventListener('click',event,false);
    return el;
}



export const Header = () => {
    const header = document.createElement("header");
    header.classList.add('header');

    const add = new createButton('add','add',addCard);


    header.innerHTML = template;

    const buttonWrapper = header.querySelector('.header-menu');

    buttonWrapper.appendChild(add)

    return header;
}

