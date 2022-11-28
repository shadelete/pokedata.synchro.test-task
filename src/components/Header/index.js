import './style.scss'

function createButton (text,id,event) {
    const el = this.element = document.createElement('button');
    el.innerHTML = text;
    el.setAttribute('id',id);
    el.addEventListener('click',event);
    return el;
}

export const Header = () => {
    const header = document.createElement("header");

    // const add = new createButton('add','add',)

    header.classList.add('header')

    header.innerHTML =
        `
            <div class="container">
              <div class="header-wrapper">
                <div class="header-menu">
                  <button id="add">Add</button>
                  <button id="fill">Fill</button>
                  <button id="del">Delete</button>
                  <button id="clear">Clear</button>
                </div>			
              </div>
            </div>
	      `

    return header;
}

