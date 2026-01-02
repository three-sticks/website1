import "./styles.scss";
import initScrollReveal from "./scripts/scrollReveal";
import initTiltAnimation from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
// index.js or main.js



initScrollReveal(targetElements, defaultProps);
initTiltAnimation();


document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active'); 
        });
    }
});


  
