import {getData} from "../../api/api.js";
import preloader from "../../assets/img/preloader.svg"
import {pokeData} from "../../data/pokeData.js";
import {concatArrays} from "../../services/concatArrays.js";
import {randomInt} from "../../services/random.js";
import {createNewCard} from "../../components/Card/index.js";

export const init = () => {
    const container = document.getElementById('main-wrapper');

    const Control = {
        add		: 	document.querySelector('#add'),
        del		: 	document.querySelector('#del'),
        fill	: 	document.querySelector('#fill'),
        clear	: 	document.querySelector('#clear'),
        async addCard() {
            container.appendChild(createNewCard({picture:preloader}))
            const res = await getData(randomInt(1,905));
            pokeData.push({
                id: res.id,
                name: res.name,
                picture: res.sprites.front_default
            })
            container.removeChild(container.lastChild)
            container.appendChild(createNewCard({id:res.id,name:res.name,picture: res.sprites.front_default}))

            localStorage.setItem("data",
                localStorage.data === undefined
                    ||
                localStorage.length === 0
                ? JSON.stringify(pokeData)
                : JSON.stringify(concatArrays(JSON.parse(localStorage.data),[{id: res.id,name:res.name,picture: res.sprites.back_default}]))
            );
        },
        deleteCard() {
            localStorage.setItem("data",JSON.stringify(JSON.parse(localStorage.data).slice(0, -1)));
            container.removeChild(container.lastChild)
        },
        clearCards() {
            pokeData.length = 0
            localStorage.clear();
            container.innerHTML = ''
        },
        async fillCards() {

            const cards_wrapper = document.getElementById('main-wrapper');
            const main = document.querySelector('.main');
            const card = document.querySelector('.card')

            if (

                (main.offsetHeight - (cards_wrapper.lastElementChild.getBoundingClientRect().top + card.clientHeight)) > card.clientHeight
                ||
                (main.offsetWidth - (cards_wrapper.lastElementChild.getBoundingClientRect().left + card.clientWidth)) > card.clientWidth

            ) {
                await this.addCard();
                this.fillCards();
            } else {
                this.fill.removeEventListener();
            }

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
            this.add.addEventListener('click',this.addCard,false);
            this.fill.addEventListener('click',this.fillCards,false);
            this.clear.addEventListener('click',this.clearCards,false);
            this.del.addEventListener('click',this.deleteCard,false);
        }
    }
    return Control;
}









