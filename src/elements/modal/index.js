import {getData} from "../../api/api.js";
import "./style.scss"

function ModalWindow() {
    this.element = document.createElement('div');
    this.element.classList.add('modal');
    return this.element;
}

function ModalInner() {
    this.element = document.createElement('div');
    this.element.classList.add('modal-inner');
    return this.element;
}

export const createModal = async (id) => {

    const modal = new ModalWindow();
    const modalInner = new ModalInner();

    const response = await getData(id);

    modalInner.innerHTML = response.name;
    modal.appendChild(modalInner)
    modal.addEventListener('click',(e)=>{
        if(e.target.getAttribute("class") === "modal"){
            e.target.remove();
        }
    })

    const body = document.querySelector('#app');
    body.appendChild(modal)
}