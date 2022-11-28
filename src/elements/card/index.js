import './style.scss'
import {createModalWindow} from "../modal/index.js";
import {appendMultiplyChild} from "../../services/templates.js";

function Card(id) {
    const el = this.element = document.createElement('div');
    el.classList.add('card');
    el.setAttribute("id",id || '')
    el.addEventListener('click',(e)=>{
        e.preventDefault();
        createModalWindow(e.currentTarget.getAttribute("id"))
    });
    return el;
}

function CardName(name) {
    const el = this.element = document.createElement('h1');
    el.innerHTML = name || '';
    return el;
}

function CardImg(url) {
    const el = this.element = document.createElement('img');
    el.src = url;
    return el;
}

export const createNewCard = (data) => {

    const card      = new Card(data.id)
    const cardName  = new CardName(data.name);
    const cardImg   = new CardImg(data.picture);

    const wrapper   = new appendMultiplyChild([cardName,cardImg])

    card.appendChild(wrapper);

	  return card;
}

