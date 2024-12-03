const upButton = document.querySelector('.body__up-button');

const onUpButtonClick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

upButton.addEventListener('click', onUpButtonClick);


const onWindowScroll = () => {
    if(window.pageYOffset > 200) {
        upButton.classList.add('body__up-button--show');
    } else {
        upButton.classList.remove('body__up-button--show');
    }
}

window.addEventListener('scroll', onWindowScroll);