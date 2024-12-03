const button = document.querySelector('.header__button');
const portfolio = document.querySelector('.portfolio');

let timer;

const onArrowClick = () => {

    portfolio.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
        inline: "start"
    });
  };

const onWindowLoad = () => {
    timer = setInterval(() => {
        button.classList.toggle("header__button--transform");
        button.addEventListener("click", onArrowClick);
      }, 600);
}

window.addEventListener('load', onWindowLoad);