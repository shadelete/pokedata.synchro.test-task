import {createNewCard} from "../../components/Card/index.js";

export const init = () => {
    const container = document.getElementById('main-wrapper');

    const Control = {
        fill	: 	document.querySelector('#fill'),
        async fillCards() {

            const cards_wrapper = document.getElementById('main-wrapper');
            const main = document.querySelector('.main');
            const card = document.querySelector('.card')

            // if (
            //
            //     (main.offsetHeight - (cards_wrapper.lastElementChild.getBoundingClientRect().top + card.clientHeight)) > card.clientHeight
            //     ||
            //     (main.offsetWidth - (cards_wrapper.lastElementChild.getBoundingClientRect().left + card.clientWidth)) > card.clientWidth
            //
            // ) {
            //     await this.addCard();
            //     this.fillCards();
            // } else {
            //     this.fill.removeEventListener();
            // }

        },
        loadDataFromLocalStorage(data) {
            for(let i=0;i<data.length;i++){
                container.appendChild(createNewCard(data[i]))
            }
        },
        initStorage() {
          const storage = JSON.parse(localStorage.data);
          this.loadDataFromLocalStorage(storage);
        },
        initControl() {
            this.fill.addEventListener('click',this.fillCards,false);
        }
    }
    return Control;
}









