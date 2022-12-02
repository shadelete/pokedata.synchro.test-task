import "./style.scss"

function ModalWindow() {
    const el = this.element = document.createElement('div');
    el.classList.add('modal');
    el.addEventListener('click',(e)=>{
        if(e.target.classList.contains("modal")){
            el.remove();
        }
    },true)
    return el;
}

function ModalInner(data) {
    const el = document.createElement('div');
    el.classList.add('modal-inner');
    el.appendChild(data)
    return el;
}

export const createModalWindow = (data) => {
    const modalWindow           = new ModalWindow();
    const modalWindowContent    = new ModalInner(data);
    modalWindow.appendChild(modalWindowContent)
    const body = document.querySelector('#app');
    body.appendChild(modalWindow)
}

