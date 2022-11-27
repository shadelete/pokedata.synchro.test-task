import {getData} from "../../api/api.js";
import {createNewCard} from "../../elements/card/index.js";
import preloader from "../../assets/img/preloader.svg"
import {pokeData} from "../../data/pokeData.js";

export const init = () => {
     const Control = {
        add		: 	document.querySelector('#add'),
        del		: 	document.querySelector('#del'),
        fill	: 	document.querySelector('#fill'),
        clear	: 	document.querySelector('#clear'),
        async addCard() {
            const wrapper = document.getElementById('main-wrapper')
            wrapper.appendChild(createNewCard('',preloader))
            const res = await getData();
            pokeData.push({
                name: res.name,
                picture: res.sprites.back_default
            })
            wrapper.removeChild(wrapper.lastChild)
            wrapper.appendChild(createNewCard(pokemonSpecs.name,pokemonSpecs.imgUrl))
        },
        initControl() {
            this.add.addEventListener('click',this.addCard,false);
        }
    }
    Control.initControl();
}

// const deleteCard = () => {
//     const cards_wrapper = document.getElementById('main-wrapper');
//     cards_wrapper.removeChild(cards_wrapper.lastElementChild)
// }
//
// const clearCards = () => {
//     const cards_wrapper = document.getElementById('main-wrapper');
//     cards_wrapper.innerHTML = ''
// }

const fillCards = async () => {
    const cards_wrapper = document.getElementById('main-wrapper');

    const cards_wrapperHeight = cards_wrapper.offsetHeight;
    const card = document.querySelector('.card')
    const cardHeight = card.offsetHeight;

    if ((cards_wrapperHeight-(cardHeight*3)) < cardHeight) {
        return 0;
    } else {
        await addCard();
        fillCard();
    }

}
//
// Control.fill.addEventListener('click',fillCards,false)
// Control.clear.addEventListener('click',clearCards,false)
// Control.del.addEventListener('click',deleteCard,false)

