import './style.scss'

export const createNewCard = (data) => {
    const card = document.createElement('div');
    card.classList.add('card')
    const card_name = document.createElement('h1');
    const card_img = document.createElement('img');
    data.map(el=> {
        card_name.innerHTML = el.name || '';
        card_img.src = el.picture;
        card.appendChild(card_name);
        card.appendChild(card_img);
        console.log(el.name)
    })
	return card;
}