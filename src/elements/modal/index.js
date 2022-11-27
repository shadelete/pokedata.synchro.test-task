export const createModal = (id) => {

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalInner = document.createElement('div');
    modalInner.classList.add('modal-inner');

    modalInner.innerHTML = id;
    modal.appendChild(modalInner)
    modal.addEventListener('click',(e)=>{
        if(e.target.getAttribute("class") === "modal"){
            e.target.remove();
        }
    })

    const body = document.querySelector('#app');
    body.appendChild(modal)
}