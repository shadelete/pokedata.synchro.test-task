import './index.scss'

export const Main = () => {
    const main = document.createElement('section');
    main.classList.add('main');
    main.innerHTML =
        `
            <div class="container">
              <div id="main-wrapper" class="main-wrapper">
                
              </div>	
            </div>
        `
    return main;
}



