import {createNewCard} from "../../components/Card/index.js";

export const init = () => {
    const container = document.getElementById('main-wrapper');

    const Control = {
        // fill	: 	document.querySelector('#fill'),

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
            // this.fill.addEventListener('click',this.fillCards,false);
        }
    }
    return Control;
}









