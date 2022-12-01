import './index.scss'

export const Footer = () => {
    const main = document.createElement('section');
    main.classList.add('footer');
    main.innerHTML =
        `
            <div class="container">
              <div class="footer-wrapper">
                  <p>Made with <span>❤</span> by <a href="https://github.com/shadelete" target="_blank">shadelete</a> </p>
              </div>	
            </div>
        `
    return main;
}



