import './style.scss'

export const createNewCard = (data) => {
    const card = document.createElement('div');
    card.classList.add('card')
    const card_name = document.createElement('h1');
    const card_img = document.createElement('img');

    card_name.innerHTML = data.name || '';
    card_img.src = data.picture;
    card.appendChild(card_name);
    card.appendChild(card_img);
	return card;
}