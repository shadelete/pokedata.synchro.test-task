import './index.scss'

export const Footer = () => {
    const main = document.createElement('section');
    main.classList.add('footer');
    main.innerHTML =
        `
            <div class="container">
              <div class="footer-wrapper">
                  <p>Made with ❤ by shadelete </p>
              </div>	
            </div>
        `
    return main;
}



