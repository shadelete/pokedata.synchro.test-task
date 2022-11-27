import './style.scss'

export const createNewCard = (name,url) => {
	const card = document.createElement('div');
	card.classList.add('card')
	const card_name = document.createElement('h1');
	const card_img = document.createElement('img');

	card_name.innerHTML = name;
	card_img.src = url;

	card.appendChild(card_name);
	card.appendChild(card_img);

	return card;
}