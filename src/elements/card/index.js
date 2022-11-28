import './style.scss'
import {createModal} from "../modal/index.js";

export const createNewCard = (data) => {
    const card = document.createElement('div');
    card.setAttribute("id",data.id || '')
    card.classList.add('card');
    card.addEventListener('click',(e)=>{
        e.preventDefault();
        createModal(e.currentTarget.getAttribute("id"))
    })

    const card_name = document.createElement('h1');
    const card_img = document.createElement('img');

    card_name.innerHTML = data.name || '';
    card_img.src = data.picture;
    card.appendChild(card_name);
    card.appendChild(card_img);
	return card;
}